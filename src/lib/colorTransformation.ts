import { colord, HsvColor } from "colord";
import LeatherBackground from "@/assets/background/leather.png";
import Border from "@/assets/border/border.png";
import { mat3, vec3 } from "gl-matrix";

const leatherColor = "#5d3f25";

function clampToByte(x: number): number {
  if (!Number.isFinite(x)) return 0;
  if (x < 0) return 0;
  if (x > 255) return 255;
  return Math.round(x);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("canvas.toBlob() returned null"));
    }, type);
  });
}

function rotHue(deltaH: number): mat3 {
  const c = Math.cos(deltaH);
  const s = Math.sin(deltaH);

  return mat3.fromValues(1, 0, 0, 0, c, s, 0, -s, c);
}

function computeHSVMatrix(srcHSV: HsvColor, dstHSV: HsvColor): mat3 {
  const deltaH = (((dstHSV.h - srcHSV.h + 360) % 360) * Math.PI) / 180;
  const sScale = srcHSV.s > 0 ? dstHSV.s / srcHSV.s : 1;
  const vScale = srcHSV.v > 0 ? dstHSV.v / srcHSV.v : 1;

  const R_hue = rotHue(deltaH);

  const S_sat = mat3.fromValues(1, 0, 0, 0, sScale, 0, 0, 0, sScale);

  const M_hsv = mat3.create();
  mat3.multiply(M_hsv, R_hue, S_sat);
  mat3.multiplyScalar(M_hsv, M_hsv, vScale);

  return M_hsv;
}

function computeFilterFromColors(input: string, output: string): mat3 {
  const srcHSV = colord(input).toHsv();
  const dstHSV = colord(output).toHsv();

  const M_hsv = computeHSVMatrix(srcHSV, dstHSV);

  // prettier-ignore
  const RGB2HSV = mat3.fromValues(
    0.577, 0.707, 0.408,
    0.577, -0.707, 0.408,
    0.577, 0.0, -0.816
  );

  const HSV2RGB = mat3.create();
  if (!mat3.invert(HSV2RGB, RGB2HSV)) {
    throw new Error("RGB2HSV matrix is not invertible");
  }

  const M = mat3.create();
  mat3.multiply(M, HSV2RGB, M_hsv);
  mat3.multiply(M, M, RGB2HSV);
  return M;
}

export async function generateBackground(color: string): Promise<string> {
  const mat = computeFilterFromColors(leatherColor, color);
  const img = await loadImage(LeatherBackground.src);

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get 2D canvas context");

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const vin = vec3.create();
  const vout = vec3.create();

  for (let i = 0; i < data.length; i += 4) {
    vin[0] = data[i];
    vin[1] = data[i + 1];
    vin[2] = data[i + 2];

    vec3.transformMat3(vout, vin, mat);

    data[i] = clampToByte(vout[0]);
    data[i + 1] = clampToByte(vout[1]);
    data[i + 2] = clampToByte(vout[2]);
  }

  ctx.putImageData(imageData, 0, 0);

  const blob = await canvasToBlob(canvas, "image/png");
  return URL.createObjectURL(blob);
}

export async function renderBorderWithShadow(
  borderColor: string
): Promise<string> {
  const img = await loadImage(Border.src);

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D context not available");

  const lineWidth = 33;
  const inset = lineWidth / 2;
  ctx.save();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = borderColor;
  ctx.shadowColor = "transparent";
  ctx.strokeRect(
    inset,
    inset,
    canvas.width - lineWidth,
    canvas.height - lineWidth
  );
  ctx.restore();

  const r = 66;
  ctx.save();
  ctx.fillStyle = borderColor;
  ctx.shadowColor = "transparent";

  // Top-left (quarter in bottom-right of the circle centered at 0,0)
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Top-right
  ctx.beginPath();
  ctx.arc(canvas.width, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Bottom-left
  ctx.beginPath();
  ctx.arc(0, canvas.height, r, 0, Math.PI * 2);
  ctx.fill();

  // Bottom-right
  ctx.beginPath();
  ctx.arc(canvas.width, canvas.height, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  ctx.shadowColor = "rgba(0,0,0,0.75)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.drawImage(img, 0, 0);

  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
      "image/png"
    )
  );

  return URL.createObjectURL(blob);
}

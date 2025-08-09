import { fileOpen } from "browser-fs-access";

export async function selectImageAsBase64(): Promise<string> {
  // Prompt the user to select an image file
  const file = await fileOpen({
    mimeTypes: ["image/*"],
    extensions: [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"],
    multiple: false,
  });

  if (!file) throw new Error("No file was selected");

  // Read the file and convert it to a base64 data URL
  const base64 = await readFileAsDataURL(file);
  return base64;
}

function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("Failed to read file as string");
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

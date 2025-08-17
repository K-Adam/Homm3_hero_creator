#!/usr/bin/env node
import path from "path";
import symlinkDir from "symlink-dir";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createSymlink(dirname, targetDir) {
  const target = path.resolve(__dirname, "..", targetDir, dirname);
  const source = path.resolve(__dirname, "../external/Homm3BG/assets", dirname);
  const result = await symlinkDir(source, target, { overwrite: true });
  console.log(`Symlink ${result.reused ? "reused" : "created"}:`);
  console.log(`${target} → ${source}`);
}

async function copyLicense() {
  const srcPath = path.resolve(__dirname, "../external/Homm3BG/LICENSE");
  const destPath = path.resolve(__dirname, "../public/credits/Homm3BG_LICENSE");

  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.copyFile(srcPath, destPath);
}

(async () => {
  execSync("git submodule update --init --recursive", { stdio: "inherit" });
  await createSymlink("glyphs", "src/assets");
  await createSymlink("images", "public");

  await copyLicense();
})().catch((error) => {
  console.error("Error during post-install script:", error);
  process.exit(1);
});

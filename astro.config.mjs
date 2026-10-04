// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

// Asegurar copia del asset del logo oficial
const logoSource = '/Users/upa369/.gemini/antigravity/brain/6bdbbb95-2ecc-4de3-9476-f64ad1239573/.user_uploaded/media_1791071301634.png';
const publicDir = path.resolve('./public');
const logoDest = path.join(publicDir, 'logo.png');

try {
  if (fs.existsSync(logoSource)) {
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.copyFileSync(logoSource, logoDest);
  }
} catch (err) {
  console.warn('Logo sync warning:', err);
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
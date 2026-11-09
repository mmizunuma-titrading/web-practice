// @ts-check
import { defineConfig } from "astro/config";

// 静的サイトとして dist/ に書き出し、Cloudflare Workers の静的アセットとして配信します
export default defineConfig({
  build: {
    format: "file", // /safety → dist/safety.html（末尾スラッシュなしのURLにする）
  },
});

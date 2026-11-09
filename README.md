# 練習商事 ミニサイト

Astro で作った2ページ（トップ・労働安全）の静的サイトです。
Cloudflare Workers の「静的アセット」機能で公開します。
※ Web制作練習用の架空の企業サイトです。

## フォルダ構成

```
src/
  layouts/Base.astro   … 全ページ共通（ヘッダー・フッター）
  pages/index.astro    … トップページ（/）
  pages/safety.astro   … 労働安全ページ（/safety）
  pages/404.astro      … 見つからないページ
  styles/global.css    … 色・文字・共通パーツ（白黒グレー）
public/favicon.svg     … タブのアイコン
astro.config.mjs       … Astroの設定
wrangler.jsonc         … Cloudflare Workersの設定
```

## よく使うコマンド

| コマンド | 内容 |
|---|---|
| `npm install` | 最初に1回だけ。必要な部品をインストール |
| `npm run dev` | 編集しながら確認（http://localhost:4321） |
| `npm run preview` | Cloudflareと同じ環境で確認（http://localhost:8787） |
| `npm run deploy` | Cloudflare Workers に公開 |

初めて公開するときは、先に `npx wrangler login` で Cloudflare にログインしてください。

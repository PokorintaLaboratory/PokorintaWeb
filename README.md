# pokorinta-web

Pokorinta Laboratory の公式サイトを構成する Astro ベースのフロントエンドです。

## 概要

- 作品情報、展示会情報、外部リンクをまとめた 1 ページ構成の静的サイト
- GitHub Pages 公開を前提に、Astro の `base` 設定 `/PokorintaWeb` を使用

## 使用技術

- Astro
- Tailwind CSS
- TypeScript

## セットアップ

Node.js 22.12.0 以上を使用してください。

```sh
npm install
```

## 開発方法

ローカル開発サーバーを起動します。

```sh
npm run dev
```

起動後、通常は `http://localhost:4321` で確認できます。

## プレビュー方法

本番用ビルドを作成して、ローカルでプレビューします。

```sh
npm run build
npm run preview
```

ビルド成果物は `dist/` に出力されます。

## ディレクトリ概要

```text
pokorinta-web/
├── public/                画像やアイコンなどの静的ファイル
├── src/
│   ├── components/        各セクションの Astro コンポーネント
│   ├── pages/             ルーティング対象のページ
│   └── styles/            グローバルスタイル
├── astro.config.mjs       Astro 設定
├── package.json           スクリプトと依存関係
└── README.md
```

## 補足

- 画像などの静的ファイルは `public/` 配下に配置します。
- GitHub Pages 向けに `base` が設定されているため、ルート相対パスを扱うときは公開先パスを意識してください。

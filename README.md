# KintoneIchiPlugins

Kintoneの自作プラグインを提供しています。美しいテーマカスタマイズから実用的な機能拡張まで、Kintoneアプリをより使いやすく、見た目も美しくするプラグインを開発・配布しています。

## 含まれるプラグイン

| プラグイン名 | 説明 | 種類 |
|-------------|------|------|
| ThemePalette | Kintoneアプリの色テーマをカスタマイズできるプラグイン。16種類の美しいカラーパレットから選択可能。 | Vite型 |

## ThemePalette プラグイン

### 概要
ThemePaletteは、Kintoneアプリの見た目を美しくカスタマイズできる色テーマプラグインです。16種類のカラーパレットから選択でき、アプリのタイトルバー、フォーム、テーブルなどの要素を統一されたデザインで彩ります。

### 機能
- 🎨 **16種類のカラーパレット**: pink、bluegray、navyBlue、greige、mintgreen、lavender、pastelyellow、darkgray、silver、beige、mossgreen、olive、vividorange、limegreen、turquoise
- 🎯 **統一されたデザイン**: アプリタイトルバー、フォーム要素、テーブル、グループフィールドなどが選択したテーマで統一
- ⚡ **軽量で高速**: Viteを使用した最適化されたビルド
- 📱 **レスポンシブ対応**: デスクトップ・モバイル両方に対応
- 🔧 **簡単設定**: プラグイン設定画面からワンクリックでテーマ変更

### カラーパレット一覧

| テーマ名 | メインカラー | 特徴 |
|---------|-------------|------|
| pink | #ff99cc | 優しいピンク系 |
| bluegray | rgb(96, 125, 139) | 落ち着いたブルーグレー |
| navyBlue | #0d6efd | ビジネス向けネイビー |
| greige | #8b7355 | 上品なグレージュ |
| mintgreen | #20c997 | 爽やかなミントグリーン |
| lavender | #6f42c1 | エレガントなラベンダー |
| pastelyellow | #ffc107 | 明るいパステルイエロー |
| darkgray | #495057 | モダンなダークグレー |
| silver | #c0c0c0 | クールなシルバー |
| beige | #f5f5dc | 温かみのあるベージュ |
| mossgreen | #8fbc8f | 自然なモスグリーン |
| olive | #808000 | クラシックなオリーブ |
| vividorange | #ff6600 | エネルギッシュなオレンジ |
| limegreen | #32cd32 | 鮮やかなライムグリーン |
| turquoise | #40e0d0 | トロピカルなターコイズ |

### 使用方法
1. プラグインをKintoneにアップロード
2. アプリにプラグインを追加
3. プラグイン設定画面で好みのカラーパレットを選択
4. アプリを更新してテーマを適用

### カスタマイズされる要素
- アプリタイトルバー（グラデーション背景）
- フォームラベルとコントロール
- テーブル（サブテーブル含む）
- グループフィールド
- 区切り線
- ボーダーとシャドウ

## 前提条件

- Node.js 18.0.0 以上
- npm 8.0.0 以上

## セットアップ

1. リポジトリをクローン:

```bash
git clone https://github.com/iguchi-K/KintoneIchiPlugins.git
cd KintoneIchiPlugins 
```

2. 依存関係をインストール:

```bash
npm install
```

3. ThemePaletteプラグインをビルド:

```bash
npm run build ThemePalette
```

これで`dist/ThemePalette/ThemePalette.zip`が生成され、Kintoneにアップロードして使用できます。


## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 謝辞

- [Kintone Plugin Packer](https://github.com/kintone/js-sdk/tree/main/packages/plugin-packer) - プラグインのパッケージングと署名用
- [Vite](https://vitejs.dev/) - ビルドツール用
- [JavaScript Obfuscator](https://obfuscator.io/) - コード難読化用

## アイコンについて

ThemePaletteプラグインで使用しているアイコンファイル（`packages/ThemePalette/src/image/icon.png`）は、プロジェクト作成者がAIによって生成したもので、自由に使っていただいて構いません。

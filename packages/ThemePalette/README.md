# Kintone Ichi Theme Hack - SASS版

## 概要

このプラグインは、Kintoneのアプリ画面にカスタムカラーテーマを適用するプラグインです。SASSを使用して色の管理を簡素化し、新しい色テーマの追加が容易になっています。

## 特徴

- **SASSベースの色管理**: 色の定義を`_variables.scss`で一元管理
- **動的テーマ切り替え**: JavaScriptで設定された色に基づいてCSSクラスを動的に適用
- **7つのプリセットカラー**: Pink, BlueGray, NavyBlue, Greige, MintGreen, Lavender, PastelYellow
- **CSS変数を使用**: パフォーマンスを考慮したCSS変数による色の適用

## ファイル構造

```
src/
├── scss/
│   ├── _variables.scss    # 色テーマの定義
│   └── main.scss         # メインのSASSファイル
├── css/
│   └── main.css          # コンパイルされたCSS（自動生成）
├── js/
│   ├── config.js         # 設定画面のJavaScript
│   └── desktop.js        # メインのJavaScript
└── html/
    └── config.html       # 設定画面のHTML
```

## 開発方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. SASSのコンパイル

```bash
# 一度だけコンパイル
npm run sass

# ファイル変更を監視して自動コンパイル
npm run sass:watch
```

### 3. プラグインのビルド

```bash
npm run build sample
```

## 新しい色テーマの追加方法

### 1. `_variables.scss`に色を追加

```scss
$themes: (
  // 既存のテーマ...
  newtheme: (
    main: #your-main-color,
    dark: #your-dark-color,
    light: #your-light-color,
    bg: #your-bg-color,
    border: #your-border-color,
    text-dark: #your-text-dark-color,
    shadow: rgba(your-shadow-color, 0.5)
  )
);
```

### 2. `main.scss`にテーマクラスを追加

```scss
.ichi-theme {
  // 既存のテーマ...
  &.theme-newtheme { @include theme-colors(newtheme); }
}
```

### 3. `config.html`にオプションを追加

```html
<option value="newtheme">NewTheme</option>
```

### 4. `desktop.js`にクラス名を追加

```javascript
document.body.classList.remove(
  // 既存のクラス...
  'theme-newtheme'
);
```

## 色の構成

各テーマは以下の7つの色で構成されています：

- `main`: メインカラー（グラデーション、ボーダーなど）
- `dark`: ダークカラー（テキスト、タイトルなど）
- `light`: ライトカラー（背景、ハイライトなど）
- `bg`: 背景色（フィールド背景など）
- `border`: ボーダー色（入力フィールドなど）
- `text-dark`: ダークテキスト色（ラベルなど）
- `shadow`: シャドウ色（影効果など）

## 技術的な詳細

### CSS変数の使用

色はCSS変数（カスタムプロパティ）として定義され、パフォーマンスを最適化しています：

```css
.ichi-theme.theme-pink {
  --main-color: #ff99cc;
  --dark-color: #d63384;
  /* ... */
}
```

### 動的クラス適用

JavaScriptで設定された色に基づいて、`body`要素に適切なクラスを適用します：

```javascript
document.body.classList.add('ichi-theme', `theme-${color}`);
```

### SASSミックスイン

色テーマの適用にはSASSのミックスインを使用して、コードの重複を避けています：

```scss
@mixin theme-colors($theme-name) {
  $theme: map-get($themes, $theme-name);
  --main-color: #{map-get($theme, main)};
  /* ... */
}
```

## トラブルシューティング

### SASSコンパイルエラー

```bash
# SASSがインストールされているか確認
npx sass --version

# 依存関係を再インストール
npm install
```

### 色が適用されない

1. `desktop.js`で正しいクラスが適用されているか確認
2. CSSファイルが正しく読み込まれているか確認
3. ブラウザの開発者ツールでCSS変数が設定されているか確認

## ライセンス

MIT License 
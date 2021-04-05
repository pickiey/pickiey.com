# Pickiey.com

公開サイトは👉[コチラ](https://pickiey.com)

## 使用ライブラリ

- フロントエンド
    - Vue  3
    - Vuex 4
    - Vue-router 4
- アニメーション
    - GSAP 3.6.0
- ビルドツール
    - Vite 2
- マークアップ
    - HTML ---> Pug
    - CSS  ---> Stylus

## セットアップと実行

```sh
git clone https://github.com/pickiey/vite.git 適当なフォルダ名
cd フォルダ名
npm install
npm run dev
```

## 元ネタ

- [soichiro-nitta/2018.nitta.studio](https://github.com/soichiro-nitta/2018.nitta.studio)


### 変更箇所

- 使用ライブラリの更新
    - Nuxt(Vue 2) : Option API ---> Vite + Vue 3 : Composition API
    - GSAP 2 ---> GSAP 3
- 機能削除
    - 音の再生機能
    - 一部トランジション(Leave)
- ルーティン簡略化
    - ブラウザ非対応ページ
    - 404ページ


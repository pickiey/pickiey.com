# Pickiey.com

公開サイトは👉[コチラ](https://pickiey.com)

--------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------

## 参考

デザインとかアニメーションは下記のパクリ(((

- [soichiro-nitta/2018.nitta.studio](https://github.com/soichiro-nitta/2018.nitta.studio)

変更箇所は以下の通り

- 使用ライブラリの最新化
    - Nuxt(Vue 2) : Option API ---> Vite + Vue 3 : Composition API
    - GSAP 2 ---> GSAP 3
- ルーティン簡略化(邪魔くさいので省いた)
    - 音の再生機能
    - 一部トランジション(Leave)
    - ブラウザ非対応ページ
    - 404ページ


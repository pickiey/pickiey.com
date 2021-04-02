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

デザインとかアニメーション表現は下記のパクリ

- [soichiro-nitta/2018.nitta.studio](https://github.com/soichiro-nitta/2018.nitta.studio)


## 元ネタからの変更箇所

- 使用ライブラリの更新
    - Nuxt(Vue 2) : Option API ---> Vite + Vue 3 : Composition API
    - GSAP 2 ---> GSAP 3
- 機能削除
    - 音の再生機能
    - 一部トランジション(Leave)

- ルーティン簡略化(邪魔くさいので)
    - ブラウザ非対応ページ
    - 404ページ

Vue や GSAP は バージョンアップで書き方や仕様が変わったりしていて､
ネットの情報は大抵 Vue 2 ､ GSAP 2 の ことだったりするので
公式のドキュメントを確認すること推奨｡

特に Vue 3 の Composition API での書き方とかは まだ参考文献少ないので苦しい｡

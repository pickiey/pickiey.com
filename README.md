# pickiey.com

公開サイト : [https://pickiey.com](https://pickiey.com)

## 使用ライブラリ

- UI
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
git clone https://github.com/pickiey/pickiey.com.git 適当なフォルダ名
cd フォルダ名
npm install
npm run dev
```

## 参考

- [soichiro-nitta/2018.nitta.studio](https://github.com/soichiro-nitta/2018.nitta.studio)


### 変更

- 使用ライブラリ
    - Nuxt(Vue 2) : Option API ---> Vite + Vue 3 : Composition API
    - GSAP 2 ---> GSAP 3
- 無効化した機能
    - 音の再生機能
    - 一部トランジション(Leave)
- 要ルーティン追加
    - ブラウザ非対応ページ
    - 404ページ


<template lang="pug">
.about(ref='root')
    .section
        .helloEng                                           Line of thinking
        .helloJa                                            価値観
    .separator
    .section
        .intro
            |                                               企業やお店の強みをブランドとして育て、良さを伝える、
            |                                               この2点を大事にしたいです。
            br
            br
            |                                               Adobeソフトを使用したグラフィック作成のスキルは
            |                                               まだまだですが、フロントエンド含むコーディングには
            |                                               自信があります。
            br
            br
            |                                               ユーザーの操作にあわせてアニメーションしたり
            |                                               なめらかにCGが動くようなサイトで
            |                                               ユーザーにワクワクしてもらえるよう、
            |                                               Vue.jsなどのUIライブラリや、WEBGLでのクリエイティブコーディングの
            |                                               スキルを伸ばしていきたいです。
            br
            br
            |                                               今のスキルでできることを詰め込むため、当サイトは
            br
            |                                               Vue3(Composition API) + GSAP v3 で実装しています。
            br
            br
            |                                               ソースコードは
            a(
              href="https://github.com/pickiey/vite",
              target='_blank'
            )                                               コチラ
    .separator
    .section
        .subTitle                                           Skillset
        ul.skillset
            li                                              Markup
                span                                        ---
                |                                           HTML5(Pug)
                span                                        /
                |                                           CSS3(Stylus)

            li                                              Library
                span                                        ---
                |                                           Vue3
                span                                        /
                |                                           GSAP

            li                                              CUI-App
                span                                        ---
                |                                           Zsh
                span                                        /
                |                                           tmux
                span                                        /
                |                                           Vim

            li                                              GUI-App
                span                                        ---
                |                                           Illustrator
                span                                        /
                |                                           Photoshop

            li                                              etc...
    .separator
    .section
        .subTitle                                           Recruit
        .welcome                                            WEB制作に関わるお仕事を探しています。
            br
            router-link(to='/contact')                      コチラ
            |                                               からお問い合わせください！
    .separator
    .section
        .subTitle                                           Social
        .social
            a(
              :href='url.github',
              target='_blank'
            )                                               GitHub
            a(
              :href='url.codepen',
              target='_blank'
            )                                               Codepen
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap } from 'gsap'
import configJson from '../assets/data/config.json'

export default {
    setup() {
    //
    // store
    //
        const store = useStore()
    //
    // computed
    //
        const completed = computed( () => store.getters.completed )
    //
    // watch
    //
        watch(
            () => completed.value, () => completedAction()
        )
        const completedAction = async() => {
            document.getElementById('scrollArea').scrollTop = 0
            await delay(300)
            requestAnimationFrame(() => {
                gsap.to('.section', {
                    duration        : 5,
                    y               : 0,
                    opacity         : 1,
                    ease            : "back.out(3)",
                    ease            : "elastic.out(1, 0.3)",
                    startAt         : {y: '40px', opacity: 0},
                    stagger         : 0.1
                })
                gsap.to('.separator', {
                    duration        : 5,
                    scaleX          : 1,
                    x               : 0,
                    opacity         : 1,
                    transformOrigin : 'left center',
                    ease            : "back.out(3)",
                    ease            : "elastic.out(1, 0.3)",
                    startAt: {scaleX: 0, x: '-20px', opacity: 0},
                    stagger         : 0.1
                })
            }) // requestAnimationFrame
        } // completedAction
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = async() => {
            document.getElementById('scrollArea').scrollTop = 0
            if (completed.value)  enter()
        } // mountedAction
    //
    // BeforeUnmount
    //
//        onBeforeUnmount( () => leave() )
    //
    // data
    //
        const url = configJson.url
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
    //
    // transition
    //
        const enter = () => {
            requestAnimationFrame(() => {
                gsap.to('.section', {
                    duration        : 1,
                    y               : 0,
                    opacity         : 1,
                    ease            : "back.out(3)",
                    startAt         : {y: '40px', opacity: 0},
                    stagger         : 0.1
                })
                gsap.to('.separator', {
                    duration        : 1,
                    scaleX          : 1,
                    x               : 0,
                    opacity         : 1,
                    transformOrigin : 'left center',
                    ease            : "back.out(3)",
                    startAt         : {scaleX: 0, x: '-20px', opacity: 0},
                    stagger         : 0.1
                })
            }) // requestAnimationFrame
        } // enter
//        const leave = () => {
//            requestAnimationFrame(() => {
//                gsap.to('.section', {
//                    duration        : 0.7,
//                    y               : '-40px',
//                    opacity         : 0,
//                    ease            : "back.in(3)",
//                    startAt         : {y: '40px', opacity: 0},
//                    stagger         : 0.1
//                })
//                gsap.to('.separator', {
//                    duration        : 0.7,
//                    scaleX          : 0,
//                    x               : '20px',
//                    opacity         : 0,
//                    transformOrigin : 'right center',
//                    ease            : "back.out(3)",
//                    startAt         : {scaleX: 0, x: '-20px', opacity: 0},
//                    stagger         : 0.1
//                })
//            }) // requestAnimationFrame
//        } // leave
        return{
            url,
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.about
    .section
        opacity                     0
    .subTitle
        color                       #555
        font-size                   22px
        font-weight                 bold
        +large()
            font-size               largeFont22
    .separator
        margin                      50px 0
        width                       15px
        height                      3px
        background                  #444
        opacity                     0
        +large()
            margin                  65px 0
    .hello
        &Eng
            font-size               22px
            font-weight             bold
            +large()
                font-size           largeFont22
        &Ja
            font-size               13px
            letter-spacing          2.5px
            +large()
                font-size           largeFont13
    .intro
        font-size                   13px
        line-height                 2
        +large()
            font-size               largeFont13
        a
            display                 inline-block
            position                relative
            &:after
                content             ''
                position            absolute
                left                0
                bottom              5px
                width               100%
                height              1px
                background          #555
    .skillset
        margin-top                  30px
        +large()
            margin-top              45px
        li
            margin-bottom           6.5px
            font-size               13px
            line-height             2
            +large()
                font-size           largeFont13
            span
                color               #555
    .welcome
        margin-top                  30px
        font-size                   13px
        line-height                 2
        +large()
            margin-top              45px
            font-size               largeFont13
        a
            display                 inline-block
            position                relative
            &:after
                content             ''
                position            absolute
                left                0
                bottom              5px
                width               100%
                height              1px
                background          #555
    .social
        margin-top                  30px
        font-size                   13px
        +large()
            margin-top              45px
            font-size               largeFont13
        a
            display                 inline-block
            position                relative
            margin-right            15px
            line-height             2
            &:after
                content             ''
                position            absolute
                left                0
                bottom              5px
                width               100%
                height              1px
                background          #555
</style>

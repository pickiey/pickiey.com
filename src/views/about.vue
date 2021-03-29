<template lang="pug">
transition(appear:false, v-on:enter="enter", v-on:leave="leave")
    .about
        .section
            .helloEng                   I'm a Web Designer
            .helloJa                    開発もイケちゃうデザイナー
        .separator
        .section
            .intro
                |                       2012年、受託会社のインターンを経て独立。
                |                       デザインとエンジニアリングを両立してきました。
                |                       デザインをデータにおこすことはせず、コードを書きながらデザインしていきます。
                |                       制作の全行程を１人の人間が担うことで、細かなインタラクティブや、
                |                       高い品質を提供することができます。
            .thumbimg(:src='data.src' ref='thumb')
              canvas#canvasThumb
        .separator
        .section
            .subTitle 01. Skillset
            ul.skillset
                li HTML5
                    span  /
                    |  Pug
                li CSS3
                    span  /
                    |  Stylus
                li JavaScript
                    span  /
                    |  Vue3
                    span  /
                    |  Node
                li GSAP(TweenMax)
                    span  /
                    |  CSS Animation
                li ruby
                    span  /
                    |  Haskell
                li Netlify
                    span  /
                    |  Firebase
                li Git
                    span  /
                    |  GitHub
                li Terminal
                    span  /
                    |  Zsh
                    span  /
                    |  tmux
                    span  /
                    |  Vim
                li Sketch
                    span  /
                    |  Photoshop
                    span  /
                    |  Illustrator
                li etc...
        .separator
        .section
            .subTitle 02. Welcome
            .welcome お仕事募集中😻
                br
                router-link(to='/contact') コチラ
                | からお問い合わせください！
        .separator
        .section
            .subTitle 03. Social
            .social
                a(
                  :href='url.twitter',
                  target='_blank'
                ) Twitter
                a(
                  :href='url.instagram',
                  target='_blank'
                ) Instagram
                a(
                  :href='url.facebook',
                  target='_blank'
                ) Facebook
                a(
                  :href='url.github',
                  target='_blank'
                ) GitHub
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap } from 'gsap'

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
console.log('about completedAction done!')
        } // completedAction
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = () => {
            document.getElementById('scrollArea').scrollTop = 0
            imageOnLoad(this.src, () => {
                requestAnimationFrame(() => {
                    gsap.to(thumb.value, {
                        duration    : 1.5,
                        opacity     : 1,
                        ease        : "expo.inOut"
                    })
                }) // requestAnimationFrame
            }) // imageOnLoad
            const canvas = document.getElementById('canvasThumb')
            const ctx = canvas.getContext('2d')
            resize = () => {
                canvas.width  = window.innerWidth
                canvas.height = window.innerHeight
            }
            resize()
            window.onresize = resize
            noise = (ctx) => {
                const w = ctx.canvas.width
                const h = ctx.canvas.height
                const idata = ctx.createImageData(w, h)
                const buffer32 = new Uint32Array(idata.data.buffer)
                const len = buffer32.length
                let i = 0
                for (; i < len; ) {
                    buffer32[i++] = ((255 * Math.random()) | 0) << 24
                }
                ctx.putImageData(idata, 0, 0)
            }
            let toggle = true
            const loop = () => {
                toggle = !toggle
                if (toggle) {
                    requestAnimationFrame(loop)
                    return
                }
                noise(ctx)
                requestAnimationFrame(loop)
            } // loop
            loop()
console.log('about mountedAction done!')
        } // mountedAction
    //
    // data
    //
        const data = reactive({
            src : '/assets/image/thumbnail.jpg',
            url : url
        })
    //
    // this.$refs
    //
        const thumb = ref()
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const imageOnLoad = (src, func) => {
            const img = new Image()
            img.onload = () => func()
            img.src = src
        }
    //
    // transition
    //
        const enter = (_, done) => {
            requestAnimationFrame(() => {
                gsap.to('.section', {
                    duration        : 1,
                    y               : 0,
                    opacity         : 1,
                    ease            : "back.out(3)",
                    startAt         : {y: '40px', opacity: 0},
                    stagger         : 0.1,
                    onComplete      : () => done()
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
        const leave = (_, done) => {
            requestAnimationFrame(() => {
                gsap.to('.section', {
                    duration        : 0.7,
                    y               : '-40px',
                    opacity         : 0,
                    ease            : "back.in(3)",
                    startAt         : {y: '40px', opacity: 0},
                    stagger         : 0.1,
                    onComplete      : () => done()
                })
                gsap.to('.separator', {
                    duration        : 0.7,
                    scaleX          : 0,
                    x               : '20px',
                    opacity         : 0,
                    transformOrigin : 'right center',
                    ease            : "back.out(3)",
                    startAt         : {scaleX: 0, x: '-20px', opacity: 0},
                    stagger         : 0.1
                })
            }) // requestAnimationFrame
        } // leave
        return{
            data,
            thumb,
            enter, leave
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "assets/stylus/mixins.styl"
@import "assets/stylus/variables.styl"
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
    .thumb
        position                    relative
        margin-top                  30px
        width                       100%
        height                      150px
        +large()
            margin-top              45px
            height                  300px
        img
            width                   100%
            height                  100%
            object-fit              cover
            opacity                 0
        #canvasThumb
            position                absolute
            top                     0
            left                    0
            width                   100%
            height                  100%
            opacity                 0.32
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

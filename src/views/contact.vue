<template lang="pug">
transition(appear:false, v-on:enter="enter", v-on:leave="leave")
    .contact
        .section
            .helloEng                                                       Let's Play Together
            .helloJa                                                        お仕事募集しています♪
        .separator
        .section
          .subTitle                                                         Say Hello!!
        .relative
            .section
                a.email(href='mailto:{{ data.user }}@{{ data.domain }}')
                    span.hidden                                             {{ user }}
                    span                                                    @{{ domain }}
            .absolute
                a.email(href='mailto:{{ data.user }}@{{ data.domain }}')
                    span.blink                                              {{ user }}
                    span.hidden                                             @{{ domain }}
                    .underline
        .section
            .description
                |                                                           ご依頼などございましたら、
                |                                                           上記よりお気軽にご連絡ください。
                |                                                           デザイン・開発のほか、ロゴ・写真・映像など、
                |                                                           素材の製作も承っております。
                |                                                           なお、実績公開NGのお仕事は受け付けておりません。
        .section
            .produced                                                       Produced by {{ author }}.
</template>

<script>
import { onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap }     from 'gsap'
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
        ) // watch
        const completedAction = async() => {
            document.getElementById('scrollArea').scrollTop = 0
            requestAnimationFrame(() => {
                gsap.to('.blink', {
                    duration        : 4,
                    opacity         : 1,
                    ease            : "elastic.out(0.8, 0.3)"
                })
                gsap.to('.blink', {
                    duration        : 0.025,
                    color           : '#555',
                    startAt         : {color: '#fff'},
                    ease            : "expo.out",
                    repeat          : 41,
                    yoyo            : true,
                    repeatDelay     : 0.025
                })
                gsap.to('.underline', {
                    duration        : 3,
                    scaleX          : 1,
                    ease            : "elastic.out(1, 0.3)",
                    delay           : 1
                })
                gsap.to('.section', {
                    duration        : 5,
                    y               : 0,
                    opacity         : 1,
                    ease            : "elastic.out(1, 0.3)",
                    startAt         : {y: '40px', opacity: 0},
                    delay           : 0.2,
                    stagger         : 0.1
                })
                gsap.to('.separator', {
                    duration        : 5,
                    scaleX          : 1,
                    x               : 0,
                    opacity         : 1,
                    transformOrigin : 'left center',
                    ease            : "elastic.out(1, 0.3)",
                    startAt         : {scaleX: 0, x: '-20px', opacity: 0},
                    delay           : 0.2,
                    duration        : 0.1
                  })
              }) // requestAnimationFrame
console.log('contact completedAction done!')
        } // completedAction
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = () => {
            document.getElementById('scrollArea').scrollTop = 0
console.log('contact mountedAction done!')
        } // mountedAction
    //
    // data
    //
        const author = configJson.siteinfo.author,
              user   = configJson.email.user,
              domain = configJson.email.domain
    //
    // transition
    //
        const enter = (_, done) => {
            requestAnimationFrame(() => {
                gsap.to('.blink', {
                    duration        : 1,
                    opacity         : 1,
                    ease            : "expo.out"
                })
                gsap.to('.blink', {
                    duration        : 0.025,
                    color           : '#555',
                    startAt         : {color: '#fff'},
                    ease            : "expo.out",
                    repeat          : 25,
                    yoyo            : true,
                    repeatDelay     : 0.025
                })
                gsap.to('.underline', {
                    duration        : 3,
                    scaleX          : 1,
                    ease            : "elastic.out(1, 0.3)",
                    delay           : 0.5
                })
                gsap.to('.section', {
                    duration        : 1,
                    y               : 0,
                    opacity         : 1,
                    ease            : "back.out(3)",
                    startAt         : {y: '40px', opacity: 0},
                    delay           : 0.2,
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
                    delay           : 0.2,
                    stagger         : 0.1
                })
            }) // requestAnimationFrame
        } // enter
        const leave = (_, done) => {
            requestAnimationFrame(() => {
                gsap.to('.blink', {
                    duration        : 0.7,
                    opacity         : 0,
                    ease            : "back.in(5)"
                })
                gsap.to('.underline', {
                    duration        : 0.7,
                    scaleX          : 0,
                    ease            : "back.in(5)"
                })
                gsap.to('.section', {
                    duration        : 0.7,
                    y               : '-40px',
                    opacity         : 0,
                    ease            : "back.in(3)",
                    stagger         : 0.1,
                    onComplete      : () => done()
                })
                gsap.to('.separator', {
                    duration        : 0.7,
                    scaleX          : 0,
                    x               : '20px',
                    opacity         : 0,
                    transformOrigin : 'right center',
                    ease            : "back.in(3)",
                    stagger         : 0.1
                })
            }) // requestAnimationFrame
        } // leave
    //
    // return
    //
        return {
            author, user, domain,
            enter, leave
        }
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"

.contact
    .section
        opacity                             0
    .subTitle
        color                               #555
        font-size                           22px
        font-weight                         bold
        +large()
            font-size                       largeFont22
    .separator
        margin                              50px 0
        width                               15px
        height                              3px
        background                          #444
        opacity                             0
        +large()
            margin                          65px 0
    .hello
        &Eng
            font-size                       22px
            font-weight                     bold
            +large()
                font-size                   largeFont22
        &Ja
            font-size                       13px
            letter-spacing                  5px
            +large()
                font-size                   largeFont13
    .description
        margin-top                          30px
        font-size                           13px
        line-height                         2
        +large()
            margin-top                      45px
            font-size                       largeFont13
    .email
        display                             inline-block
        position                            relative
        margin-top                          30px
        color                               #fff
        font-size                           18px
        line-height                         2
        letter-spacing                      1.5px
        +large()
            margin-top                      45px
            font-size                       largeFont18
    .relative
        position                            relative
    .absolute
        position                            absolute
        top                                 0
        left                                0
    .underline
        position                            absolute
        left                                0
        bottom                              5px
        width                               100%
        height                              1px
        background                          #555
        transform                           scaleX(0)
        transform-origin                    left center
    .blink
        opacity                             0
        color                               #fff
    .hidden
        opacity                             0
    .produced
        margin-top                          43.5px
        color                               #555
        font-size                           14px
        line-height                         1
        letter-spacing                      1.7px
        +large()
            margin-top                      63.5px
            font-size                       largeFont14
</style>

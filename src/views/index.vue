<template lang="pug">
.home(ref='root')
    .section
        .helloEng                       Hello World!!
        .helloJa                        はろーわーるど！
    .separator
    .section
        .nameEng                        {{ author }}
        //- h1.nameJa                       {{ author }}
    .separator
    .section
        .subTitle                       01. Info
        .intro
            |                           前職では生産技術職をしていました｡
            br
            |                           WEB制作の仕事をしたいと思い、
            |                           20年11月末に退職してから､
            br
            |                           職業訓練校に通ってWebデザインを勉強しています。
            br
            br
            router-link(to='/about')    もっと詳しく！
    .separator
    .section
        .subTitle                       02. History
        ul.history
            li                          名古屋工業大学 電気電子工学科 卒業
                .date                   2018.03
            li                          自動車の部品メーカーにて生産技術職 @豊田
              .date                     2018.04 ~ 2020.10
            li                          職業訓練Webデザイナー科受講 @名古屋
              .date                     2021.01 ~
</template>

<script>
import { computed, onMounted, watch } from 'vue'
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
        const completed = computed( () => store.getters.completed )//,
              //age       = computed( () => getAge() )
    //
    // watch
    //
        watch(
            () => completed.value, () => completedAction()
        ) // watch
        const completedAction = async() => {
            document.getElementById('scrollArea').scrollTop = 0
            await delay(300)
            requestAnimationFrame(() => {
                gsap.to('.section', {
                    duration        : 5,
                    y               : 0,
                    opacity         : 1,
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
                    ease            : "elastic.out(1, 0.3)",
                    startAt         : {scaleX: 0, x: '-20px', opacity: 0},
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
    // BeforeRouteLeave
    //
//        onBeforeUnmount( () => leave() )
    //
    // data
    //
        const author = configJson.siteinfo.author
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
    //
    // return
    //
        return {
            author
        }
    } // setup
}
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.home
    .section
        opacity                     0
    .hello
        &Eng
            font-size               22px
            font-weight             bold
            +large()
                font-size           largeFont22
        &Ja
            font-size               13px
            letter-spacing          4.5px
            +large()
                font-size           largeFont13
    .name
        &Eng
            font-size               30px
            font-weight             bold
            +large()
                font-size           largeFont30
        &Ja
            margin                  0
            font-size               15px
            font-weight             bold
            letter-spacing          8px
            +large()
                font-size           largeFont15
    .separator
        margin                      50px 0
        width                       15px
        height                      3px
        background                  #444
        opacity                     0
        +large()
            margin                  65px 0
    .subTitle
        color                       #555
        font-size                   22px
        font-weight                 bold
        +large()
            font-size               largeFont22
    .intro
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
    .history
        margin-top                  30px
        +large()
            margin-top              45px
        li
            margin-bottom           20px
            font-size               13px
            line-height             2
            +large()
                font-size           largeFont13
            .date
                margin-top          5px
                color               #555
                line-height         1
                +large()
                    margin-top      10px
</style>

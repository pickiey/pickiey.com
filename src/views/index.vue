<template lang="pug">
transition(appear:false, v-on:enter="enter", v-on:leave="leave")
    .home
        .section
            .helloEng                       Hello World!!
            .helloJa                        はろーわーるど！
        .separator
        .section
            .nameEng                        Soichiro Nitta
//-            h1.nameJa                       新田 聡一郎 ({{ age }})
        .separator
        .section
            .subTitle                       01. Design x Develop
            .intro
                |                           1994年生まれ埼玉県在住、フリーランスのデザイナー兼デベロッパー。
                |                           JavaScriptでのSPA開発、デザイン、2Dアニメーションが得意。
                |                           服や靴はいつも同じものを何着もまとめ買い、食事は玄米食で添加物NG、
                |                           トレーニングは毎日欠かしません！
                |                           新海誠作品、BUMP OF CHICKEN、RADWIMPSが好き！😸
                br
                br
                router-link(to='/about')    もっと詳しく！
        .separator
        .section
            .subTitle                       02. History
            ul.history
                li                          IQUE株式会社インターン@恵比寿
                    .date                   Dec. 2012 ~
                li                          東京成徳大学高等学校卒業
                  .date                     Mar. 2013
                li                          フリーとして独立、代理店と提携
                  .date                     Apr. 2013 ~
                li                          法人化、事件発生
                  .date                     Nov. 2014 ~ Feb. 2015
                li                          フリーランス@渋谷
                  .date                     Mar. 2015 ~ Dec. 2017
                li                          フリーランス@埼玉
                  .date                     Jan. 2018 ~
                li                          フリーランス@神戸
                  .date                     Aug. 2018 ~
                li                          フリーランス@埼玉
                  .date                     June. 2019 ~
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
        const completed = computed( () => store.getters.completed ),
              age       = computed( () => getAge() )
    //
    // watch
    //
        watch(
            () => completed, () => completedAction()
        ) // watch
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const getAge = () => {
            const yourBirthDay = {
                year    : 1992,
                month   : 7,
                date    : 30
            }
            const birthDate = new Date(
                yourBirthDay.year,
                yourBirthDay.month - 1,
                yourBirthDay.date
            )
            const y2 = birthDate
            y2.getFullYear()
            y2.toString()
            y2.padStart(4, '0')
            const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0')
            const d2 = birthDate
            d2.getDate()
            d2.toString()
            d2.padStart(2, '0')
            const today = new Date()
            const y1 = today
            y1.getFullYear()
            y1.toString()
            y1.padStart(4, '0')
            const m1 = (today.getMonth() + 1).toString().padStart(2, '0')
            const d1 = today
            d1.getDate()
            d1.toString()
            d1.padStart(2, '0')
            const age = Math.floor(
                (Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000
            )
            return age
        } // getAge
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
        const mountedAction = () => {
            document.getElementById('scrollArea').scrollTop = 0
        } // mountedAction
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
    //
    // return
    //
        return {
            age,
            enter, leave
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

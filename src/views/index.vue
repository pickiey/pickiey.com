<template lang="pug">
transition(appear:false, v-on:enter="enter", v-on:leave="leave")
    .home
        .section
            .helloEng                       Hello World!!
            .helloJa                        はろーわーるど！
        .separator
        .section
            .nameEng                        {{ author }}
            //- h1.nameJa                       {{ author }} age!!!!!!!!!!!
        .separator
        .section
            .subTitle                       01. Info
            .intro
                |                           1992年生まれ。
                |                           新卒で入社した会社では生産技術職をしていました｡
                br
                |                           ヌルヌル動くWebサイトを見るたびに､
                |                           WEB制作の仕事をしたいと思っていました｡
                br
                |                           キャリアチェンジするなら20代の内にと思い､
                |                           20年10月に退職してから､
                br
                |                           フロント周りの勉強をしつつ､
                |                           絶賛就活中です!!
                br
                br
                router-link(to='/about')    もっと詳しく！
        .separator
        .section
            .subTitle                       02. History
            ul.history
                li                          名古屋工業大学 電気電子工学科 卒業
                    .date                   2018.03
                li                          自動車のとある部品の製造メーカーに入社､研修 @神戸
                  .date                     2018.04 ~ 05
                li                          生産技術職として工場配属 @豊田
                  .date                     2018.05 ~ 10
                li                          グループ会社の販売店へ販売応援 @山形
                  .date                     2018.10 ~ 2018.12
                li                          再び工場で生産技術 @豊田
                  .date                     2019.01 ~ 2020.10
                li                          Webデザイン､フロント周りの技術のキャッチアップと就活 @岐阜
                  .date                     2020.11 ~
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
console.log('index      completedAction start!')
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
console.log('index      completedAction done!')
        } // completedAction
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = () => {
console.log('index      mountedAction   start!')
            document.getElementById('scrollArea').scrollTop = 0
console.log('index      mountedAction   done!')
        } // mountedAction
    //
    // data
    //
        const author = configJson.siteinfo.author
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
    //
    // transition
    //
        const enter = (_, done) => {
console.log('index      enter       start!')
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
console.log('index      enter       done!')
            }) // requestAnimationFrame
        } // enter
        const leave = (_, done) => {
console.log('index      leave       start!')
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
console.log('index      leave       done!')
        } // leave
    //
    // return
    //
        return {
            //age,
            author,
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

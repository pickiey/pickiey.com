<template lang="pug">
.TheNav
    .TheNav_Menu(ref='menu')
        .TheNav_MenuDummy1(ref='menuDummy1')
        .TheNav_MenuDummy2(ref='menuDummy2')
        .TheNav_MenuDummy3(ref='menuDummy3')
        .TheNav_MenuFace(ref='menuFace')
        .TheNav_MenuContent
            router-link.TheNav_MenuContentLogo(
                to='/',
                ref='logo',
                @click.native='close'
            )
                .TheNav_MenuContentLogoShadow                            {{ data.sitename }}
                .TheNav_MenuContentLogoOver(ref='over')                  {{ data.sitename }}
            .TheNav_MenuContentList
                router-link(
                    to='/',
                    @click.native='close'
                )
                    .TheNav_MenuContentListEng                           HOME
                    .TheNav_MenuContentListJa                            ホーム
                    .TheNav_MenuContentListMark
                router-link(
                    to='/about',
                    @click.native='close'
                )
                    .TheNav_MenuContentListEng                           ABOUT
                    .TheNav_MenuContentListJa                            {{ data.author }}について
                    .TheNav_MenuContentListMark
                router-link(
                    to='/contact',
                    @click.native='close'
                )
                    .TheNav_MenuContentListEng                           CONTACT
                    .TheNav_MenuContentListJa                            お問い合わせ
                    .TheNav_MenuContentListMark
                .TheNav_MenuContentFooter(ref='footer')
                .TheNav_MenuContentProduced(ref='produced')              Produced by {{ data.author }}.
    .TheNav_Switch(
        ref='navSwitch',
        @click='toggle',
        v-show='data.isMobile'
    )
        .TheNav_SwitchDummy1(ref='switchDummy1')
        .TheNav_SwitchDummy2(ref='switchDummy2')
        .TheNav_SwitchDummy3(ref='switchDummy3')
        .TheNav_SwitchFace(ref='switchFace')
        .TheNav_SwitchContent(ref='switchContent')
            .TheNav_SwitchBorder1(ref='border1')
            .TheNav_SwitchBorder2(ref='border2')
            .TheNav_SwitchBorder3(ref='border3')
</template>



<script>
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { gsap }     from 'gsap'

export default {
    setup() {
    //
    // route
    //
        const route = useRoute()
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
console.log('Nav completedAction start!')
            await delay(500)
            enterSwitch()
            if (data.isMobile) return
            open()
            watchRoute()
console.log('Nav completedAction done!')
        } // completedAction
    //
    // data
    //
        const data = reactive({
            sitename : 'pickiey.portfolio',
            author   : 'pickiey',
            opened   : false,
            progress : false,
            isMobile : store.getters.isMobile
        })
    //
    // this.$refs
    //
        const menu          = ref(),
              menuDummy1    = ref(),
              menuDummy2    = ref(),
              menuDummy3    = ref(),
              menuFace      = ref(),
              logo          = ref(),
              over          = ref(),
              footer        = ref(),
              produced      = ref(),
              navSwitch     = ref(),
              switchDummy1  = ref(),
              switchDummy2  = ref(),
              switchDummy3  = ref(),
              switchFace    = ref(),
              switchContent = ref(),
              border1       = ref(),
              border2       = ref(),
              border3       = ref()
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const toggle = () => {
            !data.opened ? open() : close()
        } // toggle
        const open = async() => {
            if (data.progress) return
            data.progress = true
            openSwitch()
            enterMenu()
            openMenu()
            await delay(800)
            data.progress = false
            data.opened = true
        } // open
        const close = async() => {
            if (!data.isMobile) return
            if (data.progress) return
            data.progress = true
            closeSwitch()
            closeMenu()
            await delay(700)
            data.progress = false
            leaveMenu()
            data.opened = false
        } // close
        const watchRoute = () => {
            watch(
                () => route, () => {
                    nextTick(() => {
                        gsap.to('.TheNav_MenuContentListMark', {
                            duration    : 0.7,
                            opacity     : 0,
                            scale       : 0,
                            ease        : "expo.inOut"
                        })
                        gsap.to('.exact-active-link .TheNav_MenuContentListMark', {
                            duration    : 1.5,
                            opacity     : 1,
                            scale       : 1,
                            ease        : "elastic.out(1, 0.2)",
                            delay       : 0.55
                        })
                    }) // nextTick()
                }
            ) // watch
        } // watchRoute
        const enterSwitch = () => {
            requestAnimationFrame(() => {
                gsap.to(switchDummy1.value, {
                    duration    : 1,
                    scaleX      : 1,
                    ease        : "expo.out"
                })
                gsap.to(switchDummy2.value, {
                    duration    : 1,
                    scaleX      : 1,
                    ease        : "expo.out",
                    delay       : 0.15
                })
                gsap.to(switchDummy3.value, {
                    duration    : 1,
                    scaleX      : 1,
                    ease        : "expo.out",
                    delay       : 0.3
                })
                gsap.to(switchFace.value, {
                    duration    : 1,
                    scaleX      : 1,
                    ease        : "expo.out",
                    delay       : 0.45
                })
                gsap.to(border1.value, {
                    duration    : 1.5,
                    scaleX      : 1,
                    ease        : "elastic.out(1.7, 0.3)",
                    delay       : 0.65
                })
                gsap.to(border2.value, {
                    duration    : 1.5,
                    scaleX      : 1,
                    ease        : "elastic.out(1.7, 0.3)",
                    delay       : 0.75
                })
                gsap.to(border3.value, {
                    duration    : 1.5,
                    scaleX      : 1,
                    ease        : "elastic.out(1.7, 0.3)",
                    delay       : 0.85
                })
            }) //requestAnimationFrame
        } // enterSwitch
        const enterMenu = () => {
            menu.value.style.display = 'block'
        } // enterMenu
        const leaveMenu = () => {
            menu.value.style.display = 'none'
        } // leaveMenu
        const openSwitch = () => {
            requestAnimationFrame(() => {
                gsap.to(switchContent.value, {
                    duration    : 0.65,
                    rotation    : 180,
                    startAt     : {rotation: 0},
                    ease        : "back.out"
                })
                gsap.to(border1.value, {
                    duration    : 0.65,
                    top         : '21px',
                    right       : '25px',
                    width       : '10px',
                    rotation    : -30,
                    ease        : "expo.inOut",
                    startAt     : {rotation: 0, transformOrigin: 'center center'}
                })
                gsap.to(border2.value, {
                    duration    : 0.65,
                    width       : '20px',
                    ease        : "expo.inOut",
                    startAt     : {transformOrigin: 'center center'}
                })
                gsap.to(border3.value, {
                    duration    : 0.65,
                    top         : '27px',
                    right       : '25px',
                    width       : '10px',
                    rotation    : 30,
                    ease        : "expo.inOut",
                    startAt     : {rotation: 0, transformOrigin: 'center center'}
                })
            }) //requestAnimationFrame
        } // openSwitch
        const openMenu = () => {
            requestAnimationFrame(() => {
                const duration  = data.isMobile ? 0.7 : 1,
                      delay2    = data.isMobile ? 0.1 : 0.12,
                      delay3    = data.isMobile ? 0.2 : 0.24,
                      delayFace = data.isMobile ? 0.3 : 0.36
                gsap.to(menuDummy1.value, {
                    duration    : duration,
                    left        : 0,
                    ease        : "expo.out"
                })
                gsap.to(menuDummy2.value, {
                    duration    : duration,
                    left        : 0,
                    ease        : "expo.out",
                    delay       : delay2
                })
                gsap.to(menuDummy3.value, {
                    duration    : duration,
                    left        : 0,
                    ease        : "expo.out",
                    delay       : delay3
                })
                gsap.to(menuFace.value, {
                    duration    : duration,
                    left        : 0,
                    ease        : "expo.out",
                    delay       : delayFace
                })
                gsap.to(logo.value.$el, {
                    duration    : 1,
                    opacity     : 1,
                    y           : '35px',
                    ease        : "expo.out",
                    delay       : 0.45
                })
                gsap.to(over.value, {
                    duration    : 1,
                    height      : '100%',
                    ease        : "expo.out",
                    delay       : 0.7
                })
                gsap.to('.TheNav_MenuContentListEng', {
                    duration    : 1,
                    x           : '-60px',
                    opacity     : 1,
                    ease        : "expo.out",
                    stagger     : 0.03,
                    delay       : 0.48
                })
                gsap.to('.TheNav_MenuContentListJa', {
                    duration    : 1,
                    x           : '-25px',
                    opacity     : 1,
                    ease        : "expo.out",
                    stagger     : 0.03,
                    delay       : 0.73
                })
                gsap.to(footer.value, {
                    duration    : 1,
                    y           : '-100px',
                    ease        : "expo.out",
                    delay       : 0.57
                })
                gsap.to(produced.value, {
                    duration    : 1,
                    opacity     : 1,
                    y           : '-35px',
                    ease        : "expo.out",
                    delay       : 0.82
                })
                gsap.set('.TheNav_MenuContentListMark', {
                    opacity     : 0,
                    scale       : 0
                })
                gsap.to('.exact-active-link .TheNav_MenuContentListMark', {
                    duration    : 1.5,
                    opacity     : 1,
                    scale       : 1,
                    ease        : "elastic.out(0.7, 0.2)",
                    delay       : 0.9
                })
            }) //requestAnimationFrame
        } // openMenu
        const closeSwitch = () => {
            requestAnimationFrame(() => {
                gsap.to(switchContent.value, {
                    duration    : 0.65,
                    rotation    : 360,
                    ease        : "back.out",
                    onComplete  : () => {gsap.set(switchContent.value, {rotation: 0})}
                })
                gsap.to(border1.value, {
                    duration    : 0.65,
                    top         : '18px',
                    right       : '15px',
                    width       : '20px',
                    rotation    : 0,
                    startAt     : {rotation: -30},
                    ease        : "expo.inOut"
                })
                gsap.to(border2.value, {
                    duration    : 0.65,
                    width       : '15px',
                    rotation    : 0,
                    ease        : "expo.inOut"
                })
                gsap.to(border3.value, {
                    duration    : 0.65,
                    top         : '30px',
                    right       : '15px',
                    width       : '10px',
                    rotation    : 0,
                    startAt     : {rotation: 30},
                    ease        : "expo.inOut"
                })
            }) //requestAnimationFrame
        } // closeSwitch
        const closeMenu = () => {
            requestAnimationFrame(() => {
                gsap.to(menuFace.value, {
                    duration    : 0.7,
                    left        : '100%',
                    ease        : "expo.out"
                })
                gsap.to(menuDummy3.value, {
                    duration    : 0.7,
                    left        : '100%',
                    ease        : "expo.out",
                    delay       : 0.1
                })
                gsap.to(menuDummy2.value, {
                    duration    : 0.7,
                    left        : '100%',
                    ease        : "expo.out",
                    delay       : 0.2
                })
                gsap.to(menuDummy1.value, {
                    duration    : 0.7,
                    left        : '100%',
                    ease        : "expo.out",
                    delay       : 0.3
                })
                gsap.to(logo.value.$el, {
                    duration    : 0.7,
                    opacity     : 0,
                    y           : 0,
                    ease        : "expo.out"
                })
                gsap.to(over.value, {
                    duration    : 0.7,
                    height      : 0,
                    ease        : "expo.out"
                })
                gsap.to('.TheNav_MenuContentListEng', {
                    duration    : 0.7,
                    opacity     : 0,
                    x           : 0,
                    ease        : "expo.out",
                    stagger     : 0.02
                })
                gsap.to('.TheNav_MenuContentListJa', {
                    duration    : 0.7,
                    opacity     : 0,
                    x           : 0,
                    ease        : "expo.out",
                    stagger     : 0.02
                })
                gsap.to(footer.value, {
                    duration    : 0.7,
                    y           : 0,
                    ease        : "expo.out"
                })
                gsap.to(produced.value, {
                    duration    : 0.7,
                    opacity     : 0,
                    y           : 0,
                    ease        : "expo.out"
                })
                gsap.to('.TheNav_MenuContentListMark', {
                    duration    : 0.7,
                    opacity     : 0,
                    scale       : 0,
                    ease        : "expo.out"
                })
            }) //requestAnimationFrame
        } // closeMenu
    //
    // return
    //
        return{
            data,
            menu, menuDummy1, menuDummy2, menuDummy3, menuFace, logo, over, footer, produced,
            navSwitch, switchDummy1, switchDummy2, switchDummy3, switchFace, switchContent,
            border1, border2, border3,
            toggle, close
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.TheNav
    &_Menu
        display                         none
        position                        fixed
        top                             10px
        left                            10px
        width                           calc(100% - 20px)
        height                          calc(100% - 20px)
        +large()
            top                         20px
            left                        20px
            width                       300px
            height                      calc(100% - 40px)
            overflow                    hidden
        &Dummy
            &1
            &2
            &3
                position                absolute
                top                     0
                left                    100%
                width                   100%
                height                  100%
                +large()
                    left                -100%
            &1
                background              #1B1B1B
            &2
                background              #171717
            &3
                background              #131313
        &Face
            position                    absolute
            top                         0
            left                        100%
            width                       100%
            height                      100%
            background                  #0f0f0f
            +large()
                left                    -100%
        &Content
            position                    absolute
            top                         0
            left                        0%
            width                       100%
            height                      100%
            overflow                    hidden
            &Logo
                display                 inline-block
                position                absolute
                top                     15px
                left                    30px
                font-size               25px
                font-weight             bold
                white-space             nowrap
                opacity                 0
                +large()
                    top                 10px
                    left                40px
                    font-size           largeFont25
                    letter-spacing      1px
                &Shadow
                    display             inline-block
                    color               #555
                &Over
                    display             inline-block
                    position            absolute
                    top                 0
                    left                0
                    width               100%
                    height              0
                    color               #fff
                    overflow            hidden
            &List
                margin-top              145px
                +large()
                    margin-top          160px
                a
                    display             block
                    position            relative
                    margin-bottom       50px
                    padding-left        67px
                    +large()
                        margin-bottom   70px
                        padding-left    82px
                &Eng
                    margin-left         60px
                    font-size           16px
                    font-weight         bold
                    letter-spacing      5px
                    opacity             0
                &Ja
                    margin-top          3px
                    margin-left         25px
                    font-size           12px
                    letter-spacing      5px
                    color               #555
                    opacity             0
                &Mark
                    position            absolute
                    top                 0
                    bottom              10px
                    left                35px
                    margin              auto
                    width               8px
                    height              8px
                    background          #555
                    border-radius       5px
                    transform           scale(0)
                    opacity             0
                    +large()
                        left            45px
                        width           10px
                        height          10px
            &Footer
                position                absolute
                bottom                  -100px
                right                   0
                left                    0
                margin                  auto
                width                   100%
                height                  100px
                background              #131313
                transform-origin        bottom center
            &Produced
                position                absolute
                bottom                  8px
                left                    30px
                height                  14px
                text-align              center
                color                   #555
                font-size               14px
                line-height             1
                letter-spacing          1.7px
                opacity                 0
                +large()
                    left                40px
                    font-size           13px
    &_Switch
        position                        fixed
        top                             10px
        right                           10px
        width                           50px
        height                          50px
        &Dummy
            &1
            &2
            &3
                position                absolute
                top                     0
                right                   0
                width                   100%
                height                  100%
                transform               scalex(0)
                transform-origin        right center
            &1
                background              #1B1B1B
            &2
                background              #171717
            &3
                background              #131313
        &Face
            position                    absolute
            top                         0
            right                       0
            width                       100%
            height                      100%
            background                  #0f0f0f
            transform                   scalex(0)
            transform-origin            right center
        &Content
            position                    absolute
            top                         0
            right                       0%
            width                       100%
            height                      100%
        &Border
            &1
            &2
            &3
                position                absolute
                right                   15px
                height                  2px
                background              #fff
                transform               scaleX(0)
                transform-origin        right center
            &1
                top                     18px
                width                   20px
            &2
                top                     24px
                width                   15px
            &3
                top                     30px
                width                   10px
</style>

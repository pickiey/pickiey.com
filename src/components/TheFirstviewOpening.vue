<template lang="pug">
.TheFirstviewOpening
    .TheFirstviewOpening_Dummy(v-if='!offDummy')
        .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyC
        .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyB
        .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyA
        .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyC
        .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyB
        .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyA
        .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyC
        .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyB
        .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyA
        .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyC
        .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyB
        .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyA
    .TheFirstviewOpening_Layer.TheFirstviewOpening_Face(ref='face')
        .TheFirstviewOpening_FaceWrap
            .TheFirstviewOpening_FaceWrapInner
                transition-group
                    div.TheFirstviewOpening_Letter(
                        v-for       ='(letter, index) in data.listInit',
                        :data-index = 'letter.id - 1',
                        :key        = 'letter.id'
                    )
                        span                                                                        {{ letter.value }}
                .TheFirstviewOpening_Over(ref='over')                                               {{ sitename }}
                .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop1
                .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop2
                .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop3
                .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom1
                .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom2
                .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom3
    .TheFirstviewOpening_Vertical.TheFirstviewOpening_VerticalL
    .TheFirstviewOpening_Vertical
    .TheFirstviewOpening_Vertical.TheFirstviewOpening_VerticalR
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap }     from 'gsap'
import configJson from '../assets/data/config.json'

export default {
    setup() {
    //
    // store
    //
        const store = useStore(),
              paint    = () => store.commit('paint'),
              complete = () => store.commit('complete'),
              kill     = () => store.commit('kill')
    //
    // computed
    //
        const started = computed( () => store.getters.started )
    //
    // watch
    //
        watch(
            () => started.value, () => startedAction()
        ) // watch
        const startedAction = async() => {
console.log('FV_Opening startedAction   start!')
            dummy()
            flash()
            await delay(900)
            horizontal()
            await delay(300)
            data.listInit = data.listNormal
            await delay(100)
            enter()
            await delay(700)
            offDummy.value = true
            face.value.style.background = '#0f0f0f'
            paint()
            await delay(700)
            overf()
            await delay(1400)
            complete()
            clip()
            await delay(1300)
            kill()
console.log('FV_Opening startedAction   done!')
        } // startedAction
    //
    // data
    //
        const sitename = configJson.siteinfo.sitename
        const data = reactive({
            listInit    : [
                            { id: 16, value: 'o' },
                            { id: 14, value: 'i' },
                            { id: 12, value: 'l' },
                            { id: 10, value: 'o' },
                            { id:  8, value: 'f' },
                            { id:  6, value: 't' },
                            { id:  4, value: 'r' },
                            { id:  2, value: 'o' },
                            { id:  1, value: 'p' },
                            { id:  3, value: '.' },
                            { id:  5, value: 'y' },
                            { id:  7, value: 'e' },
                            { id:  9, value: 'i' },
                            { id: 11, value: 'k' },
                            { id: 13, value: 'c' },
                            { id: 15, value: 'i' },
                            { id: 17, value: 'p' }
                          ],
            listNormal  : [
                            { id: 17, value: 'p' },
                            { id: 15, value: 'i' },
                            { id: 13, value: 'c' },
                            { id: 11, value: 'k' },
                            { id:  9, value: 'i' },
                            { id:  7, value: 'e' },
                            { id:  5, value: 'y' },
                            { id:  3, value: '.' },
                            { id:  1, value: 'p' },
                            { id:  2, value: 'o' },
                            { id:  4, value: 'r' },
                            { id:  6, value: 't' },
                            { id:  8, value: 'f' },
                            { id: 10, value: 'o' },
                            { id: 12, value: 'l' },
                            { id: 14, value: 'i' },
                            { id: 16, value: 'o' }
                          ]
        }) // data
    //
    // this.$refs
    //
        const offDummy = ref(false),
              face     = ref(),
              over     = ref()
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const dummy = () => {
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewOpening_Dummy1', {
                    duration    : 0.3,
                    y           : '-100%',
                    ease        : "expo.inOut",
                    stagger     : 0.2
                })
                gsap.to('.TheFirstviewOpening_Dummy2', {
                    duration    : 0.3,
                    y           : '100%',
                    ease        : "expo.inOut",
                    stagger     : 0.2
                })
                gsap.to('.TheFirstviewOpening_Dummy3', {
                    duration    : 0.3,
                    y           : '-100%',
                    ease        : "expo.inOut",
                    delay       : 0.4,
                    stagger     : 0.2
                })
                gsap.to('.TheFirstviewOpening_Dummy4', {
                    duration    : 0.3,
                    y           : '100%',
                    ease        : "expo.inOut",
                    delay       : 0.6,
                    stagger     : 0.2
                })
            }) // requestAnimationFrame
        } // dummy
        const overf = () => {
            requestAnimationFrame(() => {
                gsap.to(over.value, {
                    duration    : 0.3,
                    width       : '100%',
                    ease        : "expo.inOut"
                })
                gsap.to(over.value, {
                    duration    : 0.3,
                    color       : '#444',
                    startAt     : {color: '#fff'},
                    ease        : "expo.out",
                    repeat      : 7,
                    yoyo        : true,
                    repeatDelay : 0.03,
                    delay       : 0.5
                })
            }) // requestAnimationFrame
        } // overf
        const flash = () => {
            requestAnimationFrame(() => {
                gsap.to(document.body, {
                    duration        : 3.5,
                    backgroundColor : '#0f0f0f',
                    ease            : "rough({strength: 7, points: 30, taper: out, randomize: true, clamp: true})"
                })
                gsap.to('.TheFirstviewOpening_Vertical', {
                    duration        : 2,
                    y               : '2px',
                    x               : '2px',
                    opacity         : 0.13,
                    ease            : "rough({template: expo.inOut, strength: 7, points: 30, taper: none, randomize: true, clamp: false})",
                    startAt         : {y: '-2px', x: '-2px', opacity: 0},
                    repeat          : 1,
                    yoyo            : true,
                    stagger         : 0.15
                })
            }) // requestAnimationFrame
        } // flash
        const horizontal = () => {
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewOpening_HorizontalTop', {
                    duration        : 1.5,
                    x               : '210%',
                    opacity         : 0,
                    ease            : "expo.out",
                    stagger         : 0.15
                })
                gsap.to('.TheFirstviewOpening_HorizontalBottom', {
                    duration        : 1.5,
                    x               : '-210%',
                    opacity         : 0,
                    ease            : "expo.out",
                    stagger         : 0.15
                })
            }) // requestAnimationFrame
        } // horizontal
        const enter = () => {
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewOpening_Letter', {
                    duration    : 1.4,
                    opacity     : 1,
                    ease        : "rough({strength: 3, points: 20, taper: out, randomize: false, clamp: true})"
                })
            }) // requestAnimationFrame
        } // enter
        const clip = () => {
            requestAnimationFrame(() => {
                gsap.to(face.value, {
                    duration    : 1.3,
                    width       : '0%',
                    ease        : "expo.out"
                })
            }) // requestAnimationFrame
        } // clip
    //
    // return
    //
        return{
            data, sitename,
            offDummy, face, over
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.TheFirstviewOpening
    position                        absolute
    top                             0
    width                           100%
    height                          100%
    &_Dummy
        position                    absolute
        top                         0
        width                       100%
        height                      100%
        &1
            position                absolute
            bottom                  -100%
            left                    0
            margin                  auto
            width                   25%
            height                  100%
        &2
            position                absolute
            top                     -100%
            left                    25%
            margin                  auto
            width                   25%
            height                  100%
        &3
            position                absolute
            bottom                  -100%
            left                    50%
            margin                  auto
            width                   25%
            height                  100%
        &4
            position                absolute
            top                     -100%
            left                    75%
            margin                  auto
            width                   25%
            height                  100%
        &A
            background              #0f0f0f
        &B
            background              #212121
        &C
            background              #323232
    &_Layer
        display                     flex
        justify-content             center
        align-items                 center
        position                    absolute
        top                         0
        right                       0
        width                       100%
        height                      100%
        text-align                  center
        font-size                   13.5vw
        font-weight                 bold
        line-height                 1.5
        clip-path                   inset(0 0 0 0)
        +large()
            font-size               9vw
            letter-spacing          0.1vw
    &_FaceWrap
        display                     flex
        align-items                 center
        justify-content             center
        position                    absolute
        top                         0
        right                       0
        width                       calc(100vw - 20px)
        height                      100%
        +large()
            width                   calc(100vw - 40px)
        &Inner
            display                 inline-block
            position                relative
            overflow                hidden
    &_Over
        position                    absolute
        top                         0
        left                        0
        width                       0
        color                       #fff
        overflow                    hidden
    &_Letter
        display                     inline-block
        color                       #444
        opacity                     0
        &.v-move
            transition              transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)
    &_Vertical
        position                    absolute
        top                         -5px
        left                        calc(50% - 0.5px)
        width                       1px
        height                      calc(100% + 10px)
        background                  #444
        opacity                     0
        &L
            left                    calc(25% - 0.5px)
        &R
            left                    calc(75% - 0.5px)
    &_Horizontal
        &Top
            position                absolute
            top                     0
            left                    -100%
            width                   100%
            height                  1px
            background              #444
            &1
                top                 10px
                +large()
                    top             30px
            &2
                top                 5px
                +large()
                    top             15px
            &3
                top                 0px
        &Bottom
            position                absolute
            bottom                  0
            right                   -100%
            width                   100%
            height                  1px
            background              #444
            &1
                bottom              calc(2.3vw + 10px)
                +large()
                    bottom          calc(2vw + 30px)
            &2
                bottom              calc(2.3vw + 5px)
                +large()
                    bottom          calc(2vw + 15px)
            &3
                bottom              2.3vw
                +large()
                    bottom          2vw
</style>

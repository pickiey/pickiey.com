<template lang="pug">
.TheFirstviewStart(v-if='!data.off' @click='click')
    span.TheFirstviewStart_Letter( v-for='letter in "Click&Start!!"')           {{ letter }}
</template>

<script>
import { computed, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap }     from 'gsap'

export default {
    setup() {
    //
    // store
    //
        const store = useStore(),
              start = () => store.commit('start')
    //
    // computed
    //
        const loaded = computed( () => store.getters.loaded )
    //
    // watch
    //
        watch(
            () => loaded.value, () => loadedAction()
        ) // watch
        const loadedAction = async() => {
console.log('FV_Start   loadedAction    start!')
            await delay(3600)
            enter()
            await delay(200)
            effect()
            await delay(800)
            data.clickable = true
console.log('FV_Start   loadedAction    done!')
        } // loadedAction
    //
    // data
    //
        const data = reactive({
            off       : false,
            clickable : false

        }) // data
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const click = async() => {
            if (!data.clickable) return
            data.clickable = false
            playMp3()
            start()
            leave()
            await delay(600)
            data.off = true
        } // click
        const enter = () => {
console.log('FV_Start   enter           start!')
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewStart_Letter', {
                    duration    :1.5,
                    opacity     : 1,
                    y           : 0,
                    startAt     : {y: '-20px'},
                    ease        : "elastic.out",
                    stagger     : 0.05
                })
            }) // requestAnimationFrame
console.log('FV_Start   enter           done!')
        } // enter
        const effect = () => {
console.log('FV_Start   effect          start!')
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewStart_Letter', {
                    duration    : 0.3,
                    color       : '#fff',
                    ease        : "expo.inOut",
                    stagger     : {
                                    repeat  : -1,
                                    yoyo    : true,
                                    each    : 0.1
                                  }
                })
console.log('FV_Start   effect          done!')
            }) // requestAnimationFrame
        } // effect
        const playMp3 = () => {
            document.getElementById('sound').play()
            if (!store.getters.isMobile) document.getElementById('bgm').play()
        } // playMp3
        const leave = () => {
console.log('FV_Start   leave           start!')
            requestAnimationFrame(() => {
                gsap.to('.TheFirstviewStart', {
                    duration    : 0.6,
                    opacity     : 0,
                    scale       : 2,
                    ease        : "expo.inOut"
                })
console.log('FV_Start   leave           done!')
            }) // requestAnimationFrame
        } // leave
    //
    // return
    //
        return{
            data,
            click
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.TheFirstviewStart
    display                         flex
    justify-content                 center
    align-items                     center
    position                        absolute
    top                             0
    left                            0
    width                           100%
    height                          100%
    text-align                      center
    &_Letter
        display                     inline-block
        font-size                   6vw
        font-weight                 bold
        line-height                 2
        letter-spacing              2px
        opacity                     0
        color                       #a2a2a2
        +large()
            font-size               3.2vw
</style>

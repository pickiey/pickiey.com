<template lang="pug">
.TheFirstviewLoading(v-if='!off')
    .TheFirstviewLoading_Gray(ref='gray')
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap }     from 'gsap'

export default {
    setup() {
    //
    // store
    //
        const store = useStore()
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
console.log('FV_Loading loadedAction    start!')
            await delay(2000)
            bar()
            await delay(500)
            round()
            await delay(700)
            explosion()
            changeColor()
            await delay(1000)
            off.value = true
console.log('FV_Loading loadedAction    done!')
        } // loadedAction
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = () => {
console.log('FV_Loading mountedAction   start!')
            window.onload = () => loading()
console.log('FV_Loading mountedAction   done!')
        } // mountedAction
    //
    // data
    //
        const off = ref(false)
    //
    // this.$refs
    //
        const gray = ref()
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const tl = new gsap.timeline()
        const loading = () => {
            tl.repeat(-1)
            requestAnimationFrame(() => {
                tl.to(gray.value, {
                    duration        : 0.5,
                    scaleX          : 1,
                    transformOrigin : 'left center',
                    ease            : "expo.in"
                })
                tl.to(gray.value, {
                    duration        : 0.5,
                    scaleX          : 0,
                    transformOrigin : 'right center',
                    ease            : "expo.out"
                })
            }) // requestAnimationFrame
        } // loading
        const bar = () => {
            tl.pause()
            requestAnimationFrame(() => {
                gsap.set(gray.value, {
                    scaleX          : 0,
                    transformOrigin : 'center center'
                })
                gsap.to(gray.value, {
                    duration        :0.2,
                    scaleX          : 1,
                    width           : '100%',
                    ease            : "expo.in"
                })
            }) // requestAnimationFrame
        } // bar
        const round = () => {
            requestAnimationFrame(() => {
                gsap.to(gray.value, {
                    duration        : 1,
                    width           : '20px',
                    height          : '20px',
                    borderRadius    : '50%',
                    ease            : "elastic.out"
                })
            }) // requestAnimationFrame
        } // round
        const explosion = () => {
            const wide = window.innerWidth > window.innerHeight
            requestAnimationFrame(() => {
                gsap.to(gray.value, {
                    duration    : 1,
                    width       : wide ? `${window.innerWidth * 2}px` : `${window.innerHeight * 2}px`,
                    height      : wide ? `${window.innerWidth * 2}px` : `${window.innerHeight * 2}px`,
                    ease        : "expo.inOut"
                })
            }) // requestAnimationFrame
        } // explosion
        const changeColor = () => {
            requestAnimationFrame(() => {
                gsap.to(document.body, {
                    duration        : 1,
                    backgroundColor : '#444',
                    ease            : "expo.inOut"
                })
            }) // requestAnimationFrame
        } // changeColor
    //
    // return
    //
        return{
            off,
            gray
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.TheFirstviewLoading
    display                     flex
    justify-content             center
    align-items                 center
    position                    fixed
    top                         0
    right                       0
    bottom                      0
    left                        0
    margin                      auto
    width                       100%
    height                      100%
    &_Gray
      position                  absolute
      width                     30%
      height                    2px
      background                #444
      transform                 scaleX(0)
</style>

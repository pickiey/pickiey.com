<template lang="pug">
.sorry(ref='sorry')
    .tbc 非対応ブラウザです
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

export default {
    setup() {
    //
    // this.$refs
    //
        const sorry = ref()
    //
    // mounted
    //
        onMounted(
            () => mountedAction()
        ) // onMounted
        const mountedAction = () => {
            requestAnimationFrame(() => {
                gsap.to(sorry.value, {
                    duration    : 2,
                    opacity     : 1,
                    y           : 0,
                    startAt     : {y: '30px'},
                    ease        : "expo.inOut"
                })
            }) // requestAnimationFrame
console.log('sorry mountedAction done!')
        } // mountedAction
    //
    // return
    //
        return {
            sorry
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.sorry
    display                 table
    padding                 0 30px
    width                   100%
    height                  100%
    text-align              center
    color                   #555
    font-size               18px
    font-weight             bold
    opacity                 0
</style>

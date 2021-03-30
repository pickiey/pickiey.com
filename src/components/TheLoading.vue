<template lang="pug">
.TheLoading(v-if='loading')            loading
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
    //
    // data
    //
        let loading = ref(false)
    //
    // methods
    //
        const start = () => {
            loading = true
console.log('Loading        start!')
        }
        const finish = () => {
            loading = false
console.log('Loading        finish')
        }
    //
    // return
    //
        return{
            loading
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.TheLoading
    position            fixed
    top                 0
    left                0
    width               100%
    height              100%
    background          rgba(255, 255, 255, .8)
    text-align          center
    pading-top          200px
    font-size           30px
</style>

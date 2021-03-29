<template lang="pug">
.TheLoading(v-if='data.loading')            loading
</template>

<script>
export default {
    setup() {
    //
    // data
    //
        const data = reactive({
            loading : false
        }) // data
    //
    // methods
    //
        const start = () => {
            data.loading = true
console.log('FV_start   start!')
        }
        const finish = () => {
            data.loading = false
console.log('FV_start   finish')
        }
    //
    // return
    //
        return{
            data
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

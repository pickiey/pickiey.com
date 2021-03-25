<template lang="pug">
p App.vue
.default
//-    HelloWorld

TheBackground

//-    #scrollArea
//-        router-view

//-    TheNav

//-    TheFirstview

//-    TheAudio
p /App.vue
</template>

<script>
//import { reactive, computed , onMounted } from 'vue'
//import { useStore } from 'vuex'

//import HelloWorld          from './components/HelloWorld.vue'

import TheBackground       from './components/TheBackground.vue'
//import TheHome       from '~/components/TheHome.vue'
//import TheNav        from '~/components/TheNav.vue'
//import TheFirstview  from '~/components/TheFirstview.vue'
//import TheAudio      from '~/components/TheAudio.vue'

export default {
    components: {
        TheBackground
    }

//    setup() {
        //onMounted( () => {
        //    const userAgent = window.navigator.userAgent.toLowerCase()

            //if (
            //    userAgent.indexOf('msie')    !== -1 ||
            //    userAgent.indexOf('trident') !== -1 ||
            //    userAgent.indexOf('edge')    !== -1
            //) {
            //    $router.push({ path: 'sorry' })
            //}
//    }

}

</script>

<style lang="stylus" scoped>
@import "assets/stylus/mixins.styl"
@import "assets/stylus/variables.styl"

.default
    -webkit-font-smoothing              antialiased
    -moz-osx-font-smoothing             grayscale
    position                            relative
    margin                              10px
    width                               calc(100% - 20px)
    height                              calc(100% - 20px)
    overflow                            hidden
    +large()
        margin                          20px
        width                           calc(100% - 40px)
        height                          calc(100% - 40px)

    #scrollArea
        position                        relative
        width                           100%
        height                          100%
        overflow-x                      hidden
        overflow-y                      scroll
        -webkit-overflow-scrolling      touch
        -webkit-backface-visibility     hidden
        backface-visibility             hidden
        opacity                         0
        z-index                         0
        +large()
            margin-left                 300px
            padding                     0
            width                       calc(100% - 300px)

        &>div
            margin                      50px 0
            padding                     0 30px
            +large()
                margin                  5.5vw auto
                padding                 0 400px 0 100px
                width                   1100px
</style>

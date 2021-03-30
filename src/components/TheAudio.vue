<template lang="pug">
.TheAudio
    audio(
        src='/assets/audio/click.mp3',
        :autoplay='isMobile',
        id='sound',
        @canplay='canplaySound'
    )
    audio(
        src='/assets/audio/bgm.mp3',
        loop,
        id='bgm',
        @canplay='canplayBgm',
        v-if='!isMobile'
    )
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
    //
    // store
    //
        const store = useStore(),
              setLoaded = () => store.commit('setLoaded')
    //
    // data
    //
        const isMobile    = ref(store.getters.isMobile).value
        let   loadedSound = false,
              loadedBgm   = false
    //
    // methods
    //
        const canplaySound = () => {
            loadedSound = true
            if (isMobile)  setLoaded()
            if (loadedBgm) setLoaded()
        } // canplaySound
        const canplayBgm = () => {
            loadedBgm = true
            if (loadedSound)   setLoaded()
        } // canplayBgm
    //
    // return
    //
        return{
            isMobile,
            canplaySound, canplayBgm
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.TheAudio
    position                absolute
</style>

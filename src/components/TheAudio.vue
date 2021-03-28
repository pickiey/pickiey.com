<template lang="pug">
.TheAudio
    audio(
        src='/audio/click.mp3',
        :autoplay='data.isMobile',
        id='sound',
        @canplay='canplaySound'
    )
    audio(
        src='/audio/bgm.mp3',
        loop,
        id='bgm',
        @canplay='canplayBgm',
        v-if='!data.isMobile'
    )
</template>

<script>
import { computed, nextTick, reactive, ref, watch } from 'vue'
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
        const data = reactive({
            loadedSound : false,
            loadedBgm   : false,
            isMobile    : store.getters.isMobile
        }) // data
    //
    // methods
    //
        const canplaySound = () => {
            data.loadedSound = true
            if (data.isMobile)      setLoaded()
            if (data.loadedBgm)     setLoaded()
        } // canplaySound
        const canplayBgm = () => {
            data.loadedBgm = true
            if (data.loadedSound)   setLoaded()
        } // canplayBgm
    //
    // return
    //
        return{
            data,
            canplaySound, canplayBgm
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.TheAudio
    position                absolute
</style>

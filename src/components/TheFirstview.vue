<template lang="pug">
.TheFirstview(v-if='!killed')
    TheFirstviewOpening
    TheFirstviewLoading
    TheFirstviewStart
</template>

<script>
import TheFirstviewOpening from './TheFirstviewOpening.vue'
import TheFirstviewStart   from './TheFirstviewStart.vue'
import TheFirstviewLoading from './TheFirstviewLoading.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        TheFirstviewOpening,
        TheFirstviewStart,
        TheFirstviewLoading
    },
    setup(){
    //
    // store
    //
        const store = useStore()
    //
    // computed
    //
        const killed = computed( () => store.getters.killed )
    //
    // return
    //
        return{
            killed
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
.TheFirstview
    position            absolute
    top                 0
    width               100%
    height              100%
</style>

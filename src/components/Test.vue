<template lang="pug">
p Test.vue

.TheBg_Title(ref='title')

p /Text.vue
</template>


<script>
import { computed, reactive, ref, watch } from 'vue'
import { gsap, Expo, Power0 } from 'gsap'


export default {
    setup() {

        const data = reactive({
            sitename: 'pickiey.portfolio',
            isMobile: false
        })



        const title = ref()
        const rotate = () => {
            requestAnimationFrame( () => {
                gsap.to(title.value, {
                    duration    : 150,
                    rotation    : 365,
                    startAt     : {rotation : 5},
                    ease        : "none",
                    repeat      : 1
                })
            })
        }

        rotate()

        return{
            data,
            rotate,
            title
        }
    }
}
</script>


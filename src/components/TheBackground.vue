<template lang="pug">
.TheBg
    .TheBg_Title(ref='title')
        .TheBg_TitleShadow(ref='shadow')        {{ data.sitename }}
        .TheBg_TitleFace(ref='face')            {{ data.sitename }}
    canvas#canvas
    .TheBg_Layer.TheBg_Layer3(ref='layer3')
        .TheBg_LayerInner
            .tbc                                {{ data.sitename }}
    .TheBg_Layer.TheBg_Layer2(ref='layer2')
        .TheBg_LayerInner
            .tbc                                {{ data.sitename }}
    .TheBg_Layer.TheBg_Layer1(ref='layer1')
        .TheBg_LayerInner
            .tbc                                {{ data.sitename }}
</template>

<!--
.TheBg
    p TheBackground
    p {{data.sitename}}
-->


<script lang="ts">
import { reactive, defineComponent } from 'vue'
import { useStore }                  from 'vuex'

export default defineComponent({
    props: {
        sitename: String,
        isMobile: Boolean
    },
    setup() {
        const data = reactive({
            sitename: 'Pickiey',
            isMobile: false,
            store   : useStore()
        })



        return{
            data
        }
    }
})
</script>





<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"

.TheBg
    display                         flex
    justify-content                 center
    align-items                     center
    position                        absolute
    top                             0
    width                           100%
    height                          100%
    -webkit-backface-visibility     hidden
    backface-visibility             hidden
    opacity                         0

    &_Title
        position                    absolute
        top                         0
        right                       0
        bottom                      0
        left                        0
        margin                      auto
        width                       100%
        height                      100%
        font-size                   13.5vw
        font-weight                 bold
        line-height                 1.5

        +large()
            font-size               9vw

    &_TitleShadow
        display                     flex
        justify-content             center
        align-items                 center
        position                    absolute
        top                         0
        right                       0
        bottom                      0
        left                        0
        margin                      auto
        width                       100%
        height                      100%
        color                       #0f0f0f

    &_TitleFace
        display                     flex
        justify-content             center
        align-items                 center
        position                    absolute
        top                         0
        right                       0
        bottom                      0
        left                        0
        margin                      auto
        width                       100%
        height                      100%
        color                       #2d2d2d

    &_Layer
        position                    absolute
        top                         0
        right                       0
        width                       100%
        height                      100%
        text-align                  center
        font-size                   13.5vw
        font-weight                 bold
        line-height                 1.5
        //clip-path                   inset(0 0 0 0)
        overflow                    hidden

        +large()
            font-size               9vw
            letter-spacing          0.1vw

    &_Layer1
        color                       #cbcbcb
        background                  #131313
        opacity                     0

    &_Layer2
        color                       #969696
        background                  #171717
        opacity                     0

    &_Layer3
        color                       #626262
        background                  #1b1b1b
        opacity                     0

    &_LayerInner
        display                     table
        position                    absolute
        top                         0
        right                       0
        width                       calc(100vw - 20px)
        height                      100%
        text-align                  center

        +large()
            width                   calc(100vw - 40px)

    #canvas
        position                    absolute
        top                         0
        right                       0
        bottom                      0
        left                        0
        margin                      auto
        width                       100%
        height                      100%
        transform                   scale(0)
</style>

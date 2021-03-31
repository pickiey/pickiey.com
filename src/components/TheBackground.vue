<template lang="pug">
.TheBg(ref='root')
    .TheBg_Title(ref='title')
        .TheBg_TitleShadow(ref='shadow')        {{ sitename }}
        .TheBg_TitleFace(ref='face')            {{ sitename }}
    canvas#canvas
    .TheBg_Layer.TheBg_Layer3(ref='layer3')
        .TheBg_LayerInner
            .tbc                                {{ sitename }}
    .TheBg_Layer.TheBg_Layer2(ref='layer2')
        .TheBg_LayerInner
            .tbc                                {{ sitename }}
    .TheBg_Layer.TheBg_Layer1(ref='layer1')
        .TheBg_LayerInner
            .tbc                                {{ sitename }}
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { gsap }     from 'gsap'
import configJson from '../assets/data/config.json'

export default {
    setup() {
    //
    // store
    //
        const store = useStore()
    //
    // computed
    //
        const painted   = computed( () => store.getters.painted ),
              completed = computed( () => store.getters.completed )
    //
    // watch
    //
        watch(
            () => painted.value,   () => paintedAction(),
        ) // watch
        const paintedAction = () => {
//console.log('BG         paintedAction   start!')
            root.value.style.opacity   = 1
            layer1.value.style.opacity = 1
            layer2.value.style.opacity = 1
            layer3.value.style.opacity = 1
//console.log('BG         paintedAction   done!')
        } // paintedAction
    //
    //
    //
        watch(
            () => completed.value, () => completedAction()
        ) // watch
        const completedAction = async() => {
//console.log('BG         completedAction start!')
            canvasAnimation()
            await delay(130)
            clip1()
//console.log('BG         clip1           done!')
            await delay(130)
            clip2()
//console.log('BG         clip2           done!')
            await delay(130)
            await delay(130)
            clip3()
//console.log('BG         clip3           done!')
            await delay(200)
            spout()
//console.log('BG         spout           done!')
            await delay(1000)
            leaveLayer()
//console.log('BG         leaveLayer      done!')
            await delay(4000)
            rotate()
//console.log('BG         completedAction done!')
        } // completedAction
    //
    // data
    //
        const isMobile = store.getters.isMobile,
              sitename = configJson.siteinfo.sitename
    //
    // this.$refs
    //
        const root   = ref(),
              title  = ref(),
              shadow = ref(),
              face   = ref(),
              layer1 = ref(),
              layer2 = ref(),
              layer3 = ref()
    //
    // methods
    //
        const delay = (ms) => new Promise(_ => setTimeout(_, ms))
        const spout = () => {
            requestAnimationFrame( () => {
                gsap.to('#canvas', {
                    duration    : 5,
                    scale       : 1,
                    ease        : "expo.inOut"
                })
                gsap.to(title.value, {
                    duration    : 5,
                    scale       : 3,
                    rotation    : 365,
                    ease        : "expo.inOut"
                })
                gsap.to('.TheBg_LayerInner', {
                    duration    : 5,
                    scale       : 3,
                    rotation    : 365,
                    ease        : "expo.inOut"
                })
                gsap.to(shadow.value, {
                    duration    : 5,
                    y           : isMobile ? '1.25px' : '2.5px',
                    x           : isMobile ? '1.25px' : '2.5px',
                    ease        : "expo.inOut"
                })
                gsap.to(face.value, {
                    duration    : 5,
                    y           : isMobile ? '-1.25px' : '-2.5px',
                    x           : isMobile ? '-1.25px' : '-2.5px',
                    ease        : "expo.inOut"
                })
            }) // requestAnimationFrame()
        } // spout()
        const leaveLayer = () => {
            if (isMobile) return
            requestAnimationFrame( () => {
                gsap.to('.TheBg_LayerInner', {
                    duration    : 3,
                    opacity     : 0,
                    ease        : "expo.inOut"
                })
            }) // requestAnimationFrame
        } // leaveLayer
        const rotate = () => {
            requestAnimationFrame( () => {
                gsap.to(title.value, {
                    duration    : 150,
                    rotation    : 365,
                    startAt     : {rotation : 5},
                    ease        : "none",
                    repeat      : -1
                })
            }) // requestAnimationFrame
        } // rotate
        const clip1 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer1.value, {
                    duration    : 1.3,
                    width       : isMobile ? '0%' : '50px',
                    ease        : "expo.out"
                })
            }) // requestAnimationFrame
        } // clip1
        const clip2 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer2.value, {
                    duration    : 1.3,
                    width       : isMobile ? '0%' : '150px',
                    ease        : "expo.out"
                })
            }) // requestAnimationFrame
        } // clip2
        const clip3 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer3.value, {
                    duration    : 1.3,
                    width       : isMobile ? '0%' : '300px',
                    ease        : "expo.out"
                })
            }) // requestAnimationFrame
        } // clip3
        const canvasAnimation = () => {
            class Particles {
                constructor() {
                    this.colors         = ['100, 100, 100', '130, 130, 130', '160, 160, 160']
                    this.blurry         = false
                    this.border         = false
                    this.minRadius      = 10
                    this.maxRadius      = 35
                    this.minOpacity     = 0.005
                    this.maxOpacity     = 0.5
                    this.minSpeed       = 0.05
                    this.maxSpeed       = 0.5
                    this.fps            = 60
                    this.numParticles   = isMobile ? 60 : 120
                    this.canvas         = document.getElementById('canvas')
                    this.ctx            = this.canvas.getContext('2d')
                } // constructor
                //
                // class methods
                //
                init() {
                    const self = this
                    self.render()
                    self.createCircle()
                } // init
                _rand(min, max) {
                    return Math.random() * (max - min) + min
                } // _rand
                render() {
                    const self = this
                    const windowHeight  = document.getElementById('scrollArea').clientHeight
                    const windowWidth   = document.getElementById('scrollArea').clientWidth
                    self.canvas.width   = windowWidth
                    self.canvas.height  = windowHeight
                    window.onresize = () => {
                        self.render()
                    }
                } // render
                createCircle() {
                    const particle = []
                    const self = this
                    for (let i = 0; i < this.numParticles; i++) {
                        const color = self.colors[~~self._rand(0, self.colors.length)]
                        const vy = self._rand(self.minSpeed, self.maxSpeed)
                        // const vx = self._rand(self.minSpeed, self.maxSpeed)
                        const r = 1 // Math.sqrt(Math.sqr(vx)+Math.sqr(vy))
                        particle[i] = {
                            radius      : r,
                            xPos        : self._rand(0, self.canvas.width),
                            yPos        : self._rand(0, self.canvas.height),
                            xVelocity   : self._rand(self.minSpeed, self.maxSpeed),
                            yVelocity   : vy,
                            color       : 'rgba('
                                           + color
                                           + ','
                                           + self._rand(self.minOpacity, self.maxOpacity)
                                           + ')'
                        } // particle[i]
                        self.draw(particle, i)
                    } // for
                    self.animate(particle)
                } // createCircle()
                draw(particle, i) {
                    const self = this
                    const ctx = self.ctx
                    if (self.blurry === true) {
                        const grd = ctx.createRadialGradient(
                            particle[i].xPos,
                            particle[i].yPos,
                            particle[i].radius,
                            particle[i].xPos,
                            particle[i].yPos,
                            particle[i].radius / 1.25
                        )
                        grd.addColorStop(1.0, particle[i].color)
                        grd.addColorStop(0.0, 'rgba(34, 34, 34, 0)')
                        ctx.fillStyle = grd
                    } else {
                        ctx.fillStyle = particle[i].color
                    } // if
                    if (self.border === true) {
                        ctx.strokeStyle = '#fff'
                        ctx.stroke()
                    } // if
                    ctx.beginPath()
                    ctx.arc(
                        particle[i].xPos,
                        particle[i].yPos,
                        particle[i].radius,
                        0,
                        2 * Math.PI,
                        false
                    )
                    ctx.fill()
                } // draw
                animate(particle) {
                    const self = this
                    setInterval(() => {
                        self.clearCanvas()
                        for (let i = 0; i < self.numParticles; i++) {
                            particle[i].xPos += particle[i].xVelocity
                            particle[i].yPos -= particle[i].yVelocity
                            if (
                                particle[i].xPos > self.canvas.width  + particle[i].radius ||
                                particle[i].yPos > self.canvas.height + particle[i].radius
                            ) {
                                self.resetParticle(particle, i)
                            } else {
                                self.draw(particle, i)
                            } // if
                        } // for
                    }, 1000 / self.fps) // setInterval
                } // animate
                resetParticle(particle, i) {
                    const self = this
                    const random = self._rand(0, 1)
                    if (random > 0.5) {
                        particle[i].xPos = -particle[i].radius
                        particle[i].yPos = self._rand(0, self.canvas.height)
                    } else {
                        particle[i].xPos = self._rand(0, self.canvas.width)
                        particle[i].yPos = self.canvas.height + particle[i].radius
                    } // if
                    self.draw(particle, i)
                } // resetParticle
                clearCanvas() {
                    const self = this
                    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
                } // clearCanvas
            } // class Particles
            const particle = new Particles()
            particle.init()
        }
    //
    // return
    //
        return{
            sitename,
            root, title, shadow, face, layer1, layer2, layer3
        } // return
    } // setup
} // default
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/mixins.styl"
@import "../assets/stylus/variables.styl"
.TheBg
    display                             flex
    justify-content                     center
    align-items                         center
    position                            absolute
    top                                 0
    width                               100%
    height                              100%
    -webkit-backface-visibility         hidden
    backface-visibility                 hidden
    opacity                             0
    &_Title
        position                        absolute
        top                             0
        right                           0
        bottom                          0
        left                            0
        margin                          auto
        width                           100%
        height                          100%
        font-size                       13.5vw
        font-weight                     bold
        line-height                     1.5
        +large()
            font-size                   9vw
        &Shadow
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
        &Face
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
        position                        absolute
        top                             0
        right                           0
        width                           100%
        height                          100%
        text-align                      center
        font-size                       13.5vw
        font-weight                     bold
        line-height                     1.5
        //clip-path                       inset(0 0 0 0)
        overflow                        hidden
        +large()
            font-size                   9vw
            letter-spacing              0.1vw
        &1
        &2
        &3
            opacity                     0
        &1
            color                       #cbcbcb
            background                  #131313
        &2
            color                       #969696
            background                  #171717
        &3
            color                       #626262
            background                  #1b1b1b
        &Inner
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
        position                        absolute
        top                             0
        right                           0
        bottom                          0
        left                            0
        margin                          auto
        width                           100%
        height                          100%
        transform                       scale(0)
</style>

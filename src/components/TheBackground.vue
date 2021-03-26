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
        .TheBg_LayerInner(ref='inner')
            .tbc                                {{ data.sitename }}
</template>



<script>
import { onMounted, computed, reactive, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { useStore } from 'vuex'


export default {
    setup() {

        const data = reactive({
            sitename: 'pickiey.portfolio',
            isMobile: false
        })



        const store     = useStore(),
              painted   = computed( () => store.getters.painted   ),
              completed = computed( () => store.getters.completed )



        const title  = ref(),
              shadow = ref(),
              face   = ref(),
              layer1 = ref(),
              layer2 = ref(),
              layer3 = ref()



        onMounted(()=> {
            watch(
                () => painted, () => {
                    this.$el.style.opacity          = 1
                    this.$refs.layer1.style.opacity = 1
                    this.$refs.layer2.style.opacity = 1
                    this.$refs.layer3.style.opacity = 1

                },

                () => completed, async() => {
                    canvasAnimation()
                    await delay(130)
                    clip1()
                    await delay(130)
                    clip2()
                    await delay(130)
                    clip3()
                    await delay(200)
                    spout()
                    await delay(1000)
                    leaveLayer()
                    await delay(4000)
                    rotate()
                }
            )
        })



        // コールバック地獄の回避
        const delay = (ms) => {
            return new Promise(
                resolve => setTimeout(resolve, ms)
            )
        }



        //
        // 以下 アニメーション定義
        //

        const spout = () => {
            requestAnimationFrame( () => {
                //gsap.to(canvas.value, {
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
                gsap.to(shadow.value, {
                    duration    : 5,
                    y           : data.isMobile ? '1.25px' : '2.5px',
                    x           : data.isMobile ? '1.25px' : '2.5px',
                    ease        : "expo.inOut"
                })
                gsap.to(face.value, {
                    duration    : 5,
                    y           : data.isMobile ? '-1.25px' : '-2.5px',
                    x           : data.isMobile ? '-1.25px' : '-2.5px',
                    ease        : "expo.inOut"
                })
            })
        }



        const leaveLayer = () => {
            if (data.isMobile) return

            requestAnimationFrame( () => {
                gsap.to('.TheBg_LayerInner', {
                    duration    : 2,
                    opacity     : 0,
                    ease        : "expo.inOut"
                })
            })
        }



        const rotate = () => {
            requestAnimationFrame( () => {
                gsap.to(title.value, {
                    duration    : 150,
                    rotation    : 365,
                    startAt     : {rotation : 5},
                    ease        : "none",
                    repeat      : -1
                })
            })
        }



        const clip1 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer1.value, {
                    duration    : 1.3,
                    width       : data.isMobile ? '0%' : '50px',
                    ease        : "expo.out"
                })
            })
        }



        const clip2 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer2.value, {
                    duration    : 1.3,
                    width       : data.isMobile ? '0%' : '150px',
                    ease        : "expo.out"
                })
            })
        }



        const clip3 = () => {
            requestAnimationFrame( () => {
                gsap.to(layer3.value, {
                    duration    : 1.3,
                    width       : data.isMobile ? '0%' : '300px',
                    ease        : "expo.out"
                })
            })
        }



        const canvasAnimation = () => {
            const isMobile = data.isMobile

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
                }



                init() {
                    const self = this
                    self.render()
                    self.createCircle()
                }



                _rand(min, max) {
                    return Math.random() * (max - min) + min
                }



                render() {
                    const self = this
                    const windowHeight  = document.getElementById('scrollArea').clientHeight
                    const windowWidth   = document.getElementById('scrollArea').clientWidth
                    self.canvas.width   = windowWidth
                    self.canvas.height  = windowHeight

                    window.onresize = () => {
                        self.render()
                    }
                }



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
                        }

                        self.draw(particle, i)
                    }
                    self.animate(particle)
                }



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
                    }

                    if (self.border === true) {
                        ctx.strokeStyle = '#fff'
                        ctx.stroke()
                    }

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
                }



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
                            }
                        }
                    }, 1000 / self.fps)
                }



                resetParticle(particle, i) {
                    const self = this

                    const random = self._rand(0, 1)

                    if (random > 0.5) {
                        particle[i].xPos = -particle[i].radius
                        particle[i].yPos = self._rand(0, self.canvas.height)
                    } else {
                        particle[i].xPos = self._rand(0, self.canvas.width)
                        particle[i].yPos = self.canvas.height + particle[i].radius
                    }
                    self.draw(particle, i)
                }



                clearCanvas() {
                    this.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
                }
            }



            const particle = new Particles()
            particle.init()
        }



        return{
            data, delay,
            title, shadow, face, layer1, layer2, layer3,
            spout, leaveLayer, rotate, clip1, clip2, clip3,
            canvasAnimation
        }
    }
}
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

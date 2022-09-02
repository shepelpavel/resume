<template>
  <canvas ref="canvas" class="specrt-canvas"></canvas>
</template>

<script>
export default {
  name: 'SpectrCanvas',
  data() {
    return {
      width: null,
      height: null,
      canvas: {},
      context: {},
      speed: 0,
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.width = this.$refs.canvas.scrollWidth
    this.height = this.$refs.canvas.scrollHeight
    this.context = this.canvas.getContext('2d')
    this.backgroundCanvasInit(
      this.width,
      this.height,
      this.canvas,
      this.context,
      this.speed
    )
    this.mousemoveInit()
  },
  methods: {
    backgroundCanvasInit(width, height) {
      const _t = this
      _t.canvas.width = width
      _t.canvas.height = height

      const pixelLength = Math.ceil(width / 5)
      const pixels = []
      const step = Math.floor(pixelLength / 50)

      for (let i = 0; i < pixelLength; i++) {
        const modul = Math.sin(i / step) * Math.sin(i / 10)
        pixels.push({
          posX: (width / pixelLength) * i,
          baseY: height / 2,
          posY: height / 2,
          modul,
          width: 1,
          height: 1,
          color: '#FFFF00',
        })
      }

      setInterval(function () {
        _t.context.clearRect(0, 0, _t.canvas.width, _t.canvas.height)
        for (const pixel of pixels) {
          pixel.posY += pixel.modul * _t.speed

          const shift = (pixel.baseY - pixel.posY) / 10
          pixel.posY += shift

          _t.context.beginPath()
          _t.context.fillStyle = pixel.color
          _t.context.fillRect(pixel.posX, pixel.posY, pixel.width, pixel.height)
          _t.context.closePath()
          _t.context.fill()
        }
      }, 30)
    },
    mousemoveInit() {
      const _t = this
      let prevevent, currevent
      document.addEventListener('mousemove', (event) => {
        currevent = event
        if (prevevent && currevent) {
          const movementX = Math.abs(currevent.screenX - prevevent.screenX)
          const movementY = Math.abs(currevent.screenY - prevevent.screenY)
          _t.speed =
            Math.sqrt(movementX * movementX + movementY * movementY) * 4
        }
        prevevent = currevent
      })
    },
  },
}
</script>

<style lang="scss">
.specrt-canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}
</style>

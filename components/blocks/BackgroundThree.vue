<template>
  <div ref="three" class="background-three"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'BackgroundThree',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      cube: null,
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = this.$refs.three
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      )
      this.camera.position.z = 4
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor('#000000')
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
      this.cube = new THREE.Mesh(geometry, material)
      this.scene.add(this.cube)
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera)
    },
  },
}
</script>

<style lang="scss">
.background-three {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  canvas {
    width: 100vw;
    height: 100vh;
  }
}
</style>

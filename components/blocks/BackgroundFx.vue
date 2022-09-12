<template>
  <div class="background-fx">
    <BackgroundThree />
    <div class="background-fx__grid"></div>
    <audio ref="audio" loop>
      <source src="/files/loop.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import BackgroundThree from '@/components/blocks/BackgroundThree.vue'

export default {
  name: 'BackgroundFx',
  components: {
    BackgroundThree,
  },
  data() {
    return {
      audio: {},
      audioPlayed: false,
    }
  },
  mounted() {
    const _t = this
    _t.audio = _t.$refs.audio
    document.addEventListener('mousemove', () => {
      _t.playAudio()
    })
    // this.backgroundGridInit(this.width, this.height)
  },
  methods: {
    playAudio() {
      this.audioPlayed = true
      this.audio.volume = 0.3
      this.audio.play()
    },
  },
}
</script>

<style lang="scss">
.background-fx {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
  overflow: hidden;

  audio {
    display: none !important;
  }
}
</style>

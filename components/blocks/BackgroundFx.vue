<template>
  <div class="background-canvas">
    <SpectrCanvas />
    <div class="background-canvas__grid"></div>
    <audio ref="audio" loop>
      <source src="/files/loop.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import SpectrCanvas from '@/components/blocks/SpectrCanvas.vue'

export default {
  name: 'BackgroundFx',
  components: {
    SpectrCanvas,
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
.background-canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
  overflow: hidden;

  &__grid {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    opacity: 0.6;

    &_hline {
      position: absolute;
      left: 0;
      height: 1px;
      width: 100%;
      background: rgba(var(--color_white), 0.1);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(var(--color_white), 0.1) 100%
        );
        transform: translateX(-100%);
        animation-name: gridToRight;
        animation-duration: inherit;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-delay: inherit;
      }
    }

    &_vline {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 1px;
      background: rgba(var(--color_white), 0.1);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100vh;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(var(--color_white), 0.1) 100%
        );
        transform: translateY(-100%);
        animation-name: gridToBottom;
        animation-duration: inherit;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-delay: inherit;
      }
    }
  }

  audio {
    display: none !important;
  }
}
</style>

<template>
  <div>
    <BackgroundFx />
    <div class="page">
      <HeaderBlock class="header" />
      <Nuxt class="content" />
      <FooterBlock class="footer" />
    </div>
  </div>
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'
import BackgroundFx from '@/components/blocks/BackgroundFx.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock,
    BackgroundFx,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  .content {
    width: 100%;
    min-height: 100vh;
  }
}
</style>

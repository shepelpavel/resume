<template>
  <div id="app">
    <div id="nav" v-if="wellcome_complete">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-if="wellcome_complete" />
    <WellcomeModal @SubmitWellcomeModal="SubmitWellcomeModal" v-if="!wellcome_complete"/>
  </div>
</template>

<script>
import WellcomeModal from "@/components/WellcomeModal.vue";

export default {
  name: "App",
  components: {
    WellcomeModal,
  },
  data: function () {
    return {
      wellcome_complete: false,
    };
  },
  methods: {
    SubmitWellcomeModal: function (data) {
      console.log(data);
      this.wellcome_complete = true;
    },
  },
};
</script>

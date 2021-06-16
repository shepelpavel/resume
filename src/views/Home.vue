<template>
  <div class="home">
    <h1>This is an HelloWorld page</h1>
    <HelloWorld msg="HelloWorld" />
  </div>
</template>


<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

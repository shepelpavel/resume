<template>
  <div class="home">
    <h1>This is an HelloWorld page</h1>
    <HelloWorld msg="Welcome" />
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

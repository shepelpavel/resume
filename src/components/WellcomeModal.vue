<template>
  <div>
    <form @submit.prevent="submitWellcome">
      <input type="text" v-model="name" :class="[name_err ? 'error' : '']" />
      <input type="text" v-model="company" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "WellcomeModal",
  data: function () {
    return {
      name: "",
      name_err: false,
      company: "",
    };
  },
  methods: {
    submitWellcome: function () {
      if (this.name.length > 0) {
        this.$emit("SubmitWellcomeModal", {
          name: this.name,
          company: this.company,
        });
      } else {
        this.name_err = true;
      }
    },
  },
};
</script>
<template>
  <div id="app">
    <div id="nav" v-if="wellcome_complete">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-if="wellcome_complete" />
    <WellcomeModal
      @SubmitWellcomeModal="SubmitWellcomeModal"
      v-if="!wellcome_complete"
    />
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
      ip: "",
      city: "",
    };
  },
  mounted: function () {
    var _t = this;
    this.axios
      .get("https://ipapi.co/json/")
      .then((result) => {
        _t.city = result.data.city;
        _t.ip = result.data.ip;
      })
      .catch((error) => {
        _t.city = "не определен";
        _t.ip = "не определен";
      });
  },
  methods: {
    SubmitWellcomeModal: function (data) {
      var _t = this;

      var _message = "Резюме просматривает <b><u>" + data.name + "</u></b>";
      if (data.company.length > 0) {
        _message += "\nиз компании <b><u>" + data.company + "</u></b>";
      }
      _message += "\nгород: <b><u>" + _t.city + "</u></b>";
      _message += "\nIP: <b><u>" + _t.ip + "</u></b>";

      var _data = {
        exec: "send_to_tg",
        text: _message,
      };
      this.axios.post("/api/", _data).then(function (response) {
        if (response.data.ok) {
          _t.wellcome_complete = true;
        }
      });
    },
  },
};
</script>

var socket = io.connect("http://localhost:7777");

Vue.component("main-page", {
  props: ["title"],
  template: `
    <div class="main-page-container">
        <div class="main-page-button"> Create </div>
        <div class="main-page-button"> Join </div>
        <div class="main-page-button"> Watch </div>
        <div class="main-page-button"> About </div>
    </div>
  `
});

Vue.component("create-page", {
    props: ["title"],
    template: "<h3>{{ title }}</h3>"
  });

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    currentPage: "main-page"
  },
  components: {},
  created() {
    socket.on("news", this.news);
  },
  methods: {
    news(data) {
      console.log(data);
    }
  }
});

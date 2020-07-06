<template>
  <div id="app">
    <button @click="getMess1">
      点击按钮，发送请求到该接口：https://api.douban.com/v2/movie/imdb/tt0111161?apikey=0df993c66c0c636e29ecbb5344252a4a
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    getMess1() {
      this.$axios
        .get(
          "/imdb/tt0111161?apikey=0df993c66c0c636e29ecbb5344252a4a"
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

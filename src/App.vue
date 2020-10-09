<template>
  <div id="app">
    <main>
      <h3>Let us test your arithmetic.</h3>
      <p>What is the sum of the two numbers.</p>
      <div>
        <p>{{ x1 }} + {{ x2 }} =</p>
        <input v-model="guess" /><button @click="check">Check Answer</button>
      </div>
      <button @click="refresh">Refresh</button>
      <p>{{ message }}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      x1: Math.ceil(Math.random() * 100),
      x2: Math.ceil(Math.random() * 100),
      guess: "",
      message: "",
    };
  },
  methods: {
    check() {
      if (this.x1 + this.x2 === parseInt(this.guess)) {
        this.message = "Success!";
      } else {
        this.message = "Try Again";
      }
    },
    refresh() {
      this.x1 = Math.ceil(Math.random() * 100);
      this.x2 = Math.ceil(Math.random() * 100);
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

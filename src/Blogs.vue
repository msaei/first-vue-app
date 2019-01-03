<template>
  <div class="blogs">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">change title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return { title: "Blogs" };
  },
  methods: {
    changeTitle() {
      this.title = "My Blogs";
    }
  },
  beforeCreate() {
    alert("beforCreate hook");
  },
  created() {
    alert("created hook");
  },
  mounted() {
    alert("mounted hook");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  }
};
</script>

<style>
</style>


<template>
  <div class="blogs">
    <h1>{{ title }}</h1>
    <div v-for="post in posts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blogs",
  data() {
    return {
      title: "Blogs",
      posts: []
    };
  },
  methods: {
    changeTitle() {
      this.title = "My Blogs";
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(posts => {
        console.log(posts);
        this.posts = posts.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>


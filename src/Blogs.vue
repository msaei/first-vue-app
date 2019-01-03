<template>
  <div class="blogs">
    <h1>{{ title }}</h1>
    <input type="text" name id v-model="searchTerm">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body | snipet}}</p>
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
      posts: [],
      searchTerm: ""
    };
  },
  methods: {
    changeTitle() {
      this.title = "My Blogs";
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(val => {
        return val.title.match(this.searchTerm);
      });
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


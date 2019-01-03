<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
    <AllFriends :friends="friends" @delete="unfriend"/>
    <OnlineFriends :friends="friends"/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";
import Blogs from "./Blogs";
export default {
  name: "app",
  components: {
    Navbar: Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data() {
    return {
      title: "My first Vue app!",
      friends: [
        { name: "will", isOnline: true },
        { name: "bill", isOnline: false },
        { name: "joe", isOnline: false },
        { name: "john", isOnline: true }
      ]
    };
  },
  methods: {
    unfriend(payload) {
      //console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name != payload.name;
      });
    }
  }
};
</script>

<style>
h1 {
  color: #444;
  text-align: center;
}
</style>

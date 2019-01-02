<template>
  <nav>
    <ul>
      <li>
        <a href>home</a>
      </li>
      <li>
        <a href>about</a>
      </li>
      <li>
        <a href>contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
nav {
  text-align: center;
}
nav ul {
  padding: 0;
}
nav li {
  display: inline-block;
  list-style-type: none;
  margin: 0;
}
</style>



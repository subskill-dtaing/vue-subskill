<template>
  <div class="about">
    <HelloWorld request="planets"/>
    <HelloWorld request="starships" />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld";

  export default {
    name: 'About',
    components: {
      HelloWorld
    }
  }
</script>

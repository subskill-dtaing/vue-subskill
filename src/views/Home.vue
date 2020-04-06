<template>
  <div class="home">
    <HelloWorld request="people"/>
    <button @click="logOutUser">Sign out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    logOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        })
    }
  }
}
</script>

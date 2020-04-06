<template>
  <ul>
    <li v-for="(people, i) in data.results" :key="i">
      {{people.name}}
    </li>
  </ul>
</template>

<script >
import {http} from "../mixins/http";

export default {
  name: 'HelloWorld',
  props: {
    request: String
  },
  mixins: [http],
  data() {
    return {
      API_SECTION: this.request
    }
  }
}
</script >

<style scoped>
</style>

<template>
  <div class="home">
    <ul>
      <li v-for="(people, i) in peoples" :key="i">
        {{ people.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import { getPeople } from "@/utils/http";

export default {
  name: 'home',
  data() {
    return {
      peoples: []
    }
  },
  components: {

  },
  async mounted() {
    await getPeople.then(data => {
      this.peoples.push(...data.results)
    })
  }
}
</script>

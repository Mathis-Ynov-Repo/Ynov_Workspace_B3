<template>
  <div class="ghibli">
      <h1>Hello Ghibli</h1>
      <h1>{{ghibli.movie}} : {{ghibli.score}}</h1>
      <pre>{{ghibli}}</pre>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Ghibli',
  data() {
      return {
          ghibli : {}
      }
    },
    mounted() {
        axios.get('/api/ghibli').then(r => this.ghibli = r.data)
    }
}
</script>

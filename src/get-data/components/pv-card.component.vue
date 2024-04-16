<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: null
    }
  },
  methods: {
    getData() {
      axios
          .get('https://restcountries.com/v3.1/name/peru')
          .then(response => this.info = response.data)
          .catch(error => console.error('Error al obtener datos:', error));
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<template>
  <Card style="width: auto; overflow: hidden" class="card">
    <template #header>
      <img alt="country flag" :src="info ? info[0].flags.png : ''" class='image'/>
      <img alt="country coat of arms" :src="info ? info[0].coatOfArms.png : ''" class='image'/>
    </template>
    <template #content>
      <p>Information</p>
      <p>name: {{ info ? info[0].name.common : 'Loading...' }}</p>
      <p>official name: {{ info ? info[0].name.official : 'Loading...' }}</p>
      <p>currency: {{ info ? info[0].currencies.PEN.name : 'Loading...' }}</p>
      <p>capital: {{ info ? info[0].capital[0] : 'Loading...' }}</p>
      <p>region: {{ info ? info[0].region : 'Loading...' }}</p>
      <p>subregion: {{ info ? info[0].subregion : 'Loading...' }}</p>

      <p>languages:
        <span v-if="info">
          <span v-for="(language, index) in info[0].languages" :key="index">
            {{ language + ` `  }}
          </span>
        </span>
        <span v-else>Loading...</span>
      </p>
      <p>population: {{ info ? info[0].population : 'Loading...' }}</p>
    </template>
  </Card>
</template>


<style>
.image {
  display: flex;
  align-self: center;
  margin: 1.5em 6.5em;
  width: 7em;
}

.card {
  width: 25%;
  margin: 4em 0 4em 0;
}
</style>
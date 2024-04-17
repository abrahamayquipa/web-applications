<script>
import api from '../../information/services/api.service';

export default {
  data() {
    return {
      api: null
    }
  },
  methods: {
    fetchData() {
      api.getData()
          .then(response => {
            this.api = response.data[0];
          })
          .catch(error => {
            console.error('Error al obtener datos:', error);
          });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <Card style="width: auto; overflow: hidden" class="card">
    <template #header>
      <img alt="country flag" :src="api ? api.flags.png : ''" class='image'/>
      <img alt="country coat of arms" :src="api ? api.coatOfArms.png : ''" class='image'/>
    </template>
    <template #content>
      <p>Information</p>
      <p>name: {{ api ? api.name.common : 'Loading...' }}</p>
      <p>official name: {{ api ? api.name.official : 'Loading...' }}</p>
      <p>currency: {{ api ? api.currencies.PEN.name : 'Loading...' }}</p>
      <p>capital: {{ api ? api.capital[0] : 'Loading...' }}</p>
      <p>region: {{ api ? api.region : 'Loading...' }}</p>
      <p>subregion: {{ api ? api.subregion : 'Loading...' }}</p>

      <p>languages:
        <span v-if="api">
          <span v-for="(language, name) in api.languages" :key="name">
            {{ language + ` `  }}
          </span>
        </span>
        <span v-else>Loading...</span>
      </p>
      <p>population: {{ api ? api.population : 'Loading...' }}</p>
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

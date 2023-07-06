<template>
  <div>
    <h2>Liste des matériels dans la zone du chantier Charlie</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Capteurs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(material, index) in materials" :key="index">
          <td>{{ material.date }}</td>
          <td>
            {{ material.sensor_count }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('tracker', ['materials']),
  },
  mounted() {
    this.fetchMaterial();
  },
  methods: {
    ...mapActions('tracker', ['fetchMaterial']),
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>

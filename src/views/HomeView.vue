<template>
  <div>
    <h2>Nombre de sorties par jour par capteur</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Capteurs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sensorCount, index) in sensorCounts" :key="index">
          <td>{{ sensorCount.date }}</td>
          <td>
            {{ sensorCount.sensor_count }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters  } from 'vuex';

export default {
  computed: {
    ...mapGetters({
     'sensorCounts': 'tracker/sensorCounts',
    })
  },
  mounted() {
    this.fetchSensorCounts();
  },
  methods: {
    ...mapActions({
      'fetchSensorCounts' : 'tracker/fetchSensorCounts'
    }),
  }
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

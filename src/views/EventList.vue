<template>
  <div>
    <h1 style="justify-content: center">Events Listing</h1>
    <div class="container">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <!-- <div>
      <BaseButton
        >Purchase for $ {{ total.toLocaleString('de-DE') }}</BaseButton
      >
    </div> -->
    <!-- <router-link :to="{ name: 'event-show', params: { event_id: 2 } }"
      >Mostrar Evento #2
    </router-link> -->
  </div>
</template>
<script>
import EventCard from '../components/EventCard.vue'
import service from '../services/EventService'
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    }
  },
  created() {
    service
      .getEvents()
      .then((res) => {
        console.log(res.data)
        this.events = res.data
      })
      .catch((err) => {
        console.error('Ocurrio un error ' + err)
      })
  },
}
</script>

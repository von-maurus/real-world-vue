<template>
  <div>
    <router-link
      class="event-link"
      :to="{ name: 'event-show', params: { id: event.id } }"
    >
      <div class="event-card -shadow">
        <div class="eyebrow">
          <span
            >@{{ event.time }} on
            {{ new Date(event.date).toLocaleDateString('es-CL') }}</span
          >
        </div>
        <div class="title">
          <h4>{{ event.title }}</h4>
        </div>
        <div class="label">
          <font-awesome-icon icon="user-check"></font-awesome-icon>
          <span>
            {{
              event.attendees != null && event.attendees.length > 0
                ? event.attendees.length
                : 0
            }}
            Attending
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    event: Object,
  },
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  margin: 10px;
  margin-bottom: 14px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

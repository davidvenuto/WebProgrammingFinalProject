<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-activity']);
const showForm = ref(false);

const newActivity = ref({
  title: '',
  date: '',
  location: '',
  distance_miles: 0,
  duration_minutes: 0
});

const submitActivity = () => {
  emit('add-activity', newActivity.value);
  newActivity.value = {
    title: '',
    date: '',
    location: '',
    distance_miles: 0,
    duration_minutes: 0
  };
  toggleForm();
};

function toggleForm() {
  showForm.value = !showForm.value;
}
</script>

<template>
  <div>
    <button class="button is-primary" @click="toggleForm">Add Activity</button>

    <div v-if="showForm" class="modal is-active">
      <div class="modal-background" @click="toggleForm"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Activity</p>
          <button class="delete" aria-label="close" @click="toggleForm"></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent="submitActivity">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" v-model="newActivity.title" placeholder="Title">
              </div>
            </div>

            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <input class="input" type="date" v-model="newActivity.date">
              </div>
            </div>

            <div class="field">
              <label class="label">Location</label>
              <div class="control">
                <input class="input" type="text" v-model="newActivity.location" placeholder="Location">
              </div>
            </div>

            <div class="field">
              <label class="label">Distance (miles)</label>
              <div class="control">
                <input class="input" type="number" v-model="newActivity.distance_miles" placeholder="Distance">
              </div>
            </div>

            <div class="field">
              <label class="label">Duration (minutes)</label>
              <div class="control">
                <input class="input" type="number" v-model="newActivity.duration_minutes" placeholder="Duration">
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="submitActivity">Save changes</button>
          <button class="button" @click="toggleForm">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>


.modal-background {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-card {
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.modal-card-head,
.modal-card-foot {
  background-color: #f5f5f5;
  border-bottom: 1px solid #dbdbdb;
}

.modal-card-title {
  color: #363636;
}

.input {
  padding: 10px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}

.input:focus {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  opacity: 0.8;
}

.button.is-primary {
  background-color: #3273dc;
  color: #ffffff;
}

.button.is-success {
  background-color: #23d160;
  color: #ffffff;
}

@media (max-width: 600px) {
  .modal-card {
    margin: 20px;
  }

  .modal-card-body {
    padding: 20px;
  }
}

</style>
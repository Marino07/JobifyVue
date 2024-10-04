<script setup>
import { ref, defineProps, onMounted } from 'vue'; // Uvoz ref funkcije
import JobListing from './JobListing.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

// Definiranje reaktivne varijable za poslove
const jobs = ref([]); 

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    
    // Logiraj response.data da vidiš kakav je oblik podataka
    console.log('API Response:', response.data);

    jobs.value = response.data.map((job, index) => {
      if (!job.id) {
        job.id = index + 1; // Dodaj index kao privremeni 'id'
      }
      return job;
    });

    // Logiraj jobs.value nakon dodjeljivanja
    console.log('Jobs after assignment:', jobs.value);

  } catch (error) {
    console.error('Greška prilikom dohvaćanja podataka:', error);
  }
});






// Provjera u konzoli
</script>

<template>
  <section>
    <div class=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <JobListing v-for="job in jobs.slice(0, limit)" :key="job.id" :job="job" class="bg-gray-100 p-4 rounded-lg shadow-md" />       
    </div>
  </section>
  
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>

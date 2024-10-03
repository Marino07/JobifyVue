<script setup>
import JobData from '@/jobs.json'; // Uvoz JSON datoteke
import { ref, defineProps } from 'vue'; // Uvoz ref funkcije
import JobListing from './JobListing.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

// Definiranje reaktivne varijable za poslove
const jobs = ref(JobData.jobs); // Pristupamo ključu 'jobs' unutar JSON datoteke

// Provjera u konzoli
</script>

<template>
    <section>
      <div class=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <JobListing v-for="job in jobs.slice(0,limit)" :key="job.id" :job="job" class="bg-gray-100 p-4 rounded-lg shadow-md" />       
      </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <a
        href="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
  </template>




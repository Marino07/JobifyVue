<script setup>
import JobData from '@/jobs.json'; // Uvoz JSON datoteke
import { ref } from 'vue'; // Uvoz ref funkcije
import JobListing from './JobListing.vue';

// Definiranje reaktivne varijable za poslove
const jobs = ref(JobData.jobs); // Pristupamo ključu 'jobs' unutar JSON datoteke

// Provjera u konzoli
console.log(jobs.value); // Pristup podacima kroz .value
</script>

<template>
    <section>
      <h2 class="text-xl font-semibold mb-4">Lista Poslova</h2>
      <div class=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <JobListing v-for="job in jobs" :key="job.id" :job="job" class="bg-gray-100 p-4 rounded-lg shadow-md" />       
      </div>
    </section>
  </template>




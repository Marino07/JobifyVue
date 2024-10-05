<script setup>
import BackButton from '@/components/BackButton.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; // Loader komponenta
import { ref, onMounted } from 'vue'; // Ref i lifecycle metode
import axios from 'axios'; // Axios za dohvaćanje podataka
import { useRoute } from 'vue-router'; // Koristimo useRoute za dohvaćanje parametara iz rute

// Reaktivni podaci
const job = ref(null); // Početno stanje za podatke o poslu
const isLoading = ref(true); // Pratimo da li se podaci učitavaju

const route = useRoute(); // Kreiramo instancu useRoute za pristup parametrima

onMounted(async () => {
  try {
    const jobId = route.params.id; // Dohvaćamo ID iz parametara rute
    const response = await axios.get(`/api/jobs/${jobId}`); // Dinamički endpoint s ID-em
    job.value = response.data; // Postavljanje dohvaćenih podataka
    //console.log(job.value); // Ispis podataka u konzolu za provjeru
  } catch (error) {
    console.error('Greška prilikom dohvaćanja podataka:', error);
  } finally {
    isLoading.value = false; // Isključujemo loader nakon što podaci stignu
  }
});
</script>

<template>
  <BackButton/>
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

        <!-- Glavni dio -->
        <main v-if="!isLoading">
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ job.jobType || 'Full-Time' }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ job.title || 'Job Title' }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ job.location || 'Location' }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ job.description || 'No description available' }}</p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ job.salary || 'N/A' }}</p>
          </div>
        </main>

        <!-- Loader dok podaci nisu dohvaćeni -->
        <div v-else class="flex justify-center items-center h-96">
          <PulseLoader color="#123abc" />
        </div>

        <!-- Sidebar -->
        <aside v-if="!isLoading">
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ job.company.name || 'Company Name' }}</h2>
            <p class="my-2">{{ job.company.description || 'No description available' }}</p>

            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ job.company.email || 'No email available' }}</p>

            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ job.company.phone || 'No phone available' }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <a href="#" class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full">Edit Job</a>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4">Delete Job</button>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

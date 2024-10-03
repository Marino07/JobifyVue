<script setup>
import JobListnings from './components/JobListnings.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';

</script>


<template>
  <Navbar></Navbar>
  <Hero title="Become Laravel dev" subtitle="Dont worry you got this"></Hero>
  <HomeCards></HomeCards>
  <JobListnings :limit = 3 :showButton="true"></JobListnings>
 
</template>


<script setup>
import JobListnings from '@/components/JobListnings.vue';
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
</script>

<template>
    <Hero title="Become Laravel dev" subtitle="Dont worry you got this"></Hero>
    <HomeCards></HomeCards>
    <JobListnings :limit = 3 :showButton="true"></JobListnings>
</template>
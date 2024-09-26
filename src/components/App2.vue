
<template>
    <form @submit.prevent="Dodaj">
      <label for="unos">Unos</label>
      <input type="text" id="product" v-model="novi_proizvod">
      <button type="submit">Add</button> 
    </form><br>
    <ul>
      <li v-for="(product, index) in products" :key="index"> <!--//:key kao trajni element (index) na pocetku kao trenutni -->
        {{ product }}
        <button @click="Delete(index)">x</button>
      </li>  
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reaktivni niz proizvoda
  const products = ref(['product1']);
  
  // Reaktivni unos za novi proizvod
  const novi_proizvod = ref('');
  
  // Funkcija za dodavanje proizvoda u niz
  const Dodaj = () => {
    if (novi_proizvod.value !== '') {
      products.value.push(novi_proizvod.value);  // Dodajemo novi proizvod u reaktivni niz
      novi_proizvod.value = '';  // Resetujemo unos nakon dodavanja
    }
  }
  const Delete = (index) =>  {
    products.value.splice(index,1);
  
  }
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  
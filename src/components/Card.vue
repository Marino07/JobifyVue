<script setup>
import { defineProps } from 'vue';
defineProps({
    klasa: {
        type: String,
        default: 'bg-gray-100',
    }
});

</script>

<template>
    <div :class="['klasa','p-6 rounded-lg shadow-md']">
        <slot></slot>
    </div>


</template>
<template>
    <footer class="bg-dark text-light py-3 text-center">
        <small>&copy; {{ currentYear }} Mario Barrientos · Portfolio</small>
    </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>
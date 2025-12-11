<template>
  <Hero />
  <About />
  <Proyects />
  <Contact />
  <Footer />
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Proyects from './components/Proyects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>


<style>
body {
  margin: 0;
}

section {
  scroll-margin-top: 80px;
}
</style>

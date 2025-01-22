<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Weather from "@/components/Weather.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
</script>
<template>
  <Navbar @citySelected="updatedCity" />
  <Hero />
  <About />
  <Weather :selectedCity="selectedCity" />
  <Contact />
  <Footer />
</template>

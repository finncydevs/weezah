<script setup>
import osaka from "@/assets/imgs/sataandagi.png";
import { ref, onMounted } from "vue";
</script>

<template>
  <section
    id="home"
    class="h-screen pt-36 bg-gradient-to-r from-blue-800 to-indigo-900"
  >
    <div class="container h-full flex items-center">
      <div class="flex flex-wrap w-full">
        <div
          class="w-full h-full self-center px-4 lg:w-1/2"
          data-aos="fade-right"
        >
          <h1 id="type" class="text-5xl font-bold text-primary">Weezah</h1>
          <h2 class="mb-5 text-lg font-semibold text-primary lg:text-2xl mt-3">
            Weather app made by Students from Nurul Islam Highschool
          </h2>
          <p
            class="mb-10 font-medium leading-relaxed text-lg lg:text-xl text-secondary"
          >
            Believe me everything can be
            <b class="font-bold text-primary text-lg">Learn!</b>
          </p>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Contact me
          </button>
        </div>
        <!-- <div class="w-full h-full self-center px-6 lg:w-1/2">
          <img src="../assets/imgs/cloud.png" alt="" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped></style>

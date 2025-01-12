<script setup>
// Import images from assets
import photo1 from "@/assets/imgs/1.jpg";
import photo2 from "@/assets/imgs/2.jpg";
import photo3 from "@/assets/imgs/3.jpg";
import photo4 from "@/assets/imgs/4.jpg";

// Create a list of project data to make the template more dynamic
const projects = [
  {
    img: photo1,
    alt: "Photo editing",
    title: "Photo editing photoshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.",
  },
  {
    img: photo2,
    alt: "Photo editing stlyed",
    title: "Photoshop stlyed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.",
  },
  {
    img: photo3,
    alt: "Potografi",
    title: "Mencoba potografi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.",
  },
  {
    img: photo4,
    alt: "WhatsApp bot",
    title: "FionaBot di Whatsapp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.",
  },
];
</script>

<template>
  <section id="portofolio" class="pt-36 pb-26 bg-slate-100">
    <div class="container">
      <!-- Section Header -->
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Portofolio</h4>
          <h2 class="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
          <p class="font-medium text-md text-sky-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum
            maiores, dolorem, dolorum magni fugit illum ex officiis quia tempore
            velit.
          </p>
        </div>
      </div>

      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="mb-12 p-4 md:w-1/2"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <img :src="project.img" :alt="project.alt" class="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark">
            {{ project.title }}
          </h3>
          <p class="text-base font-medium text-secondary">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


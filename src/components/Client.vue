<script setup>
import left4dead from "@/assets/imgs/clients/left4dead.png";
import aseprite from "@/assets/imgs/clients/asep.png";
import sv from "@/assets/imgs/clients/sv.png";
import elden from "@/assets/imgs/clients/ER.png";
import blashpemous from "@/assets/imgs/clients/blashpemous.png";
import hollowknight from "@/assets/imgs/clients/hollowknight.png";
import dredge from "@/assets/imgs/clients/dredge.png";
import farming from "@/assets/imgs/clients/farming.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const games = [
  {
    id: 1,
    src: left4dead,
    alt: "left 4 dead",
  },
  {
    id: 2,
    src: sv,
    alt: "Stardew Valley",
  },
  {
    id: 3,
    src: farming,
    alt: "Farming Simulator",
  },
  {
    id: 4,
    src: aseprite,
    alt: "aseprite",
  },
  {
    id: 5,
    src: elden,
    alt: "Elden Ring",
  },
  {
    id: 6,
    src: blashpemous,
    alt: "Blasphemous",
  },
  {
    id: 7,
    src: hollowknight,
    alt: "Hollow Knight",
  },
  {
    id: 8,
    src: dredge,
    alt: "Dredge",
  },
];
</script>

<template>
  <section id="clients" class="pt-36 pb-32 bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div
          class="mx-auto text-center mb-16"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <h4 class="font-semibold text-lg text-sky-200">Games</h4>
          <h2 class="font-bold text-white text-3xl mb-4 pt-5 md:text-4xl">
            Game game yang saya sering mainkan
          </h2>
        </div>
      </div>

      <div class="w-full px-4" data-aos-duration="1000" data-aos="fade-up">
        <div class="flex flex-wrap items-center justify-center">
          <a
            v-for="(game, i) in games"
            :key="i"
            href=""
            class="max-w-[160px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:scale-125 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="game.src" :alt="game.alt" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

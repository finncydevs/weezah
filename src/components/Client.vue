<script setup>
import left4dead from "@/assets/imgs/clients/left4dead.png";
import stardewvalley from "@/assets/imgs/clients/sv.png";
import aseprite from "@/assets/imgs/clients/asep.png";
import sv from "@/assets/imgs/clients/sv.png";
import elden from "@/assets/imgs/clients/ER.png";
</script>

<template>
  <section id="clients" class="pt-36 pb-32 bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-sky-200">Client</h4>
          <h2 class="font-bold text-white text-3xl mb-4 pt-5 md:text-4xl">
            Yang pernah bekerja sama
          </h2>
          <p class="font-medium text-md text-sky-100 md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            minus
          </p>
        </div>
      </div>

      <div class="w-full px-4">
        <div class="flex flex-wrap items-center justify-center">
          <a
            href=""
            class="max-w-[160px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="left4dead" alt="left4dead2" />
          </a>
          <a
            href=""
            class="max-w-[150px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="stardewvalley" alt="stardew valley" />
          </a>
          <a
            href=""
            class="max-w-[200px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="elden" alt="Elden Ring" />
          </a>
          <a
            href=""
            class="max-w-[160px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="aseprite" alt="aseprite" />
          </a>
          <a
            href=""
            class="max-w-[160px] mx-4 py-4 grayscale opacityy-60 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img :src="sv" alt="stardew valley" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Blog data
const blogs = ref([
  {
    id: 1,
    title: "Gaming hoby anak jaman now",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis sunt voluptate, minima maiores reprehenderit.",
    image: "https://www.ncsc.gov.uk/images/iStock-1334436084.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Kenapa gamer lebih suka cewe yang mentally unstable?!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis sunt voluptate, minima maiores reprehenderit.",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2527500/capsule_616x353.jpg?t=1735526235",
    link: "#",
  },
  {
    id: 3,
    title: "Stereotype gamer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis sunt voluptate, minima maiores reprehenderit.",
    image:
      "https://gamerstereotype.wordpress.com/wp-content/uploads/2010/04/make-love-not-warcraft2.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Left 4 Dead 2 Game Anti Dead 🔥",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis sunt voluptate, minima maiores reprehenderit.",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_Rebellion_ZombieArmy4_Left4Dead-CharacterPack01_S1_2560x1440_2560x1440-45465decc551676c6b5d329237bc5e6b",
    link: "#",
  },
]);
</script>

<template>
  <section id="blog" class="pt-32 bg-slate-100">
    <div class="container">
      <!-- Section Title -->
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Blog</h4>
          <h2 class="font-bold text-dark text-3xl mb-4">Tulisan Terkini</h2>
          <p class="font-medium text-md text-sky-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            pariatur debitis corrupti ipsa fugit.
          </p>
        </div>
      </div>

      <!-- Blog Cards -->
      <div class="flex flex-wrap">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="w-full px-4 lg:w-1/2 xl:w-1/3"
        >
          <div class="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
            <img :src="blog.image" :alt="blog.title" class="w-full" />
            <div class="py-8 px-6">
              <a
                :href="blog.link"
                class="[block mb-3 font-semibold text-2xl text-sky-800 hover:text-primary truncate, blog.id !== 2 ? 'truncate' : '']"
                >{{ blog.title }}</a
              >
              <p class="font-medium text-base text-sky-400 mb-4">
                {{ blog.description }}
              </p>
              <a
                :href="blog.link"
                class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >Baca selengkapnya</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

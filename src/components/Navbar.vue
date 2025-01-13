<script setup>
import { onMounted } from "vue";
import { scrollInto } from "@/utils/script";

async function scrollNav() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  window.onscroll = () => {
    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
}
onMounted(() => {
  scrollNav();
});
</script>

<template>
  <header class="absolute top-0 left-0 z-10 w-full items-center bg-transparent">
    <div class="container">
      <div class="relative flex items-center justify-between py-4">
        <!-- Reduced padding here -->
        <div class="px-4">
          <a
            @click="scrollTo('home')"
            class="block text-xl lg:text-4xl font-bold text-primary"
            >Finn</a
          >
        </div>
        <div class="flex items-center px-4">
          <nav id="nav-menu" class="scale-0 lg:scale-100 lg:flex">
            <ul class="flex space-x-8">
              <li class="group">
                <a
                  @click="scrollInto('home')"
                  class="py-2 text-sm lg:text-base text-dark group-hover:text-primary"
                  >Beranda</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollInto('about')"
                  class="py-2 text-sm lg:text-base text-dark group-hover:text-primary"
                  >Tentang Saya</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollInto('portofolio')"
                  class="py-2 text-sm lg:text-base text-dark group-hover:text-primary"
                  >Portfolio</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollInto('home')"
                  class="py-2 text-sm lg:text-base text-dark group-hover:text-primary"
                  >Clients</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollInto('blog')"
                  class="py-2 lg:text-base text-dark group-hover:text-primary"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollInto('contact')"
                  class="py-2 text-sm lg:text-base text-dark group-hover:text-primary"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 767px) {
  header {
    padding: 10px 0;
  }

  #nav-menu ul {
    flex-direction: row;
  }

  #nav-menu li {
    width: auto;
  }

  #nav-menu li a {
    padding: 10px 0;
  }
}
</style>

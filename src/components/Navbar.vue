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
  <header
    class="absolute top-0 left-0 z-10 flex text-slate-600 w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a href="#home" class="block py-6 text-lg font-bold text-sky-400"
            >Jindan</a
          >
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block lg:hidden"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="absolute right-4 top-full text-sky-400 hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg slate-800:bg-sky-800 sky-800:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:sky-800:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  @click="scrollTo('home')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
                  >Beranda</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollTo('about')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
                  >Tentang Saya</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollTo('portofolio')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
                  >Portfolio</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollTo('clients')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
                  >Clients</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollTo('blog')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  @click="scrollTo('contact')"
                  class="mx-8 flex py-2 text-base group-hover:text-sky-600"
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

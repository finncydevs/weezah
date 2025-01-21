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
  <header class="absolute top-0 left-0 z-10 flex w-full items-center">
    <div class="container flex items-center justify-between px-4 py-3 lg:py-0">
      <a @click="scrollInto('home')" class="text-2xl font-bold text-primary">Weezah</a>
      <div class="ml-3 lg:flex flex-1 justify-center">
        <form class="flex items-center w-full max-w-lg">
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 pl-10 text-sm border rounded-l-md bg-transparent border-blue-600 focus:border-blue-500"
            placeholder="Search.."
            required
          />
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-r-md px-4 py-2"
          >
            Search
          </button>
        </form>
      </div>

      <!-- Navbar -->
      <nav
        id="nav-menu"
        class="hidden absolute right-4 top-full py bg-transparent shadow-md rounded-md w-full max-w-xs py-4 lg:block lg:static lg:w-auto lg:bg-transparent lg:shadow-none"
      >
        <ul class="flex flex-col lg:flex-row">
          <li class="group">
            <a
              @click="scrollInto('home')"
              class="block px-4 py-2 text-base text-primary font-semibold hover:text-blue-500"
              >Beranda</a
            >
          </li>
          <li class="group">
            <a
              @click="scrollInto('weather')"
              class="block px-4 py-2 text-base text-primary font-semibold hover:text-blue-500"
              >Weather</a
            >
          </li>
          <li class="group">
            <a
              @click="scrollInto('contact')"
              class="block px-4 py-2 text-base text-primary font-semibold hover:text-blue-500"
              >Contact</a
            >
          </li>
          <li class="block lg:hidden px-4 py-2">
            <form class="flex items-center w-full">
              <input
                type="search"
                id="mobile-search"
                class="flex lg:block w-full p-2 pl-10 bg-transparent text-sm border rounded-l-md border-gray-300"
                placeholder="Search.."
                required
              />
              <button type="submit" class="">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 767px) {
  #nav-menu {
    display: none;
  }

  #hamburger:focus + #nav-menu,
  #hamburger:active + #nav-menu {
    display: block;
  }
}

@media (min-width: 768px) {
  #mobile-search {
    display: flex;
  }

  #default-search {
    display: block;
  }
}
input[type="search"] {
  background-color: transparent !important;
}
</style>

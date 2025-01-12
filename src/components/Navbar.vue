<script setup>
import { ref, onMounted } from "vue";
import { scrollInto } from "@/utils/script";
const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

async function navbarScroll() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
}

onMounted(() => {
  navbarScroll();
});
</script>

<template>
  <header
    id="beranda"
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a
            :click="scrollInto('beranda')"
            class="font-bold text-primary block py-6 text-2xl lg:text-4xl"
          >
            Jindan
          </a>
        </div>

        <!-- Hamburger Menu -->
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="block lg:hidden"
            @click="toggleMenu"
          >
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
              :class="{ 'hamburger-active': isMenuVisible }"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-left transition duration-300 ease-in-out"
              :class="{ 'hamburger-active': isMenuVisible }"
            ></span>
          </button>
          <!-- Navbar -->
          <nav
            id="nav-menu"
            :class="[
              'absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:shadow-none lg:max-w-full lg:rounded-none',
              { hidden: !isMenuVisible },
            ]"
          >
            <ul class="block lg:flex">
              <li>
                <a @click="Beranda" class="group-list hover:text-primary flex"
                  >Beranda</a
                >
              </li>
              <li>
                <a
                  @click="scrollInto('about')"
                  class="group-list hover:text-primary flex"
                  >Tentang Saya</a
                >
              </li>
              <li>
                <a
                  @click="scrollInto('portofolio')"
                  class="group-list hover:text-primary flex"
                  >Portofolio</a
                >
              </li>
              <li>
                <a
                  @click="scrollInto('blog')"
                  class="group-list hover:text-primary flex"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  @click="scrollInto('contact')"
                  class="group-list hover:text-primary flex"
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

<style>
.navbar-fixed {
  @apply fixed z-[9999] bg-white bg-opacity-80;
  backdrop-filter: blur(5px);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
}

.hamburger-active > span:nth-child(1) {
  @apply rotate-45;
}
.hamburger-active > span:nth-child(2) {
  @apply scale-0;
}
.hamburger-active > span:nth-child(3) {
  @apply -rotate-45;
}

.group-list {
  @apply text-base text-dark py-2 mx-8;
}
.hamburger-line {
  @apply w-[30px] h-[2px] bg-dark;
}
</style>

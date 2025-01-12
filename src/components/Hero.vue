<script setup>
import osaka from "@/assets/imgs/sataandagi.png";
import { ref, onMounted } from "vue";

const text = ref("");
const fText = "I Am a Coder & Dreamer.";
const typeSpeed = 200;
const resetDelay = 2000;

function typeWritter() {
  let i = 0;
  function type() {
    if (i < fText.length) {
      text.value += fText[i];
      i++;
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(() => {
        text.value = "";
        typeWritter();
      }, resetDelay);
    }
  }
  type();
}

onMounted(() => {
  typeWritter();
});
</script>

<template>
  <section id="home" class="pt-36">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold text-primary md:text-2xl">
            Aku
            <span class="block font-bold text-dark text-5xl">Jindan</span> Hii
            Kalian Semua
          </h1>
          <h1 id="type" class="font-medium text-primary lg:text-5xl">
            {{ text }} <span class="blinking-cursor">|</span>
          </h1>
          <p class="font-medium mb-10 text-sky-500 leading-relaxed">
            Believe Me Everything Can Be!! <b>Learn</b>
          </p>

          <a
            href=""
            class="text-base mt font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
            >Hubungi Saya
          </a>
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-10 lg:mt-9 lg:right-0">
            <img :src="osaka" alt="Osaker" srcset="" class="w-50 h-50" />
            <span class="absolute -bottom-1 -z-10 translate-x-5 md:scale-125"
              ><svg
                width="450"
                height="450"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0ea5e9"
                  d="M61.1,-31.1C74.6,-11.9,77.8,17.4,65.9,35C54,52.6,27,58.5,0.9,57.9C-25.1,57.4,-50.3,50.5,-59.4,34.5C-68.6,18.4,-61.8,-6.7,-49.2,-25.3C-36.7,-44,-18.3,-56.3,2.7,-57.8C23.8,-59.4,47.7,-50.3,61.1,-31.1Z"
                  transform="translate(100 100) scale(1.4)"
                /></svg
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blinking-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  animation: blink 1s steps(2, start) infinite;
}

#type {
  font-size: 4vh;
}
@keyframes blink {
  50% {
    background-color: transparent;
  }
}
</style>

<script></script>

<template>
  <section id="contact" class="pt-36 pb-32 bg-slate-900">
    <div class="container flex justify-center items-center">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
          <h2 class="font-bold text-dark text-3xl mb-4">Contact Us</h2>
          <p class="font-medium text-md text-sky-500">
           If theres anything you want to critic or say, don't hold back
          </p>
        </div>
      </div>
      <form action="" class="w-full lg:w-2/3">
        <div
          class="w-full lg:mx-auto justify-center shadow-white pb-6 pt-6 rounded-md shadow-sm items-center self-center bg-primary"
        >
          <div class="w-full px-4 mb-8">
            <label for="name" class="text-base text-slate-900 font-bold"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="w-full bg-slate-900 border border-sky-600 text-dark p-3 rounded-md focus:outline-none"
            />
            <label for="email" class="text-base text-slate-900 font-bold"
              >Email</label
            >
            <input
              type="text"
              id="email"
              class="w-full bg-slate-900 border border-sky-600 text-dark p-3 rounded-md focus:outline-none"
            />
            <label for="pesan" class="text-base text-slate-900 font-bold"
              >Message</label
            >
            <textarea
              id="pesan"
              class="w-full bg-slate-900 border border-sky-600 text-dark p-3 rounded-md focus:outline-none"
              rows="4"
            ></textarea>
          </div>
          <div class="w-full px-4">
            <button
              class="w-full rounded-md bg-slate-900 border border-sky-600 hover:bg-sky-600 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

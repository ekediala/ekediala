<template>
  <main class="h-full lg:ml-64 md:mx-5 w-full flex m-auto justify-center">
    <div class="max-w-md flex flex-col justify-center m-10 lg:m-auto md:m-32">
      <h1 class="flex font-serif font-bold mb-1 flex-col">
        <span class="text-6xl">Hi,</span><span class="text-5xl">Eke Here</span>
      </h1>
      <h3
        class="text-blue-400 font-semibold font-serif mb-4 text-2xl md:text-3xl"
      >
        Web Developer.
      </h3>
      <p class="text-blue-200 text-xl mb-6 md:text-2xl">
        I write Vue and Laravel mostly. When I'm not writing code, I read, watch
        football, and / or drink with my friends.
      </p>
      <router-link class="text-blue-700 underline" to="/portfolio"
        >Here's my most recent projects.</router-link
      >
    </div>
  </main>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style>
.btn {
  @apply inline-block rounded-full px-3 py-1 text-xl font-semibold mr-2;
}

.btn:active,
.btn:visited {
  transition: all 1s ease;
  transform: scale(0.7);
  @apply border-none outline-none;
}
</style>

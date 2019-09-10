<template>
  <main
    class="w-screen min-w-full flex flex-wrap lg:flex-no-wrap app min-h-screen h-full"
    :class="{ night: nightMode, day: !nightMode }"
    id="app"
  >
    <nav
      :class="{ night: nightMode, day: !nightMode }"
      class="flex justify-around w-full md:h-16 h-12 sticky lg:w-auto lg:max-h-screen lg:h-auto text-green-500 rounded-md md:mb-2 lg:flex-col"
    >
      <!-- <a
            class="text-2xl p-1 md:text-4xl"
            href="#"
            @click.prevent="nightMode = !nightMode"
            ><i
              :class="{ 'fas fa-sun': nightMode, 'fas fa-moon': !nightMode }"
            ></i
          ></a> -->
      <router-link
        exact
        exact-active-class="active"
        tag="li"
        class="text-2xl p-1  md:text-4xl"
        to="/"
        ><i class="fas fa-home"></i
      ></router-link>
      <router-link
        exact-active-class="active"
        tag="li"
        title="Leave a message"
        class="text-2xl p-1  md:text-4xl"
        to="/contact"
        ><i class="fas fa-comment"></i
      ></router-link>
      <router-link
        exact
        exact-active-class="active"
        tag="li"
        title="See what I've built"
        class="text-2xl p-1  md:text-4xl"
        to="/portfolio"
        ><i class="fas fa-folder"></i
      ></router-link>
      <a
        target="_blank"
        class="text-2xl p-1  md:text-4xl"
        href="https://ng.linkedin.com/in/eke-diala-enyinnaya-a0906752"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        target="_blank"
        class="text-2xl p-1  md:text-4xl"
        href="https://twitter.com/DialaEke"
        ><i class="fab fa-twitter"></i
      ></a>
      <a
        target="_blank"
        class="text-2xl p-1  md:text-4xl"
        href="https://dev.to/dialaeke"
        ><i class="fab fa-dev"></i
      ></a>
      <a
        target="_blank"
        class="text-2xl p-1 md:text-4xl"
        href="https://github.com/ekediala"
        ><i class="fab fa-github"></i
      ></a>
    </nav>
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nightMode: true
    };
  }
};
</script>

<style>
.app {
  background-size: cover;
  background-position: bottom;
  color: goldenrod;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  border-bottom: 4px solid goldenrod;
}

nav li {
  list-style-type: none;
}

.view {
  background-color: inherit;
  color: inherit;
}

.day {
  background-image: linear-gradient(
      to left bottom,
      rgba(20, 4, 158, 0.6),
      rgba(4, 1, 51, 0.9)
    ),
    url('./assets/img/day-bg.jpg');
  color: darkmagenta;
}

.night {
  background-image: linear-gradient(
      to right bottom,
      rgba(59, 66, 66, 0.8),
      rgba(10, 27, 27, 0.8)
    ),
    url('./assets/img/bg-img.jpg');
  color: darkgoldenrod;
}
</style>

<template>
  <main
    class="w-screen min-w-screen flex flex-wrap lg:flex-no-wrap app min-h-screen h-full"
    :class="{ night: nightMode, day: !nightMode }"
    id="app"
  >
    <nav
      :class="{ night: nightMode, day: !nightMode }"
      class="flex justify-around w-full md:h-16 h-12 lg:w-20 lg:justify-between lg:p-4 lg:max-h-screen lg:h-auto text-green-500 rounded-md md:mb-2 lg:flex-col"
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
        class="text-2xl p-1 nav-link  md:text-4xl"
        title="Visit home page"
        to="/"
        ><i class="fas fa-home"></i
        ><span class="sr-only">Home</span></router-link
      >
      <router-link
        exact
        exact-active-class="active"
        tag="li"
        title="Leave a message"
        class="text-2xl p-1 nav-link md:text-4xl"
        to="/contact"
        ><i class="fas fa-comment"></i
        ><span class="sr-only">Contact</span></router-link
      >
      <router-link
        exact-active-class="active"
        exact
        tag="li"
        title="See what I've built"
        class="text-2xl p-1 nav-link md:text-4xl"
        to="/portfolio"
        ><i class="fas fa-folder"></i
        ><span class="sr-only">Portfolio</span></router-link
      >
      <a
        target="_blank"
        class="text-2xl p-1 nav-link md:text-4xl"
        href="https://ng.linkedin.com/in/eke-diala-enyinnaya-a0906752"
        rel="noopener noreferrer"
        title="Visit my LinkedIn profile"
        ><i class="fab fa-linkedin"></i><span class="sr-only">LinkedIn</span></a
      >
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-2xl p-1 nav-link md:text-4xl"
        href="https://twitter.com/DialaEke"
        title="Visit my Twitter handle"
        ><i class="fab fa-twitter"></i><span class="sr-only">Twitter</span></a
      >
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-2xl p-1 nav-link md:text-4xl"
        href="https://dev.to/dialaeke"
        title="Visit my dev.to page"
        ><i class="fab fa-dev"></i><span class="sr-only">Dev.to</span></a
      >
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-2xl p-1 nav-link md:text-4xl"
        title="My github profile"
        href="https://github.com/ekediala"
        ><i class="fab fa-github"></i><span class="sr-only">Github</span></a
      >
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
      nightMode: true,
      online: false
    };
  }
};
</script>

<style>
.app {
  background-size: contain;
  color: goldenrod;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

nav li.router-link-active,
nav li.router-link-exact-active {
  border-bottom: 4px solid goldenrod;
}

@media screen and (min-width: 1024px) {
  .nav-link:hover {
    transform: scale(1.1);
    transition: all 0.1s ease;
    box-shadow: 0 0 3pt 2pt darkcyan;
    border-bottom: 1px solid transparent;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
  }
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

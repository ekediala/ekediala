<template>
  <main class="h-full w-full min-w-screen flex m-auto">
    <div
      class="flex text-2xl mx-6 mt-5 md:mx-16 md:text-3xl lg:text-5xl flex-col justify-center"
    >
      <h1
        class="font-mono font-bold uppercase md:my-5 text-blue-600 lg:mx-64 mx-10"
      >
        projects i worked on
      </h1>
      <div class="flex lg:mx-24 flex-wrap">
        <project
          class="w-64 m-4"
          v-for="(project, key) in projects"
          :key="key"
          :project="project"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Project from '../components/Project.vue';
import { projects } from '../projects';
export default {
  name: 'Portfolio',
  components: { Project },
  data() {
    return {
      projects
    };
  }
};
</script>

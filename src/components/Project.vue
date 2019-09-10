<template>
  <div
    class="max-w-sm rounded font-sans font-light flex justify-center flex-col overflow-hidden shadow-lg"
  >
    <img
      class="px-6 py-4"
      :src="require('../assets/img/' + project.fileName)"
      :alt="project.alt"
    />
    <div class="px-6 py-4">
      <h3 class="font-bold text-gray-400 text-xl mb-1">
        <a
          :href="project.url"
          class="underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          >{{ project.title }}</a
        >
        <p class="text-base font-sans text-blue-100 font-light">
          {{ project.description }}
        </p>
      </h3>
    </div>
    <div class="px-6 py-4 flex flex-wrap">
      <span
        v-for="(skill, key) in project.stack"
        :key="key"
        class="m-1 rounded-sm border border-transparent text-sm text-gray-200 bg-gray-600"
        >{{ skill }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

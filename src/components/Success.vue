<template>
  <div>
    <div
      class="bg-teal-500 flex justify-between text-white font-bold rounded-t px-4 py-2"
    >
      Thank you !
      <i @click="$emit('hide')" class="fas fa-window-close text-gray-900"></i>
    </div>
    <div
      class="border border-t-0 border-teal-400 rounded-b bg-teal-100 px-4 py-3 text-teal-700"
    >
      <p>
        Received your message. Will be in touch shortly.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
};
</script>

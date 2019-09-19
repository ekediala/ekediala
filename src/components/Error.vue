<template>
  <div>
    <div class="bg-red-500 flex text-white justify-between font-bold rounded-t px-4 py-2">
      Error !
      <i @click="$emit('hide')" class="fas fa-window-close text-gray-900"></i>
    </div>
    <div
      class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
    >
      <p>
        Something went wrong. Please check your internet connection and try
        again.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

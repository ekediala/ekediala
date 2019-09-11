<template>
  <main class="h-screen max-h-screen w-full lg:ml-64 flex m-auto">
    <div class="max-w-md flex flex-col justify-center m-8 lg:m-16 md:m-32">
      <h3
        class="text-blue-200 font-semibold font-serif mb-4 text-3xl md:text-4xl"
      >
        Leave a message.
      </h3>
      <transition name="fade">
        <div class="mb-1" role="alert" v-if="sent">
          <success />
        </div>
      </transition>

      <transition name="fade">
        <div v-if="failed" class="mb-1" role="alert">
          <error />
        </div>
      </transition>
      <form class="shadow-md w-auto rounded">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="What can I call you?"
            v-model="name"
            required
            :disabled="sending"
            v-validate="'required'"
            name="name"
          />
          <small class="text-sm text-red-600">{{ errors.first('name') }}</small>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="your email address"
            required
            :disabled="sending"
            v-model="email"
            v-validate="'required|email'"
            name="email"
          />
          <small class="text-sm text-red-600">{{
            errors.first('email')
          }}</small>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="email"
            placeholder="Let's talk."
            :disabled="sending"
            cols="3"
            rows="3"
            v-model="message"
            name="message"
            v-validate="'required|min:7'"
          ></textarea>
          <small class="text-sm text-red-600">{{
            errors.first('message')
          }}</small>
        </div>
        <div class="flex items-center justify-center">
          <button
            @click.prevent="send"
            :disabled="sending"
            :class="{ blinking: sending }"
            class="bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {{ sending ? 'Contacting Eke' : 'Contact Eke' }}
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Success from '../components/Success.vue';
import Error from '../components/Error.vue';
export default {
  name: 'Contact',
  components: { Error, Success },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sending: false,
      sent: false,
      failed: false
    };
  },

  methods: {
    send() {
      this.$validator.validate().then((valid) => {
        if (!valid) {
          return false;
        }
        this.sending = true;
        const template_params = {
          reply_to: 'noreply',
          name: this.name,
          email: this.email,
          message: this.message
        };
        const service_id = 'default_service';
        const template_id = 'template_mGoqNyJv_clone';
        // eslint-disable-next-line
        emailjs
          .send(service_id, template_id, template_params)
          .then(() => {
            this.sending = false;
            this.sent = true;
            setTimeout(() => {
              this.sent = false;
            }, 15000);
          })
          .catch(() => {
            this.sending = false;
            this.failed = true;
            setTimeout(() => {
              this.failed = false;
            }, 15000);
          });
      });
    }
  }
};
</script>

<style scoped>
.blinking {
  animation: blink 1.5s ease infinite;
}

@keyframes blink {
  0% {
    transform: scale(0.8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

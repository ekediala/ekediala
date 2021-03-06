<template>
  <main
    class="h-auto max-w-lg flex md:mx-20 lg:mt-8 lg:mx-64 justify-center flex-col w-full"
  >
    <div class="flex justify-center">
      <h3
        class="text-blue-200 font-semibold font-serif mb-4 text-3xl md:text-4xl"
      >
        Leave a message.
      </h3>
    </div>

    <div v-if="info" class="flex px-10 py-4 justify-center">
      <transition name="fade">
        <div v-if="sent" class="mb-1" role="alert">
          <success @hide="hide('success')" />
        </div>
      </transition>

      <transition name="fade">
        <div v-if="failed" class="mb-1" role="alert">
          <error @hide="hide('error')" />
        </div>
      </transition>
    </div>

    <div class="flex px-10 justify-center">
      <form class="shadow-md md:w-screen rounded">
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
            cols="8"
            rows="5"
            v-model="message"
            name="message"
            v-validate="'required|min:7'"
          ></textarea>
          <small class="text-sm text-red-600">{{
            errors.first('message')
          }}</small>
        </div>
        <div class="flex items-center justify-between">
          <button
            @click.prevent="send"
            :disabled="sending"
            class="bg-blue-700 hover:bg-blue-900 uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            id="sendButton"
          >
            <span class="text-xl mr-2 uppercase">{{
              sending ? 'Sending' : 'Send'
            }}</span>
            <i
              v-if="sending"
              :class="{ spinning: sending }"
              class="fas fa-comment text-xl"
            ></i>
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
      info: false,
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
            this.info = true;
            this.sent = true;
            this.$nextTick().then(() => {
              this.email = '';
              this.name = '';
              this.message = '';
            });
            setTimeout(() => {
              this.sent = false;
            }, 20000);
          })
          .catch(() => {
            this.sending = false;
            this.failed = true;
            this.info = true;
            setTimeout(() => {
              this.failed = false;
            }, 20000);
          })
          .finally(() => {
            setTimeout(() => {
              this.info = false;
            }, 20000);
          });
      });
    },

    hide(element) {
      this.info = false;
      if (element === 'error') {
        this.failed = false;
      } else {
        this.sent = false;
      }
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 480px) {
  form {
    width: 20rem;
  }
}

@media screen and (max-width: 400px) {
  form {
    width: 17rem;
  }
}

@media screen and (max-width: 320px) {
  form {
    width: 15rem;
  }
}
input,
textarea {
  color: black;
}

#sendButton:disabled {
  background-color: #2a4365;
}
.spinning {
  animation: spin 1.5s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(180deg);
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

<template>
  <!-- <div class="cover">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        > -->
  <v-card
    v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-card-title class="text-h4">
      LogIn
    </v-card-title>
    <!-- <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            > -->
    <form
      class="my-8 py-8"
      @submit.prevent="submit"
    >
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="password"
        rules="required"
      >
        <v-text-field
          v-model="password"
          color="#000000"
          class="mx-12 text-dark"
          type="password"

          :error-messages="errors"
          label="Password"
          required
        />
      </validation-provider>
    </form>
    <v-card-subtitle>
      هل نسيت كلمة المرور؟اضغط هنا
    </v-card-subtitle>
    <!-- </validation-observer> -->
  </v-card>
  <!-- </v-col>
      </v-row>
    </v-container>
  </div> -->
</template>
<script>
import { required, email } from '@vee-validate/rules'
import { extend, ValidationProvider, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('email', {
  ...email,
  message: 'Email must be valid',
})
export default {
  components: {
    ValidationProvider,
    // ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',

  }),
}

</script>
<style>
/* .background{
  position: relative;

    transform: translate(-50%,-50%);

    top:50%;
    left:50%;
    opacity: 0.9;

} */
</style>

<template>
  <div class="container">
    <section class="register">
      <h3 class="register__h3 a-font_h3">Sign Up</h3>
      <p class="register__link">
        <router-link :to="{ name: 'login' }" class="a-font_m bold">Зарегестрируйтесь</router-link>
      </p>
      VALIDATOR ERRORS
      <form class="register__form" @submit.prevent="onSubmit">
        <fieldset class="register__form-group">
          <AInput label="ФИО" type="text" placeholder="ФИО" inputHeight="35" v-model="value.name" />
          <p>{{ value.name }}</p>
        </fieldset>
        <fieldset class="register__form-group">
          <AInput
            label="Email"
            placeholder="Email"
            inputHeight="35"
            v-model="value.email"
          />
          <p>{{ value.email }}</p>
        </fieldset>
        <fieldset class="register__form-group">
          <AInput label="Password" type="password" placeholder="Password" inputHeight="35" v-model="value.pass" />
          <p>{{ value.pass }}</p>
        </fieldset>
        <AButton
          label="Отправить"
          size="small"
          bgColor="secondary"
          btnWidth="150"
          btnHeight="40"
          class="button"
          @click="onSubmit"
          :disabled="isSubmitting"
        />
        <pre>{{ isSubmitting }}</pre>
      </form>
    </section>
  </div>
</template>

<script>
import AButton from '@/components/_ui/a_button/a_button';
import AInput from '@/components/_ui/a_input/a_input';
import './register.scss';

export default {
  name: 'MvuRegister',
  components: { AInput, AButton },
  props: {},
  data: () => ({
    value: [{ name: '' }, { email: '' }, { pass: '' }],
  }),
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
  },
  methods: {
    onSubmit() {
      console.log('subbmitted form');
      this.$store.commit('registerStart')
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0 auto;
}
</style>

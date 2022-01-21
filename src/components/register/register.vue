<template>
  <div class="container">
    <section class="register">
      <h3 class="register__h3 a-font_h3">Sign Up</h3>
      <p class="register__link">
        <router-link :to="{ name: 'login' }" class="a-font_m bold">Зарегестрируйтесь</router-link>
      </p>
      <div class="register__errors">
        <MvalidationErrors v-if="validationErrors" :validationErrors="validationErrors" />
      </div>
      <form class="register__form" @submit.prevent="onSubmit">
        <fieldset class="register__form-group">
          <AInput label="ФИО" type="text" placeholder="ФИО" inputHeight="35" v-model="value.name" />
        </fieldset>
        <fieldset class="register__form-group">
          <AInput
            label="Email"
            placeholder="Email"
            inputHeight="35"
            v-model="value.email"
          />
        </fieldset>
        <fieldset class="register__form-group">
          <AInput label="Password" type="password" placeholder="Password" inputHeight="35" v-model="value.pass" />
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
import MvalidationErrors from '@/components/_ui/m_validationErrors/m_validationErrors';
import './register.scss';

export default {
  name: 'MvuRegister',
  components: { AInput, AButton, MvalidationErrors },
  props: {},
  data: () => ({
    value: [{ name: '' }, { email: '' }, { pass: '' }],
  }),
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors;
    },
  },
  methods: {
    onSubmit() {
      console.log('subbmitted form');
      this.$store.dispatch('register',
        {email: this.value.email, username: this.value.name, password: this.value.pass})
      .then(user => {
        console.log('successfully', user);
        this.$router.push({name: 'home'})
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0 auto;
}
</style>

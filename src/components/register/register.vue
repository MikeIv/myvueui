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
          <AInput label="ФИО" placeholder="test" inputHeight="30" v-model="value" />
          <p>{{ value }}</p>
        </fieldset>
      </form>
    </section>
  </div>
</template>

<script>
import AInput from '@/components/_ui/A-input/A-input';
import './register.scss';

export default {
  name: 'register',
  components: { AInput },
  props: {},
  data: () => ({
    value: '',
  }),
};
</script>

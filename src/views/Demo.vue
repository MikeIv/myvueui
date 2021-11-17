<template>
  <div class="page">
    <section class="demo">
      <h1 class="demo__h1 a-font_h1">Компоненты</h1>
      <register/>
    </section>
  </div>
</template>

<script>
import Register from "@/components/register/register.vue"
import '@/assets/styles/pages/_demo.scss';

export default {
  name: 'Demo',
  components: { Register },
  data: () => ({}),
};
</script>

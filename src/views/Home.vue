<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MTest />
  </div>
</template>

<script>
import MTest from '@/components/m_test/m_test'

export default {
  name: "Home",
  components: {
    MTest,
  },
};
</script>

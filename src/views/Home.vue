<template>
  <div class="home page">
    <MTest />
    <AButton label="Тест" />
  </div>
</template>

<script>
import MTest from '@/components/m_test/m_test';
import AButton from '@/components/_ui/A-button/A-button';

export default {
  name: 'Home',
  components: {
    MTest,
    AButton,
  },
};
</script>

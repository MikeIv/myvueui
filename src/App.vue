<template>
  <div id="app">
    <header class="header">
      <img alt="Vue logo" src="@/assets/logo.png" class="header__logo" />
      <div class="header__nav">
        <router-link to="/" class="header__nav-item">{{ mainPage }}</router-link>
        <router-link to="/other" class="header__nav-item">{{ secondPage }}</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    mainPage: 'Base',
    secondPage: 'Разное',
  }),
};
</script>

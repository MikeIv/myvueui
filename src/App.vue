<template>
  <div id="app">
    <header class="header">
      <img alt="Vue logo" src="@/assets/logo.png" class="header__logo" />
      <nav class="header__nav" v-for="link in links" :key="link.title">
        <router-link :to="link.url" :title="link.title" class="header__nav-item">{{ link.title }}</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    mainPage: 'Base',
    secondPage: 'Разное',
    links: [
      { title: 'Base', url: '/' },
      { title: 'Demo', url: '/demo' },
      { title: 'Atoms', url: '/atoms' },
    ],
  }),
};
</script>

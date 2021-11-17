<template>
  <div class="page">
    <section class="atoms">
      <h1 class="v-hidden">Базовые компоненты</h1>
      <ul class="atoms__list">
        <li class="atoms__item">
          <div class="atoms__info">
            <div class="atoms__info-cel" v-for="prop in btnProps" :key="prop.title">
              <p class="atoms__info-title a-font_l bold">{{ prop.title }}:</p>
              <span class="atoms__info-description a-font_m bold">{{ prop.description }}</span>
            </div>
          </div>
          <AButton label="Кнопка" size="small" bgColor="secondary" btnWidth="150" btnHeight="40" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import AButton from '@/components/_ui/A-button/A-button';
import '@/assets/styles/pages/_atoms.scss';

export default {
  name: 'Atoms',
  components: { AButton },
  data: () => ({
    btnProps: [
      { title: 'label', description: 'Название кнопки' },
      { title: 'size', description: 'large, medium, small' },
      { title: 'bgColor', description: 'accent, primary, secondary' },
      { title: 'btnWidth', description: 'произвольная ширина (100) в px' },
      { title: 'btnHeight', description: 'произвольная высота (40) в px' },
      { title: 'disabled', description: 'disabled – неактивное состояние' },
    ],
  }),
};
</script>

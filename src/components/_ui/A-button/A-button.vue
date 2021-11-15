<template>
  <button :class="classes" :disabled="disabled" @click.prevent.stop="onClickBtn">
    <i :class="icons"></i>
    <span class="a-button__label">{{ label }}</span>
  </button>
</template>

<script>
import './A-button.scss';

export default {
  name: 'A-button',
  props: {
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      validator(value) {
        return ['xlarge', 'large', 'medium', 'small'].includes(value);
      },
    },
    bgColor: {
      type: String,
      validator(value) {
        return (
          ['accent', 'primary', 'secondary', 'ghost-accept', 'ghost-primary', 'none', 'custom'].indexOf(value) !== -1
        );
      },
    },
  },
  data: () => ({
  }),

  methods: {
    onClickBtn() {
      this.$emit('click');
    },
  },
  computed: {
    classes() {
      return {
        'a-button': true,
        [`a-button--${this.size || 'medium'}`]: true,
        [`a-button--${this.bgColor}`]: true,
        [`a-button--${this.addIcon}`]: true,
        [`a-button--${this.onlyIcon}`]: true,
      };
    },
    icons() {
      return {
        'a-button__icon': true,
        [`a-button__icon--${this.addIcon}`]: true,
        [`a-button__icon--${this.iconPosition}`]: true,
        [`${this.iconType}`]: true,
      };
    },
  },
};
</script>

<style lang="scss"></style>

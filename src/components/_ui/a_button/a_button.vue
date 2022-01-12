<template>
  <button
    :class="classes"
    :disabled="disabled"
    :style="{ width: btnWidth + 'px', height: btnHeight + 'px' }"
    @click.prevent.stop="onClickBtn"
  >
    <i :class="icons"></i>
    <span class="a-button__label">{{ label }}</span>
  </button>
</template>

<script>
import './a_button.scss';

export default {
  name: 'a-button',
  props: {
    label: {
      type: String,
    },
    size: {
      type: String,
      validator(value) {
        return ['large', 'medium', 'small'].includes(value);
      },
    },
    bgColor: {
      type: String,
      validator(value) {
        return ['accent', 'primary', 'secondary'].includes(value);
      },
    },
    btnWidth: {
      type: String,
    },
    btnHeight: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
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

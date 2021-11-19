<template>
  <div class="input">
    <label v-if="label" :class="typelabel">{{ label }}</label>
    <div class="a-input__row">
      <input
        :type="type"
        ref="a-input"
        class="a-input"
        :class="classes"
        :placeholder="placeholder"
        :style="{ height: inputHeight + 'px' }"
        :disabled="disabled"
        v-bind="$attrs"
        :value="value"
        v-on="inputListeners"
      />
      <i v-if="icons && !touched && !valueThis" class="a-input__icon" :class="icons"></i>
      <i
        v-if="clearable && touched && !!valueThis"
        class="a-input__icon si-closeThin"
        @mousedown.prevent
        @click="clearableHandler"
      />
    </div>
    <span v-if="subscription" class="a-input__subscription" :class="typesubs">{{ subscription }}</span>
  </div>
</template>

<script>
import './A-input.scss';

export default {
  name: 'a-input',
  data: () => ({
    touched: false,
  }),
  props: {
    value: {
      type: Object,
    },
    label: {
      type: String,
    },
    inputHeight: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    subscription: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    labelIcon: {
      type: String,
    },
    icons: {
      type: String,
    },
    clearable: {
      type: Boolean,
    },
    type: {
      type: String,
    },

    size: {
      type: String,
      validator(value) {
        return ['large', 'medium', 'small'].includes(value);
      },
    },
    condition: {
      type: String,
      validator(value) {
        return ['base', 'focus', 'error'].includes(value);
      },
    },
  },

  computed: {
    inputListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit('input', event.target.value);
        },
      });
    },
    classes() {
      return {
        [`a-input--${this.size || 'large'}`]: true,
        [`a-input--${this.condition || 'base'}`]: true,
      };
    },
    typelabel() {
      return {
        'a-input__label': true,
        [`a-input__label--${this.size || 'large'}`]: true,
        [`${this.labelIcon}`]: this.labelIcon,
        [`a-input__label--${this.condition}`]: this.condition,
      };
    },
    typesubs() {
      return {
        'a-input__subscription': true,
        [`a-input__subscription--${this.size || 'large'}`]: true,
      };
    },
  },
  methods: {},
};
</script>

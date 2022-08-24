<template>
  <div class="numpad" :style="variables">
    <button class="number" v-for="button in buttons" :key="button.value">
      {{ /^\d+$/.test(button.value) ? button.value : '' }}
      <Icon :name="button.value" />
    </button>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import Icon from '@/components/Icon.vue'
import { cssVariables } from '@/types'

export default {
  name: 'Numpad',
  data() {
    return {
      buttons: [
        { value: 'ac' },
        { value: 'invert' },
        { value: '%' },
        { value: '/' },
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '*' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '-' },
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '+' },
        { value: 'backspace' },
        { value: '0' },
        { value: '.' },
        { value: '=' }
      ]
    }
  },
  computed: {
    ...mapGetters(['theme']),
    variables(): cssVariables {
      return {
        '--blocksBackgroundColor': this.theme.blocksBackgroundColor,
        '--buttonBackgroundColor': this.theme.buttonBackgroundColor,
        '--hoverButton': this.theme.hoverButton,
        '--numberColor': this.theme.numberColor
      }
    }
  },
  components: { Icon }
}
</script>

<style lang="scss" scoped>
.numpad {
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  border-radius: 40px 40px 25px 25px;
  padding: 45px 25px;
  background-color: var(--blocksBackgroundColor);
}

button {
  transition: all 0.3s ease;
  border: 0px;
  border-radius: 5px;
  padding: 0px;
  background-color: var(--buttonBackgroundColor);
  &:hover {
    box-shadow: 0px 4px 4px var(--hoverButton);
    cursor: pointer;
  }
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--numberColor);
}

#point {
  fill: var(--numberColor);
  transition: all 0.3s ease;
}

#backspace {
  stroke: var(--numberColor);
  transition: all 0.3s ease;
}

svg {
  max-width: 40px;
  max-height: 40px;
}
</style>

<template>
  <div class="numpad" :style="variables">
    <button
      class="numpad__button"
      v-for="button in buttons"
      :key="button.value"
      :data-testid="button.value"
      @click="button.onClick"
    >
      {{ /^\d+$/.test(button.value) ? button.value : '' }}
      <Icon :name="button.value" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useExpressionStore } from '@/stores/expression'
import { useThemeStore } from '@/stores/theme'
import { cssVariables } from '@/types'

const expressionStore = useExpressionStore()
const themeStore = useThemeStore()

const variables = computed(
  (): cssVariables => ({
    '--blocksBackgroundColor': themeStore.theme.blocksBackgroundColor,
    '--buttonBackgroundColor': themeStore.theme.buttonBackgroundColor,
    '--hoverButton': themeStore.theme.hoverButton,
    '--numberColor': themeStore.theme.numberColor
  })
)

const numberClickHandler = (event: MouseEvent): void => {
  event.preventDefault()

  const innerHTML: string = (event.target as HTMLTextAreaElement).innerHTML
  const strEnteredNumber = String(innerHTML.match(/^\d+/))

  expressionStore.numberClickHandler(strEnteredNumber)
}

const buttons = [
  { value: 'ac', onClick: expressionStore.acClickHandler },
  { value: 'inverse', onClick: expressionStore.invertClickHandler },
  { value: '%', onClick: expressionStore.percentClickHandler },
  { value: '/', onClick: expressionStore.divisionClickHandler },
  { value: '7', onClick: numberClickHandler },
  { value: '8', onClick: numberClickHandler },
  { value: '9', onClick: numberClickHandler },
  { value: '*', onClick: expressionStore.multiplicationClickHandler },
  { value: '4', onClick: numberClickHandler },
  { value: '5', onClick: numberClickHandler },
  { value: '6', onClick: numberClickHandler },
  { value: '-', onClick: expressionStore.minusClickHandler },
  { value: '1', onClick: numberClickHandler },
  { value: '2', onClick: numberClickHandler },
  { value: '3', onClick: numberClickHandler },
  { value: '+', onClick: expressionStore.plusClickHandler },
  { value: 'backspace', onClick: expressionStore.backspaceClickHandler },
  { value: '0', onClick: numberClickHandler },
  { value: '.', onClick: expressionStore.pointClickHandler },
  { value: '=', onClick: expressionStore.equalsClickHandler }
]
</script>

<script lang="ts">
import Icon from '@/components/Icon.vue'

export default {
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

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    padding: 0;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--numberColor);
    background-color: var(--buttonBackgroundColor);
    &:hover {
      box-shadow: 0 4px 4px var(--hoverButton);
      cursor: pointer;
    }
  }
}

#point {
  transition: all 0.3s ease;
  fill: var(--numberColor);
}

#backspace {
  transition: all 0.3s ease;
  stroke: var(--numberColor);
}

@media (min-width: 1600px) {
  .numpad {
    &__button {
      border-radius: 10px;
      font-size: 16px;
    }
  }
}

@media (min-width: 1900px) {
  .numpad {
    grid-gap: 20px;
    border-radius: 60px 60px 50px 50px;

    &__button {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      font-size: 25px;
    }
  }
}
</style>

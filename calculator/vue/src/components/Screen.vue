<template>
  <div class="screen" :style="variables">
    <div class="problem">
      {{ expressionStore.expression.firstNumber }}
      <Icon :name="expressionStore.expression.sign" />
      {{ expressionStore.expression.secondNumber }}
    </div>
    <div class="solution">{{ solution(expressionStore.expression) }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { solution } from '@/helpers/solution'
import { useExpressionStore } from '@/stores/expression'
import { useThemeStore } from '@/stores/theme'
import { cssVariables } from '@/types'

const themeStore = useThemeStore()
const expressionStore = useExpressionStore()

const variables = computed(
  (): cssVariables => ({
    '--numberColor': themeStore.theme.numberColor
  })
)
</script>

<script lang="ts">
import Icon from '@/components/Icon.vue'

export default {
  components: { Icon }
}
</script>

<style lang="scss" scoped>
.screen {
  padding: 0 25px 25px 25px;
}

.problem {
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: auto;
  transition: all 0.3s ease;
  margin: 0 0 5px 0;
  max-width: 186px;
  height: 25px;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--numberColor);
}

.solution {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  overflow-x: scroll;
  transition: all 0.3s ease;
  max-width: 186px;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--numberColor);
  &::-webkit-scrollbar {
    width: 368px;
    height: 2.5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--numberColor);
  }
}

svg {
  width: 25px;
  height: 25px;
}
</style>

<template>
  <div class="screen" :style="variables">
    <div class="screen__problem" data-testid="problem">
      <span data-testid="strFirstNumber">{{ expressionStore.expression.strFirstNumber }}</span>
      <Icon class="screen__icon" :name="expressionStore.expression.sign" />
      <span data-testid="strSecondNumber">{{ expressionStore.expression.strSecondNumber }}</span>
    </div>
    <div class="screen__solution" data-testid="solution">
      {{ expressionStore.solution }}
    </div>
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
    '--textColor': themeStore.theme.textColor
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

  &__problem {
    display: flex;
    justify-content: right;
    align-items: center;
    overflow: auto;
    transition: all 0.3s ease;
    margin-bottom: 5px;
    max-width: 186px;
    height: 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--textColor);
  }

  &__solution {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    overflow-x: scroll;
    transition: all 0.3s ease;
    max-width: 186px;
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: var(--textColor);

    &::-webkit-scrollbar {
      width: 368px;
      height: 2.5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--textColor);
    }
  }

  &__icon {
    width: 25px;
    height: 25px;
  }
}

@media (min-width: 1900px) {
  .screen {
    &__problem {
      margin-bottom: 10px;
      max-width: 340px;
      height: 50px;
      font-size: 40px;
    }

    &__solution {
      max-width: 340px;
      font-size: 75px;

      &::-webkit-scrollbar {
        height: 5px;
      }
    }

    &__icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

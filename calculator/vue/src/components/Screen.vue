<template>
  <div class="screen" :style="variables">
    <div class="problem">
      {{ expression.firstNumber }}
      <Icon :name="expression.sign" />
      {{ expression.secondNumber }}
    </div>
    <div class="solution">{{ solution(expression) }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import Icon from '@/components/Icon.vue'
import { solution } from '@/helpers/solution'
import { cssVariables, Expression } from '@/types'

export default {
  name: 'Screen',
  components: { Icon },
  computed: {
    ...mapGetters(['theme', 'expression']),
    variables(): cssVariables {
      return {
        '--numberColor': this.theme.numberColor
      }
    }
  },
  methods: {
    solution(expression: Expression) {
      return solution(expression)
    }
  }
}
</script>

<style lang="scss" scoped>
.screen {
  padding: 0px 25px 25px 25px;
}

.problem {
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: auto;
  transition: all 0.3s ease;
  margin: 0px 0px 5px 0px;
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

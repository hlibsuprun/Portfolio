<template>
  <div class="numpad" :style="variables">
    <button
      class="number"
      @click="button.onClick"
      v-for="button in buttons"
      :key="button.value"
    >
      {{ /^\d+$/.test(button.value) ? button.value : '' }}
      <Icon :name="button.value" />
    </button>
  </div>
</template>

<script lang="ts">
import { ActionMethod, mapActions, mapGetters } from 'vuex'

import Icon from '@/components/Icon.vue'
import { cssVariables } from '@/types/cssVariables'

type Data = {
  buttons: {
    value: string
    onClick: ActionMethod
  }[]
}

export default {
  name: 'Numpad',
  components: { Icon },
  data(): Data {
    return {
      buttons: [
        { value: 'ac', onClick: (this as any).getters.acClickHandler },
        { value: 'invert', onClick: (this as any).invertClickHandler },
        { value: '%', onClick: (this as any).percentClickHandler },
        { value: '/', onClick: (this as any).divisionClickHandler },
        { value: '7', onClick: (this as any).number },
        { value: '8', onClick: (this as any).number },
        { value: '9', onClick: (this as any).number },
        { value: '*', onClick: (this as any).multiplicationClickHandler },
        { value: '4', onClick: (this as any).number },
        { value: '5', onClick: (this as any).number },
        { value: '6', onClick: (this as any).number },
        { value: '-', onClick: (this as any).minusClickHandler },
        { value: '1', onClick: (this as any).number },
        { value: '2', onClick: (this as any).number },
        { value: '3', onClick: (this as any).number },
        { value: '+', onClick: (this as any).plusClickHandler },
        { value: 'backspace', onClick: (this as any).backspaceClickHandler },
        { value: '0', onClick: (this as any).number },
        { value: '.', onClick: (this as any).pointClickHandler },
        { value: '=', onClick: (this as any).equalsClickHandler }
      ]
    }
  },
  computed: {
    ...mapGetters(['theme']),
    variables(): cssVariables {
      return {
        '--blocksBackgroundColor': (this as any).theme.blocksBackgroundColor,
        '--buttonBackgroundColor': (this as any).theme.buttonBackgroundColor,
        '--hoverButton': (this as any).theme.hoverButton,
        '--numberColor': (this as any).theme.numberColor
      }
    }
  },
  methods: {
    ...mapActions([
      'acClickHandler',
      'backspaceClickHandler',
      'divisionClickHandler',
      'equalsClickHandler',
      'invertClickHandler',
      'minusClickHandler',
      'multiplicationClickHandler',
      'numberClickHandler',
      'percentClickHandler',
      'plusClickHandler',
      'pointClickHandler'
    ]),
    number(event: MouseEvent) {
      event.preventDefault()

      const innerHTML = (event.target as HTMLTextAreaElement).innerHTML
      const number = innerHTML.match(/^\d/)

      this.numberClickHandler(number)
    }
  }
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
</style>

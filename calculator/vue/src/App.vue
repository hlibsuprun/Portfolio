<template>
  <div class="container" :style="variables">
    <ThemeSwitcher />
    <Screen />
    <Numpad />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import Numpad from '@/components/Numpad.vue'
import Screen from '@/components/Screen.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

import { cssVariables } from './types/cssVariables'

export default {
  name: 'App',
  components: { ThemeSwitcher, Screen, Numpad },
  computed: {
    ...mapGetters(['theme']),
    variables(): cssVariables {
      return {
        '--containerBackgroundColor': (this as any).theme
          .containerBackgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  user-select: none;
  transition: all 0.3s ease;
  border-radius: 25px;
  padding: 30px 0px 0px 0px;
  background-color: var(--containerBackgroundColor);
}
</style>

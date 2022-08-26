<template>
  <div class="container" :style="variables">
    <ThemeSwitcher />
    <Screen />
    <Numpad />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useThemeStore } from '@/stores/theme'
import { cssVariables } from '@/types'

const themeStore = useThemeStore()

const variables = computed(
  (): cssVariables => ({
    '--containerBackgroundColor': themeStore.theme.containerBackgroundColor
  })
)
</script>

<script lang="ts">
import Numpad from '@/components/Numpad.vue'
import Screen from '@/components/Screen.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  components: { ThemeSwitcher, Screen, Numpad }
}
</script>

<style lang="scss" scoped>
.container {
  user-select: none;
  transition: all 0.3s ease;
  border-radius: 25px;
  padding: 30px 0 0 0;
  background-color: var(--containerBackgroundColor);
}
</style>

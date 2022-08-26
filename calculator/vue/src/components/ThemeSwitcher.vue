<template>
  <div :style="variables">
    <button @click="themeStore.toggleLightTheme">
      <Icon name="light" />
    </button>
    <button @click="themeStore.toggleDarkTheme">
      <Icon name="dark" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useThemeStore } from '@/stores/theme'
import { cssVariables } from '@/types'

const themeStore = useThemeStore()

const variables = computed(
  (): cssVariables => ({
    '--blocksBackgroundColor': themeStore.theme.blocksBackgroundColor,
    '--hoverTheme': themeStore.theme.hoverTheme,
    '--lightTheme': themeStore.theme.lightTheme,
    '--darkTheme': themeStore.theme.darkTheme
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
div {
  transition: all 0.3s ease;
  margin: 0 auto 10vh auto;
  border-radius: 10px;
  width: fit-content;
  background-color: var(--blocksBackgroundColor);
}

button {
  transition: all 0.3s ease;
  border: 0;
  padding: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
}

svg {
  transition: all 0.3s ease;
  min-width: 45px;
  min-height: 35px;
}

#light {
  stroke: var(--lightTheme);
  &:hover {
    stroke: var(--hoverTheme);
  }
}
#dark {
  fill: var(--darkTheme);
  &:hover {
    fill: var(--hoverTheme);
  }
}
</style>

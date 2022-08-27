<template>
  <div class="theme-switcher" :style="variables">
    <button class="theme-switcher__button" @click="themeStore.toggleLightTheme">
      <Icon class="theme-switcher__icon" name="light" />
    </button>
    <button class="theme-switcher__button" @click="themeStore.toggleDarkTheme">
      <Icon class="theme-switcher__icon" name="dark" />
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
.theme-switcher {
  transition: all 0.3s ease;
  margin: 0 auto 10vh auto;
  border-radius: 10px;
  width: fit-content;
  background-color: var(--blocksBackgroundColor);

  &__button {
    transition: all 0.3s ease;
    border: 0;
    padding: 0;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }

  &__icon {
    transition: all 0.3s ease;
    min-width: 45px;
    min-height: 35px;
  }
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

@media (min-width: 1600px) {
  .theme-switcher {
    border-radius: 15px;
  }
}

@media (min-width: 1900px) {
  .theme-switcher {
    border-radius: 20px;

    &__icon {
      min-width: 75px;
      min-height: 65px;
    }
  }
}
</style>

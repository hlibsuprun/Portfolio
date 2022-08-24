<template>
  <div :style="variables">
    <button @click="toggleLightTheme">
      <Icon name="light" />
    </button>
    <button @click="toggleDarkTheme">
      <Icon name="dark" />
    </button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'

import Icon from '@/components/Icon.vue'
import { cssVariables } from '@/types'

export default {
  name: 'ThemeSwitcher',
  components: { Icon },
  computed: {
    ...mapGetters(['theme']),
    variables(): cssVariables {
      return {
        '--blocksBackgroundColor': this.theme.blocksBackgroundColor,
        '--hoverTheme': this.theme.hoverTheme,
        '--lightTheme': this.theme.lightTheme,
        '--darkTheme': this.theme.darkTheme
      }
    }
  },
  methods: {
    ...mapActions(['toggleDarkTheme', 'toggleLightTheme'])
  }
}
</script>

<style lang="scss" scoped>
div {
  transition: all 0.3s ease;
  margin: 0px auto 10vh auto;
  border-radius: 10px;
  width: fit-content;
  background-color: var(--blocksBackgroundColor);
}

button {
  transition: all 0.3s ease;
  border: 0px;
  padding: 0px;
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

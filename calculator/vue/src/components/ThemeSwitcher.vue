<template>
  <div :style="variables">
    <button>
      <Icon name="light" @click="toggleLightTheme" />
    </button>
    <button>
      <Icon name="dark" @click="toggleDarkTheme" />
    </button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'

import Icon from './Icon.vue'

type Vriables = {
  '--blocksBackgroundColor': string
  '--hoverTheme': string
  '--lightTheme': string
  '--darkTheme': string
}

export default {
  name: 'ThemeSwitcher',
  components: { Icon },
  computed: {
    ...mapGetters(['theme']),
    variables(): Vriables {
      return {
        '--blocksBackgroundColor':
          this.$store.getters.theme.blocksBackgroundColor,
        '--hoverTheme': this.$store.getters.theme.hoverTheme,
        '--lightTheme': this.$store.getters.theme.lightTheme,
        '--darkTheme': this.$store.getters.theme.darkTheme
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

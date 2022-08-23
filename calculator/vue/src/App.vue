<template>
  <div class="container" :style="variables">
    <ThemeSwitcher />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import ThemeSwitcher from './components/ThemeSwitcher.vue'

type Vriables = {
  '--containerBackgroundColor': string
}

export default {
  name: 'App',
  components: { ThemeSwitcher },
  computed: {
    ...mapGetters(['theme']),
    variables(): Vriables {
      return {
        '--containerBackgroundColor':
          this.$store.getters.theme.containerBackgroundColor
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
  background-color: var(--containerBackgroundColor);
}
</style>

<template>
  <div class="">
    <MenuList :items="products" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MenuList from '@/components/Menu/MenuList'

export default {
  components: {
    MenuList,
  },
  computed: {
    ...mapGetters('cms', ['products']),
  },
}
</script>

<style>
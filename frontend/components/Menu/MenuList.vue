<template>
  <section class="max-w-screen-xl mx-auto my-12">
    <transition-group tag="ul" name="grow" class="flex justify-between mx-4">
      <MenuListItem v-for="item in items" :key="item.id" :item="item" />
    </transition-group>
  </section>
</template>

<script>
import MenuListItem from '@/components/Menu/MenuListItem'

export default {
  name: 'MenuList',
  components: {
    MenuListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.grow-enter-active,
.grow-leave-active {
  transition: all 1s;
  /* transform: scale(1.5); */
}
.grow-enter,
.grow-leave-to {
  transform: scale(0);
  transform: translateY(30px);
}
</style>

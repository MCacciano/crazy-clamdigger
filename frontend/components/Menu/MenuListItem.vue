<template>
  <li
    :key="item.id"
    class="max-w-sm rounded overflow-hidden shadow-lg mb-5"
    @mouseenter="hoverActive = true"
    @mouseleave="hoverActive = false"
  >
    <nuxt-link :to="`/menu/${item.id}`" class="h-full grid grid-rows-3">
      <div class="row-span-2 overflow-hidden">
        <img
          :src="`http://localhost:1337${item.img.url}`"
          alt="food"
          :class="[
            hoverActive ? 'scale-105' : '',
            'transform transition-all ease-out duration-1000 w-full h-full',
          ]"
        />
      </div>
      <div class="row-span-1 p-4 flex flex-col justify-between">
        <h2 class="text-xl font-medium">{{ item.name }}</h2>
        <p class="font-light">{{ item.preview }}</p>
        <div class="text-lg font-semibold">
          <span>${{ item.price }}</span>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'MenuListItem',
  data: () => ({
    hoverActive: false,
  }),
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <nav
    class="flex justify-center h-16 border-b border-black bg-white sticky top-0"
    style="z-index: 9999;"
  >
    <div class="flex justify-between w-full bg-white">
      <div id="logo" class="flex justify-start flex-1">
        <img src="/logo.png" alt="" class="max-h-full" />
      </div>
      <AppSocials />
      <div id="nav-links" class="flex-1">
        <ul class="flex justify-end h-full">
          <li v-for="link in links" :key="link.name">
            <nuxt-link
              :to="link.to"
              class="flex items-center h-full px-4 font-light hover:bg-black hover:text-white"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AppSocials from '@/components/AppSocials'

export default {
  name: 'TheNavbar',
  components: {
    AppSocials,
  },
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'About Us',
        to: '/about-us',
      },
      {
        name: 'Menu',
        to: '/menu',
      },
    ],
  }),
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply font-medium bg-black text-white;
}
</style>

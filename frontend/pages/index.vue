<template>
  <div>
    <header
      class="relative flex justify-center items-center bg-no-repeat bg-cover bg-bottom"
      style="background-image: url('/hero-2.webp'); height: 70vh;"
    >
      <div
        class="absolute w-full h-full inset-0 bg-black opacity-50 z-10"
      ></div>
      <div class="p-6 bg-white z-20">
        <h1>"Food Taken Seriously"</h1>
        <p>
          The Crazy ClamDigger - Waterbury LLC Waterbury's #1 Seafood Restaurant
        </p>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cms', ['products']),
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

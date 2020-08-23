<template>
  <div id="socials" class="flex-1 flex justify-center items-center">
    <a
      v-for="social in socials"
      :key="social.id"
      :class="[`text-${social.color} px-2`]"
    >
      <font-awesome-icon
        :key="social.icon"
        :icon="['fab', social.icon]"
        class="text-2xl"
      />
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppSocials',
  computed: {
    ...mapGetters('cms', ['socials']),
  },
}
</script>

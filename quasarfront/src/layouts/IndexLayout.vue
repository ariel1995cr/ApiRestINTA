<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const linksList2 = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'Home',
    link: 'https://quasar.dev.ar'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      essentialLinks: linksList2,
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
})
</script>

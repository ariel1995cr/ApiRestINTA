<template>
  <q-layout view="lHh Lpr lFf" class="hide-scrollbar">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Datos de estaciones meteorologicas sin procesar
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            dense
            round
            icon="logout"
            aria-label="Cerrar sesi&oacute;n"
            @click="cerrarSesion"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-page-container hide-scrollbar">
      <router-view />
    </q-page-container>
    <q-footer class="q-pa-lg vertical-middle" style="height: 60px">
      <div class="row justify-center vertical-middle">
        Datos obtenidos de estaciones meteorologicas de IPA <img
        src="../assets/logoIPA.png"
        spinner-color="white"
        style="height: 30px; max-width: 50px"
      /> y de la Secretaria de Infraestructura y Politica Hidricas de la Nacion <img
        src="../assets/logo_politicas_hidricas.png"
        spinner-color="white"
        style="height: 30px; max-width: 300px"
      />
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Pagina home',
    icon: 'home',
    link: 'https://quasar.dev',
    to: '/admin',
    rol: ['administrador', 'usuario']
  },
  {
    title: 'Contacto',
    caption: 'Pagina contacto',
    icon: 'contact',
    link: 'https://quasar.dev',
    to: '/admin/contacto',
    rol: ['usuario']
  },
  {
    title: 'Usuarios',
    caption: 'Sección usuarios',
    icon: 'people',
    link: 'https://quasar.dev',
    to: '/admin/usuarios',
    rol: ['administrador']
  }
]

import { defineComponent, ref } from 'vue'
import { LocalStorage } from 'quasar'
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const cerrarSesion = () => {
      LocalStorage.remove('user')
      window.location.replace('/')
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      cerrarSesion
    }
  }
})
</script>

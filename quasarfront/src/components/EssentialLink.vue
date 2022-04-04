<template>
  <q-item
    clickable
    @click="this.$router.push(to)"
    v-if="rol.includes(user.rol)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { LocalStorage } from 'quasar'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    to: {
      type: String,
      default: ''
    },

    rol: {
      type: Array,
      default: function () { return [] }
    }
  },
  setup () {
    const user = ref({})
    user.value = JSON.parse(LocalStorage.getItem('user'))
    console.log(user)
    return {
      user
    }
  }
})
</script>

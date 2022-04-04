<template>
  <q-page>
    <div class="row justify-center q-pa-lg">
      <div class="col-6">
        <q-input v-model.trim="data.direccion" class="q-mb-md" outlined label="Dirección" :error="errores.hasOwnProperty('direccion')">
        <template v-slot:error>
          {{errores.direccion[0]}}
        </template>
        </q-input>
        <q-input
          v-model.trim="data.consulta"
          class="q-mb-md"
          outlined
          type="textarea"
          label="Consulta"
          :error="errores.hasOwnProperty('consulta')"
        >
          <template v-slot:error>
            {{errores.consulta[0]}}
          </template>
        </q-input>

        <vueRecaptcha siteKey="6LdkE94cAAAAAMXIDQI5lcXHGhII13pp2zUg-zLY"
                      class="q-mb-md"
                       size="normal"
                       theme="light"
                       :tabindex="0"
                       @verify="recaptchaVerified"
                       @expire="recaptchaExpired"
                       @fail="recaptchaFailed"
                       ref="vueRecaptcha">
        </vueRecaptcha>
        <span class="text-red-14" v-if="errores?.recaptcha">
          {{errores.recaptcha[0]}}
        </span>
        <q-btn @click="enviarConsulta" class="full-width" color="blue" label="Enviar consulta"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import vueRecaptcha from 'vue3-recaptcha2'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Contacto',
  components: {
    vueRecaptcha
  },
  setup () {
    const $q = useQuasar()
    const data = reactive({
      direccion: '',
      consulta: '',
      recaptcha: null
    })

    const errores = ref([])

    const enviarConsulta = () => {
      api.post('/api/v1/admin/consulta', {
        ...data
      }).then(resp => {
        $q.notify({
          message: 'Se ha realizado correctamente la consulta! En breve te contactaran.',
          type: 'positive'
        })
        data.direccion = ''
        data.consulta = ''
        data.recaptcha = null
        errores.value = []
      }).catch(err => {
        $q.notify({
          message: 'No se realizo la consulta reviste los problemas.',
          type: 'negative'
        })
        errores.value = err.response.data.errors
      })
    }

    const recaptchaVerified = (response) => {
      data.recaptcha = response
    }
    const recaptchaExpired = () => {
      this.$refs.vueRecaptcha.reset()
    }

    const recaptchaFailed = () => {
    }

    return {
      recaptchaVerified,
      recaptchaExpired,
      recaptchaFailed,
      enviarConsulta,
      data,
      errores
    }
  }
})
</script>

<style scoped>

</style>

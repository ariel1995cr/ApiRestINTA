<template>
  <div class="row justify-center fixed-center">
        <q-card dark bordered class="bg-grey-1 my-card col-12 q-mt-lg">
            <q-img
              src="../assets/logoIPA.png"
              :ratio="1"
              fit="contain"
              height="150px"
            />
            <q-card-section>
              <div class="text-h6 text-dark text-center">
                Ingresa datos para cambiar tu contraseña:
              </div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
          <q-input outlined :type="isPwd ? 'password' : 'text'" v-model="data.password" label="Contraseña" :error="errors.hasOwnProperty('password')">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            <template v-slot:error>
              {{errors.password[0]}}
            </template>
          </q-input>

          <q-input outlined type="password" v-model="data.password_confirmation" label="Confirmar contraseña" :error="errors.hasOwnProperty('password_confirmation')">
            <template v-slot:error>
              {{errors.password_confirmation[0]}}
            </template>
          </q-input>
              <q-btn @click="changePassword(data)" class="full-width q-mt-md" color="green" label="Cambiar contraseña" />
        </q-card-section>
          <q-img
            src="../assets/logo_politicas_hidricas.png"
            class="q-mx-sm"
            :ratio="1"
            fit="contain"
            height="100px"
          />
        </q-card>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { AuthServices } from 'src/services/authServices'

export default defineComponent({
  name: 'RecuperarContrasena',
  setup () {
    const route = useRoute()

    const { errors, changePassword } = AuthServices()

    const data = reactive({
      token: route.params.token,
      email: route.query.email,
      password: '',
      password_confirmation: ''
    })

    return {
      data,
      errors,
      changePassword,
      isPwd: ref(true)
    }
  }
})
</script>

<style scoped>

</style>

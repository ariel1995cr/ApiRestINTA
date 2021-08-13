<template>
  <div class="row justify-center fixed-center">
    <q-card dark bordered class="bg-grey-1 my-card col-12 q-mt-lg">
      <q-img
        src="../assets/logoIPA.png"
        :ratio="1"
      />
      <q-card-section>
        <div class="text-h6 text-dark text-center">
          Iniciar Sesi&oacute;n
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-input v-model="user.email" class="q-mb-md" outlined label="Email" />
        <q-input v-model="user.password" outlined label="Contraseña" :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn class="full-width q-mt-md" color="green" label="Ingresar" @click="login(user)" />
        <q-checkbox v-model="user.aceptoTerminos" class="text-dark" label="Acepto Terminos y condiciones" color="green" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { AuthServices } from '../services/authServices'

export default defineComponent({
  name: 'Login',
  setup () {
    const user = reactive({
      email: '',
      password: '',
      aceptoTerminos: false
    })

    const { data, login } = AuthServices()

    return {
      user,
      data,
      login,
      isPwd: ref(true)
    }
  }
})
</script>

<style scoped>

</style>

<template>
  <div class="row justify-center fixed-center">
    <q-card dark bordered class="bg-grey-1 my-card col-12 q-mt-lg" v-if="mode == 'login'">
      <q-img
        src="../assets/logoIPA.png"
        :ratio="1"
        fit="contain"
        height="150px"
      />
      <q-card-section>
        <div class="text-h6 text-dark text-center">
          Ingresa tus credenciales para acceder:
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
        <q-checkbox v-model="user.aceptoTerminos" class="text-dark" label="Acepto Terminos y condiciones" color="green" />
        <q-btn class="full-width q-mt-md" color="green" label="Ingresar" @click="login(user)" />
        <p class="text-dark q-mt-md" >Todavia no tenes tu usuario?</p>
        <q-btn class="full-width" color="blue" label="Registrarme" @click="registerPage" />
      </q-card-section>
    </q-card>
    <q-card dark bordered class="bg-grey-1 my-card col-12 q-mt-lg" v-else>
      <q-card-section>
        <q-btn icon="arrow_back" color="blue" label="Volver" @click="loginPage" />
        <div class="text-h6 text-dark text-center">
          Completa los campos para registrarte:
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-input outlined v-model="newUser.dni" label="DNI" :error="errors.hasOwnProperty('dni')">
          <template v-slot:error>
            {{errors.dni[0]}}
          </template>
        </q-input>
        <q-input outlined v-model="newUser.nombre" label="Nombre" :error="errors.hasOwnProperty('nombre')">
          <template v-slot:error>
            {{errors.nombre[0]}}
          </template>
        </q-input>
        <q-input outlined v-model="newUser.apellido" label="Apellido" :error="errors.hasOwnProperty('apellido')">
          <template v-slot:error>
            {{errors.apellido[0]}}
          </template>
        </q-input>
        <q-input outlined v-model="newUser.email" label="Email" :error="errors.hasOwnProperty('email')">
          <template v-slot:error>
            {{errors.email[0]}}
          </template>
        </q-input>
        <q-input outlined v-model="newUser.password" label="Contraseña" :error="errors.hasOwnProperty('password')">
          <template v-slot:error>
            {{errors.password[0]}}
          </template>
        </q-input>
        <q-input outlined v-model="newUser.password_confirmation" label="Confirmar contraseña" :error="errors.hasOwnProperty('password_confirmation')">
          <template v-slot:error>
            {{errors.password_confirmation[0]}}
          </template>
        </q-input>
        <q-btn @click="registrarUsuario(newUser)" class="full-width q-mt-sm" color="blue" label="Registrarme" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { AuthServices } from '../services/authServices'
import { UsuariosServices } from 'src/services/usuariosServices'

export default defineComponent({
  name: 'Login',
  setup () {
    const user = reactive({
      email: '',
      password: '',
      aceptoTerminos: false
    })

    const newUser = reactive({
      nombre: '',
      email: '',
      apellido: '',
      dni: '',
      password: '',
      password_confirmation: ''
    })

    const mode = ref('login')

    const registerPage = () => {
      mode.value = 'register'
    }

    const loginPage = () => {
      mode.value = 'login'
    }

    const limpiarData = () => {
      newUser.nombre = ''
      newUser.email = ''
      newUser.apellido = ''
      newUser.dni = ''
      newUser.password = ''
      newUser.password_confirmation = ''
    }

    const registrarUsuario = async () => {
      const response = await createUsuario(newUser)
      if (response) {
        loginPage()
        limpiarData()
      }
    }

    const { dataAuth, login } = AuthServices()

    const { errors, data, createUsuario } = UsuariosServices()

    return {
      user,
      dataAuth,
      login,
      mode,
      newUser,
      errors,
      data,
      createUsuario,
      registerPage,
      loginPage,
      isPwd: ref(true),
      registrarUsuario
    }
  }
})
</script>

<style scoped>

</style>

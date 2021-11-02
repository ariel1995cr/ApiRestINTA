import { api } from 'boot/axios'
import { ref } from 'vue'
import { useQuasar, LocalStorage } from 'quasar'
import { useRouter } from 'vue-router'

export const AuthServices = () => {
  const $q = useQuasar()
  const dataAuth = ref(null)

  const error = ref(false)
  const errors = ref([])

  const router = useRouter()

  const changePassword = async (data) => {
    await api.post('/api/v1/admin/changePassword', {
      ...data
    }).then(resp => {
      error.value = false
      errors.value = []
      $q.notify({
        message: resp.data.msg,
        type: 'positive'
      })
      router.push({ name: 'index' })
    }).catch(error => {
      error.value = true
      errors.value = error.response.data.errors
      $q.notify({
        type: 'negative',
        message: 'Revise los errores.'
      })
    })
  }

  function login (data) {
    if (!data.aceptoTerminos) {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Debe aceptar los terminos y condiciones.',
        icon: 'report_problem'
      })
    } else {
      api.post('/api/v1/admin/login', {
        ...data
      })
        .then(response => {
          api.defaults.headers.common.Authorization = 'Bearer ' + response.data.access_token
          LocalStorage.set('user', JSON.stringify(response.data.usuario))
          LocalStorage.set('access_token', `Bearer ${response.data.access_token}`)
          this.$router.push('/admin')
        })
        .catch(error => {
          console.log(error)
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.response.data.message,
            icon: 'report_problem'
          })
        })
    }
  }

  return {
    dataAuth,
    login,
    changePassword,
    errors
  }
}

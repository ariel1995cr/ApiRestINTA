import { api } from 'boot/axios'
import { ref } from 'vue'
import { useQuasar, LocalStorage } from 'quasar'

export const AuthServices = () => {
  const $q = useQuasar()
  const data = ref(null)

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
    data,
    login
  }
}

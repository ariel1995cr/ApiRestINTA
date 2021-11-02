import { api } from 'boot/axios'
import { ref } from 'vue'
import { Loading, QSpinnerGears, useQuasar } from 'quasar'

export const UsuariosServices = () => {
  const $q = useQuasar()
  const data = ref({})
  const error = ref(false)
  const errors = ref([])

  const recuperarContraseña = async (data) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    const response = await api.post('/api/v1/admin/resetPassword', {
      email: data
    }).then(resp => {
      error.value = false
      errors.value = []
      $q.notify({
        message: resp.data.msg,
        type: 'positive'
      })
      return true
    }).catch(error => {
      error.value = true
      errors.value = error.response.data
      $q.notify({
        type: 'negative',
        message: error.response.data.email[0]
      })
      return false
    })
    Loading.hide()
    return response
  }

  const createUsuario = async (data) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    const response = await api.post('/api/v1/admin/user', {
      ...data
    })
      .then(resp => {
        error.value = false
        errors.value = []
        $q.notify({
          message: resp.data.msg,
          type: 'positive'
        })
        return true
      })
      .catch(error => {
        error.value = true
        errors.value = error.response.data.errors
        $q.notify({
          type: 'negative',
          message: error.response.data.message
        })
        return false
      })
    Loading.hide()
    return response
  }

  const getUsuarios = async (props = null) => {
    let urlPage = ''
    if (props == null) {
      urlPage = '/api/v1/admin/user/'
    } else {
      urlPage = '/api/v1/admin/user/' + JSON.stringify(props)
    }
    await api.get(urlPage)
      .then(resp => {
        data.value.data = resp.data.data
        data.value.current_page = resp.data.current_page
        data.value.total = resp.data.total
        data.value.next_page = resp.data.next_page_url
        data.value.prev_page = resp.data.prev_page_url
        data.value.links = resp.data.links
      })
      .catch(error => {
        console.log(error)
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Contactese con el administrador.',
          icon: 'report_problem'
        })
        errors.value = error.response.data.errors
      })
  }

  const updateUsuario = async (data, userID) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    const response = await api.put('/api/v1/admin/user/' + userID, {
      ...data
    })
      .then(resp => {
        error.value = false
        errors.value = []
        $q.notify({
          message: resp.data.msg,
          type: 'positive'
        })
        return true
      })
      .catch(error => {
        error.value = true
        errors.value = error.response.data.errors
        $q.notify({
          type: 'negative',
          message: error.response.data.message
        })
        return false
      })
    Loading.hide()
    return response
  }

  const borrarUsuario = async (userID) => {
    const response = await api.delete('/api/v1/admin/user/' + userID)
      .then(resp => {
        error.value = false
        errors.value = []
        $q.notify({
          message: resp.data.msg,
          type: 'positive'
        })
        return true
      })
      .catch(error => {
        error.value = true
        errors.value = error.response.data.errors
        $q.notify({
          type: 'negative',
          message: error.response.data.message
        })
        return false
      })
    return response
  }

  return {
    createUsuario,
    data,
    errors,
    getUsuarios,
    updateUsuario,
    borrarUsuario,
    recuperarContraseña
  }
}

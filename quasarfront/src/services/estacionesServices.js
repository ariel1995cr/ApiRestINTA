import { api } from 'boot/axios'
import { ref } from 'vue'
import { Loading, QSpinnerGears, useQuasar } from 'quasar'

export const EstacionesServices = () => {
  const $q = useQuasar()
  const data = ref([])

  const getEstaciones = async () => {
    Loading.show({
      spinner: QSpinnerGears
    })
    await api.get('/api/v1/admin/estaciones')
      .then(response => {
        data.value = response.data
        data.value.forEach(el => {
          el.position = {
            lat: Number(el.Latitud),
            lng: Number(el.Longitud)
          }
        })
      })
      .catch(error => {
        console.log(error)
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Contactese con el administrador.',
          icon: 'report_problem'
        })
      })
    $q.loading.hide()
  }

  const getEstacion = async (id) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    await api.get('/api/v1/admin/estacion/' + id)
      .then(response => {
        data.value = response.data
      })
      .catch(error => {
        console.log(error)
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Contactese con el administrador.',
          icon: 'report_problem'
        })
      })
    Loading.hide()
  }

  return {
    data,
    getEstaciones,
    getEstacion
  }
}

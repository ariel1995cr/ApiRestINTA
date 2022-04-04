import { api } from 'boot/axios'
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export const medicionesServices = () => {
  const $q = useQuasar()
  const data = ref({
    columns: null,
    mediaTemperatura: '-',
    mediaViento: '-',
    mediaHumedad: '-',
    mediaPresionBarometrica: '-',
    mediaPrecipitacion: '-',
    precipitacion: []
  })

  const getHistoricoMediciones = async (idEstacion, idMedicion = null) => {
    await api.get(`/api/v1/admin/estacion/${idEstacion}/estadistica`)
      .then(response => {
        data.value.columns = response.data.data.columns
        data.value.mediaTemperatura = response.data.mediaTemperatura
        data.value.mediaViento = response.data.mediaViento
        data.value.mediaHumedad = response.data.mediaHumedad
        data.value.mediaPresionBarometrica = response.data.mediaPresionBarometrica
        data.value.mediaPrecipitacion = response.data.mediaPrecipitacion
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
  }

  return {
    data,
    getHistoricoMediciones
  }
}

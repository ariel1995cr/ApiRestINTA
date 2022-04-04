import { api } from 'boot/axios'
import { ref } from 'vue'
import { Loading, QSpinnerGears, useQuasar } from 'quasar'

export const ReportesServices = () => {
  const $q = useQuasar()
  const data = ref([])
  const errores = ref([])

  const getMedicionesPosibles = async (id) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    await api.get(`/api/v1/admin/estacion/${id}/medicionesPosibles`)
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
    $q.loading.hide()
  }

  const exportarPdf = async (id, fechaInicio, fechaFin, mediciones) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    await api.post('/api/v1/admin/estacion/exportar/pdf', {
      id,
      fechaInicio,
      fechaFin,
      mediciones
    }, {
      responseType: 'blob'
    })
      .then(response => {
        console.log(response.data)
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
        const blobUrl = window.URL.createObjectURL(pdfBlob)
        const link = document.createElement('a')
        link.href = blobUrl
        link.setAttribute('target', '_blank')
        link.click()
        link.remove()
        URL.revokeObjectURL(blobUrl)
      })
      .catch(async error => {
        let text = await error.response.data.text()
        text = JSON.parse(text)
        errores.value = text.errors
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Revise los errores.',
          icon: 'report_problem'
        })
      })
    $q.loading.hide()
  }

  return {
    data,
    getMedicionesPosibles,
    exportarPdf,
    errores
  }
}

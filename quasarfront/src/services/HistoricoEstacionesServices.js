import { ref } from 'vue'
import { api } from 'boot/axios'
import { Loading, QSpinnerGears, useQuasar } from 'quasar'

export const HistoricoEstacionServices = () => {
  const data = ref([])
  const error = ref(null)
  const $q = useQuasar()
  const columns = ref([])
  const pagination = ref({
    sortBy: 'updated_at',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10
  })

  const getHistoricoEstacion = async (id, props) => {
    Loading.show({
      spinner: QSpinnerGears
    })
    const url = '/api/v1/admin/estacion/' + id + '/historico/?props=' + JSON.stringify(props) + '&page=' + props.pagination.page
    await api.get(url)
      .then(resp => {
        columns.value = []
        columns.value.push({
          name: 'updated_at',
          label: 'Fecha medicion',
          align: 'left',
          sortable: true
        })
        resp.data.data[0].mediciones.forEach((el) => {
          columns.value.push({
            name: el.descripcion,
            label: el.descripcion,
            align: 'left',
            sortable: true
          })
        })
        data.value = resp.data
        pagination.value.rowsNumber = resp.data.total
        pagination.value.rowsPerPage = resp.data.per_page
        pagination.value.page = resp.data.current_page
      })
      .catch(err => {
        console.log(err)
        error.value = true
      })
    $q.loading.hide()
  }

  return {
    data,
    error,
    columns,
    getHistoricoEstacion,
    pagination
  }
}

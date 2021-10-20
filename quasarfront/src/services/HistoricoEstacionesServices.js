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
    await api.get(`/api/v1/admin/estacion/${id}/historico/?props=${JSON.stringify(props)}&page=${props.pagination.page}`)
      .then(resp => {
        columns.value = []
        columns.value.push({
          name: 'updated_at',
          field: 'updated_at',
          label: 'Fecha medicion',
          align: 'left',
          sortable: true
        })
        resp.data[0].mediciones.forEach((el, index) => {
          columns.value.push({
            name: el.descripcion,
            field: (row) => {
              if (row?.mediciones[index]?.valorMedicion) {
                return row?.mediciones[index]?.valorMedicion
              } else {
                return '-'
              }
            },
            label: el.descripcion,
            align: 'left',
            sortable: true
          })
        })
        data.value = resp.data
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

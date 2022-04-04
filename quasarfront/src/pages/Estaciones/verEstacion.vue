<template>
  <q-page padding style="padding-top: 300px">
  <div class="row col-6 mt-2 justify-start q-px-lg">
    <q-btn-toggle
      v-model="optionVisualizacion"
      spread
      class="my-custom-toggle"
      no-caps
      rounded
      unelevated
      toggle-color="primary"
      color="white"
      text-color="primary"
      :options="[
          {label: 'Tabla', value: 'tabla'},
          {label: 'Graficos', value: 'graficos'}
      ]"
    />
  </div>
      <div
        :visible="true"
        style="height: 600px; max-width: 100%;"
        v-if="optionVisualizacion == 'tabla'"
      >
      <q-table
        class="mb-4 q-mt-sm"
        title="Historico"
        :rows="dataHistorico"
        :columns="columns"
        row-key="id"
        :pagination="{
            rowsPerPage: 10,
          }"
        :loading="loading"
        binary-state-sort
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
      </div>
    <div class="col-12 q-mt-sm" v-else>
      <statics-dashboard :estacion="data.id" />
    </div>

  <q-dialog
    v-model="dialogEditar"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Editar coordenada</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <GMapMap
          class="bg-secondary p-2 border-2 rounded-2 col-12"
          :center="{lat: marcador.lat, lng: marcador.lng}"
          :zoom="6"
          map-type-id="terrain"
          style="height: 400px"
        >
          <GMapMarker
            :key="marcador.id"
            :position="marcador"
            :draggable="true"
            @dragend="cambiarPos"
          >
          </GMapMarker>
        </GMapMap>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Cerrar" v-close-popup />
        <q-btn flat color="primary" label="Guardar" @click="guardar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  </q-page>
  <q-page-sticky class="bg-white" expand position="top">
    <div class="row justify-start q-mx-lg">
      <div class="col-12 text-h4 text-center">
        {{ data.denominacion }}
      </div>
      <div class="col-12 col-md-6" style="height: 180px">
        <q-img
          :src="`/storage/estaciones/${data.id}.png`"
          :ratio="16/9"
          style="height: 180px"
        />
      </div>
      <div class="col-12 col-md-4">
        <q-list dense bordered padding class="rounded-borders scroll q-ml-sm" style="height: 180px">
          <q-item clickable v-ripple v-for="(medicion, index) in data.ultimaMedicion" :key="index">
            <q-item-section>
              <q-item-label>{{medicion.descripcion}}</q-item-label>
              <q-item-label caption>{{medicion.valorMedicion}} {{medicion.unidad}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-1 q-ml-sm">
        <q-btn color="secondary" label="Editar" @click="openDialog" />
        <q-btn class="q-mt-sm" color="primary" label="Exportar datos" @click="router.push({ name: 'exportar', params: { id: id } })" />
      </div>
    </div>
  </q-page-sticky>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { EstacionesServices } from 'src/services/estacionesServices'
import { HistoricoEstacionServices } from 'src/services/HistoricoEstacionesServices'
import StaticsDashboard from 'components/StaticsDashboard'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'verEstacion',
  components: {
    StaticsDashboard
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { data, getEstacion, updateEstacion } = EstacionesServices()
    const { data: dataHistorico, columns, getHistoricoEstacion, pagination } = HistoricoEstacionServices()

    const idEstacion = ref(props.id)
    const router = useRouter()

    const onRequest = (props) => {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      pagination.value.page = page
      pagination.value.rowsPerPage = rowsPerPage
      pagination.value.sortBy = sortBy
      pagination.value.descending = descending
      getHistoricoEstacion(idEstacion.value, props)
    }

    onMounted(async () => {
      await getEstacion(props.id)
      await getHistoricoEstacion(props.id, {
        pagination: pagination.value,
        filter: undefined
      })
    })

    const filter = ref('')
    const loading = ref(false)
    const optionVisualizacion = ref('tabla')

    const dialogEditar = ref(false)

    const openDialog = () => {
      marcador.value.id = data.value.id
      marcador.value.lat = Number(data.value.latitud)
      marcador.value.lng = Number(data.value.longitud)
      dialogEditar.value = true
    }

    const closeDialog = async () => {
      dialogEditar.value = false
      getEstacion(data.value.id)
    }

    const marcador = ref({
      id: null,
      lat: null,
      lng: null
    })

    const cambiarPos = async (evt) => {
      marcador.value.lat = evt.latLng.lat()
      marcador.value.lng = evt.latLng.lng()
    }

    const guardar = async () => {
      const response = await updateEstacion(marcador)
      if (response) {
        closeDialog()
      }
    }

    return {
      props,
      data,
      getEstacion,
      dataHistorico,
      getHistoricoEstacion,
      onRequest,
      filter,
      loading,
      pagination,
      columns,
      dialogEditar,
      openDialog,
      marcador,
      cambiarPos,
      guardar,
      optionVisualizacion,
      router
    }
  }
})
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>

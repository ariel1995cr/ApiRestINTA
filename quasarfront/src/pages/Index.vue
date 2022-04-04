<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <div class="text-h4">
          Bienvenido {{ usuario.nombre }} {{ usuario.apellido }}
        </div>
      </div>
    </div>
    <div class="row justify-end q-mx-lg">
      <div class="col-12 col-md-6">
        <GMapMap
          :center="{lat: -44, lng: -69}"
          :zoom="6"
          map-type-id="terrain"
          style="width: 90%; height: 100%"
        >
          <GMapMarker
            :key="index"
            v-for="(m, index) in data"
            :position="m.position"
            :clickable="true"
            @click="openMarker(m.Código)"
          >
            <GMapInfoWindow
              :opened="openedMarkerID === m.Código"
            >
              <div>
                <p class="text-subtitle1">{{m.Denominación}}</p>
                <span>
                  Latitud: {{m.Latitud}}
                  <br/>
                  Longitud: {{m.Longitud}}
                  <br/>
                </span>
                <q-btn @click="cerrar" class="q-mt-sm" size="xs" color="primary" label="Cerrar" />
              </div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </div>
      <div class="col-12 col-md-6">
        <q-table
          title="Listado de estaciones"
          dense
          :rows="data"
          :columns="columns"
          row-key="Código"
          :pagination="{
            rowsPerPage: 10,
          }"
          @row-click="verEstacion"
        >
          <template v-slot:body-cell-Pertenece="props">
            <q-td :props="props">
              <q-badge color="blue" :label="props.value" v-if="props.value == 'IPA'" />
              <q-badge color="blue" label="Subsecretaria de obras" v-else />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <statics-dashboard :estacion="openedMarkerID" v-if="openedMarkerID != null" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { LocalStorage } from 'quasar'
import { EstacionesServices } from '../services/estacionesServices'
import { useRouter } from 'vue-router'
import StaticsDashboard from 'components/StaticsDashboard'

export default defineComponent({
  name: 'PageIndex',
  components: { StaticsDashboard },
  setup () {
    const router = useRouter()
    const usuario = JSON.parse(LocalStorage.getItem('user'))

    const { data, getEstaciones } = EstacionesServices()

    const verEstacion = (evt, row) => {
      router.push({ name: 'verEstacion', params: { id: row.Código } })
    }

    const openedMarkerID = ref(null)

    const openMarker = async (id) => {
      openedMarkerID.value = null
      await setTimeout(5000)
      openedMarkerID.value = id
    }
    const columns = [
      { name: 'Denominación', align: 'left', label: 'Denominación', field: 'Denominación', sortable: true },
      { name: 'Latitud', align: 'left', label: 'Latitud', field: 'Latitud', sortable: true },
      { name: 'Longitud', align: 'left', label: 'Longitud', field: 'Longitud' },
      { name: 'Pertenece', align: 'left', label: 'Pertenece', field: 'identificacion' }
    ]

    onMounted(async () => {
      await getEstaciones()
    })

    const cerrar = () => {
      openedMarkerID.value = null
    }

    return {
      usuario,
      data,
      columns,
      verEstacion,
      openMarker,
      openedMarkerID,
      cerrar
    }
  }
})
</script>
<style>
.gm-ui-hover-effect{
  display: none !important;
}
</style>

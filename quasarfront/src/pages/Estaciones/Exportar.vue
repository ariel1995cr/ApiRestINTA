<template>
  <div class="row q-pa-lg">
      <div class="col-6 q-pa-sm">
        <q-input
          filled
          v-model="data.fechaInicio"
          label="Fecha inicio"
          mask="##/##/####"
          fill-mask="#"
          hint="Ingrese la fecha en formato DD/MM/AAAA"
          :error="errores?.fechaInicio?.length > 0"
          :error-message="errores?.fechaInicio?.length > 0 ? errores.fechaInicio[0] : ''"
        />
      </div>
      <div class="col-6 q-pa-sm">
        <q-input
          filled
          v-model="data.fechaFin"
          label="Fecha fin"
          mask="##/##/####"
          fill-mask="#"
          hint="Ingrese la fecha en formato DD/MM/AAAA"
          :error="errores?.fechaFin?.length > 0"
          :error-message="errores?.fechaFin?.length > 0 ? errores.fechaFin[0] : ''"
        />
      </div>
    <div class="col-12 q-pa-sm">
      <q-select filled multiple v-model="data.mediciones" :options="dataReportes" label="Seleccionar mediciones para reporte"
                :error="errores?.mediciones?.length > 0"
                :error-message="errores?.mediciones?.length > 0 ? errores.mediciones[0] : ''"
      />
    </div>
    <div class="row q-pa-sm justify-content-end">
      <q-btn color="primary" label="Exportar datos" @click="exportarPdf(id, data.fechaInicio, data.fechaFin, data.mediciones)" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue'
import { ReportesServices } from 'src/services/reportesServices'

export default defineComponent({
  name: 'Exportar',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { errores, data: dataReportes, getMedicionesPosibles, exportarPdf } = ReportesServices()

    const data = reactive({
      fechaInicio: null,
      fechaFin: null,
      mediciones: null
    })

    onMounted(async () => {
      await getMedicionesPosibles(props.id)
    })

    return {
      data,
      dataReportes,
      exportarPdf,
      errores
    }
  }
})

</script>

<style scoped>

</style>

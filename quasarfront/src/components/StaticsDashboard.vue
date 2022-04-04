<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    v-if="mediciones.columns"
  >
  <div class="row q-pa-lg justify-center">
    <q-card bordered flat class="my-card col-4 col-md-2" style="max-height: 150px">
      <q-card-section horizontal>
        <q-card-section class="text-left">
          <div class="text-subtitle2 text-capitalize">
          Temperatura Media
          </div>
          <p class="text-h6 text-left">
            {{mediciones.mediaTemperatura}}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card bordered flat class="my-card col-4 col-md-2 q-ml-lg" style="max-height: 150px">
      <q-card-section horizontal>
        <q-card-section class="text-left">
          <div class="text-subtitle2">
            Velocidad Viento Media
          </div>
          <p class="text-h6 text-left">
            {{mediciones.mediaViento}}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card bordered flat class="my-card col-4 col-md-2 q-px-lg-xl q-ml-lg" style="max-height: 150px">
      <q-card-section horizontal>
        <q-card-section class="text-left">
          <div class="text-subtitle2 text-left">
            Humedad Media
          </div>
          <p class="text-h6 text-left">
            {{mediciones.mediaHumedad}}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card bordered flat class="my-card col-4 col-md-2 q-px-lg-xl q-ml-lg" style="max-height: 150px">
      <q-card-section horizontal>
        <q-card-section class="text-left">
          <div class="text-subtitle2 text-left">
            Presion Barometrica Media
          </div>
          <p class="text-h6 text-left">
            {{mediciones.mediaPresionBarometrica}}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card bordered flat class="my-card col-4 col-md-2 q-px-lg-xl q-ml-lg" style="max-height: 150px">
      <q-card-section horizontal>
        <q-card-section class="text-left">
          <div class="text-subtitle2 text-left">
            Precipitacion Media
          </div>
          <p class="text-h6 text-left">
            {{mediciones.mediaPrecipitacion}}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>
      <div class="col-12 q-mt-lg" ref="chart">
      </div>

      <div class="col-12 col-md-6 q-mt-lg" ref="limnimetroRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="bateriaRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="temperaturaRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="humedadRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="probLluviaRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="velocidadVientoRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="presionBarometricaRef">
      </div>

      <div class="col-12 col-md-6  q-mt-lg" ref="radiacionSolarRef">
      </div>
    </div>
  </transition>
  <div class="row justify-center" v-else>
    <q-spinner-dots
      size="xl"
      color="primary"
    />
  </div>

</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import bb, { area, spline, step, bar } from 'billboard.js'
import { medicionesServices } from 'src/services/medicionesServices'
import 'billboard.js/dist/theme/insight.css'

export default defineComponent({
  name: 'StaticsDashboard',
  props: {
    estacion: {
      type: Number,
      required: false
    }
  },
  setup (props) {
    const { data: mediciones, getHistoricoMediciones } = medicionesServices()
    const chart = ref(null)
    const limnimetroRef = ref(null)
    const bateriaRef = ref(null)
    const temperaturaRef = ref(null)
    const humedadRef = ref(null)
    const probLluviaRef = ref(null)
    const velocidadVientoRef = ref(null)
    const presionBarometricaRef = ref(null)
    const radiacionSolarRef = ref(null)
    const loading = ref(false)

    onMounted(async () => {
      await loadData()
    })

    const loadData = async () => {
      loading.value = true
      await getHistoricoMediciones(props.estacion, 10)
      bb.generate({
        bindto: chart.value,
        data: {
          x: 'x',
          columns: mediciones.value.columns,
          type: step(),
          types: {
            'Presión barometrica': area()
          }
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              fit: true,
              multiline: false,
              autorotate: true,
              rotate: 25,
              format: '%e %b %y'
            }
          }
        }
      })
      mediciones.value.columns.forEach(el => {
        if (el[0] === 'Limnimetro') {
          bb.generate({
            bindto: limnimetroRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Bateria') {
          bb.generate({
            bindto: bateriaRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: step()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Temperatura') {
          bb.generate({
            bindto: temperaturaRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: bar()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Humedad') {
          bb.generate({
            bindto: humedadRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Probabilidad de lluvia') {
          bb.generate({
            bindto: probLluviaRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Velocidad del viento') {
          bb.generate({
            bindto: velocidadVientoRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Presión barometrica') {
          bb.generate({
            bindto: presionBarometricaRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }

        if (el[0] === 'Radiacion solar') {
          bb.generate({
            bindto: radiacionSolarRef.value,
            data: {
              x: 'x',
              columns: [
                mediciones.value.columns[0],
                el
              ],
              type: spline()
            },
            axis: {
              x: {
                type: 'timeseries',
                tick: {
                  fit: true,
                  multiline: false,
                  autorotate: true,
                  rotate: 25,
                  format: '%e %b %y'
                }
              }
            }
          })
        }
      })

      loading.value = false
    }

    return {
      props,
      chart,
      mediciones,
      loading,
      limnimetroRef,
      bateriaRef,
      temperaturaRef,
      humedadRef,
      probLluviaRef,
      velocidadVientoRef,
      presionBarometricaRef,
      radiacionSolarRef
    }
  }
})
</script>

<style scoped>

</style>

<template>
    <div class="p-col-12" v-if="stateEstaciones.loading">
        <ProgressBar mode="indeterminate"/>
    </div>
    <div class="p-grid p-mt-2" v-else>
        <div class="p-col-12 p-md-4" v-for="estacion in stateEstaciones.data">
            <Card style="width: 100%; margin-bottom: 2em">
                <template #title>
                    {{estacion.Denominación}}
                </template>
                <template #content>
                    <p style="font-size: 11px">LAT: {{estacion.Latitud}}</p>
                    <p style="font-size: 11px">LONG: {{estacion.Longitud}}</p>
                    <div class="p-grid">
                        <div class="p-col-4 p-text-bold">
                            <i class="wi wi-thermometer"></i>
                            {{getTemperatura(estacion.ultimaMedicion)}}
                        </div>
                        <div class="p-col-4">
                            <i class="wi wi-humidity"></i>
                            {{getProbLluvia(estacion.ultimaMedicion)}}
                        </div>
                        <div class="p-col-4">
                            <i class="wi wi-strong-wind"></i>
                            {{getVelocidadViento(estacion.ultimaMedicion)}}
                        </div>
                    </div>
                    <p style="font-size: 11px">Ultima actualizacion: {{estacion.ultimaActualizacion}}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import {computed, onMounted} from "vue";
import ProgressBar from "primevue/ProgressBar";
import Card from 'primevue/card';
export default {
    name: "index",
    components:{
        ProgressBar,
        Card
    },
    setup(){
        const { getEstaciones, state:stateEstaciones } = EstacionesServices();

        onMounted(async ()=>{
            await getEstaciones();
        })

        const getTemperatura = (data)=>{
            for (const medicion of data) {
                if(medicion.codigoMedicion == 1){
                    return medicion.valorMedicion+"ºC";
                }
            }
            return "";
        }

        const getProbLluvia = (data)=>{
            for (const medicion of data) {
                if(medicion.codigoMedicion == 3){
                    return medicion.valorMedicion+"%";
                }
            }
            return "";
        }

        const getVelocidadViento = (data)=>{
            for (const medicion of data) {
                if(medicion.codigoMedicion == 4){
                    return medicion.valorMedicion+" Km/h";
                }
            }
            return "";
        }

        return{
            getEstaciones,
            stateEstaciones,
            getTemperatura,
            getProbLluvia,
            getVelocidadViento
        }
    }
}
</script>

<style scoped>

</style>

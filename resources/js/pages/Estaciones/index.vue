<template>
    <div class="container text-center" v-if="stateEstaciones.loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="container" v-else>
        <div class="row">
            <p class="fw-bolder fs-1 text-center">Estaciones activas</p>
            <div class="col-12 col-md-6 mb-2" v-for="(estacion, index) in stateEstaciones.data">
                <div class="card bg-primary text-white shadow" @click="router.push({name:'VerEstacion', params:{id: index+1}})" >
                    <img :src="`/storage/estaciones/${index+1}.png`" class="card-img">
                    <div class="card-img-overlay text-white">
                        <h5 class="card-title">{{estacion.Denominación}}</h5>
                        <p style="font-size: 11px">LAT: {{estacion.Latitud}}
                            <br>
                            LONG: {{estacion.Longitud}}</p>
                        <span class="card-text fs-2"><i class="wi wi-thermometer"></i>
                            {{getTemperatura(estacion.ultimaMedicion)}}</span>
                        <span class="card-text fs-2 m-4"><i class="wi wi-humidity"></i>
                            {{getProbLluvia(estacion.ultimaMedicion)}}</span>
                        <span class="card-text fs-2"><i class="wi wi-strong-wind"></i>
                            {{getVelocidadViento(estacion.ultimaMedicion)}}</span>

                        <p class="card-text">Ultima actualizacion: {{estacion.ultimaActualizacion}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import {computed, onMounted} from "vue";
import router from "../../routes/index";
export default {
    name: "index",
    components:{
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
            getVelocidadViento,
            router,
        }
    }
}
</script>

<style scoped>
.card-img{
    height: 250px;
    opacity: 0.4;
}
</style>

<template>
    <div class="container text-center" v-if="stateEstacion.loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="container" v-else>
        <div class="row text-center">
            <p class="fw-bolder fs-1 text-center">{{ stateEstacion.data.denominacion }}</p>
            <img class="w-50 rounded mx-auto" :src="`/storage/estaciones/${stateEstacion.data.id}.png`">
            <ul class="list-group w-50">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="medicion in stateEstacion.data.ultimaMedicion">
                    {{medicion.descripcion}}:
                    <span class="badge bg-success rounded-pill">{{medicion.valorMedicion}} {{medicion.unidad}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import {onMounted} from "vue";
export default {
    name: "VerEstacion",
    props:{
        id: String,
    },
    setup(props){
        const { getEstacion, state:stateEstacion } = EstacionesServices();

        onMounted(async ()=>{
            await getEstacion(props.id);
        })
        return{
            props,
            stateEstacion
        }
    }
}
</script>

<style scoped>

</style>

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
        <div class="col-12 mt-2">
            <div class="spinner-border text-center" role="status" v-if="stateHistoricoEstacion.loading">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <div v-else>
            <p class="fw-bolder fs-1 text-center">Historico de mediciones</p>
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Medicion</th>
                    <th>Valor</th>
                    <th>Fecha de medición</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="itemHistorico in stateHistoricoEstacion.data" :key="itemHistorico.id">
                    <td>{{itemHistorico.id}}</td>
                    <td>{{itemHistorico.descripcion}}</td>
                    <td>{{itemHistorico.valorMedicion}} {{itemHistorico.unidad}}</td>
                    <td>{{itemHistorico.updated_at}}</td>
                </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                    <li class="page-item" @click="getHistoricoEstacion(link.label,link.url)" :class="{'active': link.active}" v-for="link in stateHistoricoEstacion.links">
                        <a class="page-link" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import { HistoricoEstacionServices } from "../../services/HistoricoEstacionesServices";
import {onMounted} from "vue";
export default {
    name: "VerEstacion",
    props:{
        id: String,
    },
    setup(props){
        const { getEstacion, state:stateEstacion } = EstacionesServices();
        const { getHistoricoEstacion, state:stateHistoricoEstacion } = HistoricoEstacionServices();

        onMounted(async ()=>{
            await getEstacion(props.id);
            await getHistoricoEstacion(props.id);
        })
        return{
            props,
            stateEstacion,
            stateHistoricoEstacion,
            getHistoricoEstacion,
        }
    }
}
</script>

<style scoped>

</style>

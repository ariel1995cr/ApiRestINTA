<template>
    <div class="container-fluid text-center" v-if="stateEstacion.loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="container-fluid" v-else>
        <div class="row text-center bg-secondary p-3 border-2 rounded-2 sticky-top position-sticky">
            <p class="fw-bolder fs-1 text-center text-light">{{ stateEstacion.data.denominacion }}</p>
            <img height="285" width="285" class="w-50 mx-auto rounded-2" :src="`/storage/estaciones/${stateEstacion.data.id}.png`">
            <div class="w-50">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="medicion in stateEstacion.data.ultimaMedicion">
                    {{medicion.descripcion}}:
                    <span class="badge bg-success rounded-pill">{{medicion.valorMedicion}} {{medicion.unidad}}</span>
                </li>
            </ul>
                <button class="btn btn-primary mt-2" @click="abrirModal">EDITAR</button>
            </div>
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
                    <th>Fecha de medición</th>
                    <th v-for="medicion in stateEstacion.data.ultimaMedicion">
                        {{medicion.descripcion}}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="itemHistorico in stateHistoricoEstacion.data" :key="itemHistorico.id">
                    <td>{{itemHistorico.updated_at}}</td>
                    <td v-for="medicion in itemHistorico.mediciones">
                        {{medicion.valorMedicion}}{{medicion.unidad}}
                    </td>
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
    <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar coordenadas</h5>
                    <button type="button" class="btn-close" @click="cerrarModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
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
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="cerrarModal">Cerrar</button>
                    <button type="button" class="btn btn-primary" @click="guardar">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import { HistoricoEstacionServices } from "../../services/HistoricoEstacionesServices";
import { Modal } from "bootstrap/dist/js/bootstrap.min.js";
import {onMounted, ref} from "vue";
export default {
    name: "VerEstacion",
    props:{
        id: String,
    },
    setup(props){
        const { getEstacion, state:stateEstacion, updateEstacion } = EstacionesServices();
        const { getHistoricoEstacion, state:stateHistoricoEstacion } = HistoricoEstacionServices();

        let modal;

        let marcador = ref({
            id: null,
            lat: null,
            lng: null,
        });

        onMounted(async ()=>{
            modal = new Modal(document.getElementById('exampleModal'));
            await getEstacion(props.id);
            await getHistoricoEstacion(props.id);
        })

        const abrirModal = async ()=>{
            marcador.value.id = stateEstacion.data.id;
            marcador.value.lat = Number(stateEstacion.data.latitud);
            marcador.value.lng = Number(stateEstacion.data.longitud);
            modal.show();
        }

        const cerrarModal = async ()=>{
            modal.hide();
        }

        const cambiarPos = async(evt)=>{
            marcador.value.lat = evt.latLng.lat();
            marcador.value.lng = evt.latLng.lng();
        }
        const guardar = async()=>{
            let response = await updateEstacion(marcador);
            if(response){
                cerrarModal();
            }
        }

        return{
            props,
            stateEstacion,
            stateHistoricoEstacion,
            getHistoricoEstacion,
            abrirModal,
            cerrarModal,
            marcador,
            cambiarPos,
            guardar
        }
    }
}
</script>

<style scoped>

</style>

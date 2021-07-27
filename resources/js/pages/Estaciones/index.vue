<template>
    <div class="container text-center" v-if="stateEstaciones.loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="container" v-else>
        <div class="row">
            <GMapMap
                :center="{lat: -44, lng: -69}"
                :zoom="6"
                map-type-id="terrain"
                style="width: 100vw; height: 400px"
            >
                <GMapMarker
                    :key="index"
                    v-for="(m, index) in stateEstaciones.data"
                    :position="m.position"
                    :clickable="true"
                    @click="openMarker(m.Código)"
                >
                    <GMapInfoWindow
                        :opened="openedMarkerID === m.Código"
                    >
                        <div>
                            <h2>{{m.Denominación}}</h2>
                            <span>Latitud: {{m.Latitud}}<br/>
                            Longitud: {{m.Longitud}}</span>
                        </div>
                    </GMapInfoWindow>
                </GMapMarker>
            </GMapMap>
            <p class="fw-bolder fs-1 text-center">Estaciones activas</p>
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th @click="sort('id')">ID <i :class="isActive('id')"></i></th>
                    <th @click="sort('denominacion')">Denominación <i :class="isActive('denominacion')"></i></th>
                    <th @click="sort('latitud')">Latitud <i :class="isActive('latitud')"></i></th>
                    <th @click="sort('longitud')">Longitud <i :class="isActive('longitud')"></i></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="estacion in stateEstaciones.data" :key="estacion.id" @click="router.push({name:'VerEstacion', params:{id: estacion.Código}})">
                    <td>{{estacion.Código}}</td>
                    <td>{{estacion.Denominación}}</td>
                    <td>{{estacion.Latitud}}</td>
                    <td>{{estacion.Longitud}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { EstacionesServices } from "../../services/EstacionesServices";
import {computed, onMounted, ref} from "vue";
import router from "../../routes/index";


export default {
    name: "index",
    components:{
    },
    setup(){
        const { getEstaciones, state:stateEstaciones } = EstacionesServices();

        let openedMarkerID = ref(null);

        const sortBy = ref({
            direction: 'desc',
            campo: '',
        });

        onMounted(async ()=>{
            await getEstaciones();
        })

        const sort = async (campo) =>{
            if(sortBy.value.campo === campo){
                sortBy.value.direction = sortBy.value.direction === 'asc' ? 'desc' : 'asc';
            }else{
                sortBy.value.campo = campo;
                sortBy.value.direction = 'asc';
            }
            getEstaciones(JSON.stringify(sortBy.value));
        };

        const isActive = (campo) => {
            if(campo === sortBy.value.campo){
                return sortBy.value.direction === 'asc' ? 'bi bi-sort-alpha-down' : 'bi bi-sort-alpha-up';
            }
            return '';
        };

        const openMarker = (id) => {
            openedMarkerID.value = id
        }

        return{
            stateEstaciones,
            router,
            sort,
            isActive,
            openedMarkerID,
            openMarker,
        }
    }
}
</script>

<style scoped>
.tablesorter-header::before {
    content: '\f0de';            /* Font Awesome's up arrow */
    top: calc(50% - 0.75em);     /* Tricky to calculate the top offset */
}

.tablesorter-header::after {
    content: '\f0dd';            /* Font Awesome's down arrow */
    bottom: calc(50% - 0.75em);
}
</style>

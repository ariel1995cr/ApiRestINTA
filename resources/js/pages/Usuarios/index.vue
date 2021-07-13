<template>
    <div class="row justify-content-end">
        <div class="col-2">
            <button @click="router.push({name: 'UsuariosAgregar'})" type="button" class="btn btn-outline-success">Agregar</button>
        </div>
    </div>
    <div class="table-responsive table-striped">
        <table class="table align-middle">
            <thead>
            <tr>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Email</td>
                <td>Rol</td>
                <td>Creado el</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in stateUsuarios.data">
                    <td>{{user.nombre}}</td>
                    <td>{{user.apellido}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.rol}}</td>
                    <td>{{user.created_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <nav class="ml-2 float-end">
        <ul class="pagination">
            <li @click="getUsuarios(stateUsuarios.prev_page)" class="page-item" v-if="stateUsuarios.prev_page">
                <a class="page-link">Anterior</a>
            </li>
            <li class="page-item active" aria-current="page">
                <a class="page-link">{{stateUsuarios.current_page}}</a>
            </li>
            <li @click="getUsuarios(stateUsuarios.next_page)" class="page-item" v-if="stateUsuarios.next_page">
                <a class="page-link">Siguiente</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { UsuariosServices } from "../../services/UsuariosServices";
import {onMounted, ref} from "vue";
import router from "../../routes";
export default {
    name: "index.vue",
    components:{
    },
    setup(){
        const { getUsuarios, state:stateUsuarios } = UsuariosServices();

        onMounted(async ()=>{
            await getUsuarios();
        })

        const dt = ref();



        return{
            stateUsuarios,
            dt,
            router,
            getUsuarios,
        }
    }
}
</script>

<style scoped>

</style>

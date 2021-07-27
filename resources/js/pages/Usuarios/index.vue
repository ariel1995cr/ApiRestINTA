<template>
    <div class="row justify-content-end">
        <div class="col-1">
            <button @click="router.push({name: 'UsuariosAgregar'})" type="button" class="btn btn-outline-success">Agregar</button>
        </div>
    </div>
    <div class="table-responsive table-striped mt-2">
        <table class="table table-hover table-bordered">
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
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item" @click="getUsuarios(link.url)" :class="{'active': link.active}" v-for="link in stateUsuarios.links">
                <a class="page-link" v-html="link.label"></a>
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

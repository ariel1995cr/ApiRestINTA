<template>
    <div class="row justify-content-end">
        <div class="col-2">
            <button @click="router.push({name: 'UsuariosAgregar'})" type="button" class="btn btn-success">Agregar</button>
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
        }
    }
}
</script>

<style scoped>

</style>

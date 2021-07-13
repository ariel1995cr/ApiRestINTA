<template>
    <div class="row g-2">
        <div class="col-6">
            <div class="form-floating">
                <input type="text" v-model.trim="usuario.nombre" class="form-control" id="nombre" placeholder="Pedro">
                <label for="nombre">Nombre</label>
            </div>
            <p v-if="stateUsuario.error && stateUsuario?.errors?.nombre" style="color: red">
                {{stateUsuario.errors.nombre[0]}}
            </p>
        </div>
        <div class="col-6">
            <div class="form-floating">
                <input type="text" v-model.trim="usuario.apellido" class="form-control" id="apellido" placeholder="Apellido">
                <label for="apellido">Apellido</label>
            </div>
            <p v-if="stateUsuario.error && stateUsuario?.errors?.apellido" style="color: red">
                {{stateUsuario.errors.apellido[0]}}
            </p>
        </div>
    </div>
    <div class="row g-2 mt-2">
        <div class="col-6">
            <div class="form-floating">
                <input type="email" v-model.trim="usuario.email" class="form-control" id="email" placeholder="Email">
                <label for="email">Email</label>
            </div>
            <p v-if="stateUsuario.error && stateUsuario?.errors?.email" style="color: red">
                {{stateUsuario.errors.email[0]}}
            </p>
        </div>
        <div class="col-6">
            <div class="form-floating">
                <select v-model.trim="usuario.rol" class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                    <option selected>Seleccionar rol</option>
                    <option :value="rol" v-for="rol in roles">{{rol}}</option>
                </select>
                <label for="floatingSelectGrid">Roles para seleccionar</label>
            </div>
            <p v-if="stateUsuario.error && stateUsuario?.errors?.rol" style="color: red">
                {{stateUsuario.errors.rol[0]}}
            </p>
        </div>
    </div>
    <button @click="saveUsuario(usuario)" class="btn btn-primary mt-2" type="button">Guardar</button>
</template>

<script>
import {reactive} from "vue";
import { UsuariosServices } from "../../services/UsuariosServices";
export default {
    name: "Agregar",
    components:{
    },
    setup(){
        const roles = ['usuario', 'administrador'];
        const { saveUsuario, state:stateUsuario } = UsuariosServices();
        let usuario = reactive({
            nombre: '',
            apellido: '',
            email: '',
            rol: '',
        });
        return {
            roles,
            usuario,
            saveUsuario,
            stateUsuario,
        }
    }
}
</script>

<style scoped>

</style>

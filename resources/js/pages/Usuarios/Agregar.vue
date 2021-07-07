<template>
<form class="p-mt-2 p-p-3">
    <div class="p-fluid p-formgrid p-grid">
       <div class="p-field p-col-12 p-md-6">
           <label for="nombre">Nombre</label>
           <InputText v-model="usuario.nombre" id="nombre" type="text" />
           <p v-if="stateUsuario.error && stateUsuario?.errors?.nombre" style="color: red">
               {{stateUsuario.errors.nombre[0]}}
           </p>
       </div>
        <div class="p-field p-col-12 p-md-6">
            <label for="apellido">Apellido</label>
            <InputText v-model="usuario.apellido" id="apellido" type="text" />
            <p v-if="stateUsuario.error && stateUsuario?.errors?.apellido" style="color: red">
                {{stateUsuario.errors.apellido[0]}}
            </p>
        </div>
        <div class="p-field p-col-12 p-md-6">
            <label for="email">Email</label>
            <InputText v-model="usuario.email" id="email" type="email" />
            <p v-if="stateUsuario.error && stateUsuario?.errors?.email" style="color: red">
                {{stateUsuario.errors.email[0]}}
            </p>
        </div>
        <div class="p-field p-col-12 p-md-6">
            <label>Rol</label>
            <Dropdown v-model="usuario.rol" :options="roles" placeholder="Seleccionar rol" />
            <p v-if="stateUsuario.error && stateUsuario?.errors?.rol" style="color: red">
                {{stateUsuario.errors.rol[0]}}
            </p>
        </div>
        <div class="p-field p-col-12">
            <Button @click="saveUsuario(usuario)" class="p-button-success" label="Guardar" />
        </div>

    </div>
</form>
</template>

<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import {reactive} from "vue";
import { UsuariosServices } from "../../services/UsuariosServices";
export default {
    name: "Agregar",
    components:{
        InputText,
        Dropdown,
        Button,
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

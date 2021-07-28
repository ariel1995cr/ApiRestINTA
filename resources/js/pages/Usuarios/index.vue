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
                <td>Fecha creci&oacute;n</td>
                <td>Acciones</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in stateUsuarios.data">
                    <td>{{user.nombre}}</td>
                    <td>{{user.apellido}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.rol}}</td>
                    <td>{{user.created_at}}</td>
                    <td>
                        <i class="bi bi-pen" @click="abrirModal(user)" data-bs-toggle="tooltip" data-bs-placement="left" title="Editar"></i>
                    </td>
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

    <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar usuario</h5>
                    <button type="button" class="btn-close" @click="cerrarModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-2">
                        <div class="col-12">
                            <div class="form-floating m-2">
                                <input type="text" v-model.trim="usuario.nombre" class="form-control" id="nombre" placeholder="Pedro">
                                <label for="nombre">Nombre</label>
                                <p v-if="stateUsuarios.error && stateUsuarios?.errors?.nombre" style="color: red">
                                    {{stateUsuarios.errors.nombre[0]}}
                                </p>
                            </div>
                            <div class="form-floating m-2">
                                <input type="text" v-model.trim="usuario.apellido" class="form-control" id="apellido" placeholder="Pedro">
                                <label for="apellido">Apellido</label>
                                <p v-if="stateUsuarios.error && stateUsuarios?.errors?.apellido" style="color: red">
                                    {{stateUsuarios.errors.apellido[0]}}
                                </p>
                            </div>
                            <div class="form-floating m-2">
                                <input type="text" v-model.trim="usuario.email" class="form-control" id="email" placeholder="Pedro">
                                <label for="email">Email</label>
                                <p v-if="stateUsuarios.error && stateUsuarios?.errors?.email" style="color: red">
                                    {{stateUsuarios.errors.email[0]}}
                                </p>
                            </div>
                            <div class="form-floating m-2">
                                <select v-model.trim="usuario.rol" class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option selected>Seleccionar rol</option>
                                    <option :value="rol" v-for="rol in roles">{{rol}}</option>
                                </select>
                                <label for="floatingSelectGrid">Roles para seleccionar</label>
                                <p v-if="stateUsuarios.error && stateUsuarios?.errors?.rol" style="color: red">
                                    {{stateUsuarios.errors.rol[0]}}
                                </p>
                            </div>
                        </div>
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
import { UsuariosServices } from "../../services/UsuariosServices";
import {onMounted, ref} from "vue";
import router from "../../routes";
import { Tooltip, Modal } from "bootstrap/dist/js/bootstrap.min.js";

export default {
    name: "index.vue",
    components:{
    },
    setup(){
        const { getUsuarios, updateUsuario,state:stateUsuarios } = UsuariosServices();
        const roles = ['usuario', 'administrador'];
        let usuario = ref({
            id: '',
         nombre: '',
         apellido: '',
         email: '',
         rol: '',
        });

        let modal;

        onMounted(async ()=>{
            await getUsuarios();

            Array.from(document.querySelectorAll('i[data-bs-toggle="tooltip"]'))
                .forEach(tooltipNode => new Tooltip(tooltipNode))

            modal = new Modal(document.getElementById('exampleModal'));
        })

        const abrirModal = async (usuarioSeleccionado)=>{
            usuario.value = Object.assign({}, usuarioSeleccionado);
            modal.show();
        }

        const cerrarModal = async ()=>{
            stateUsuarios.errors = [];
            stateUsuarios.error = false;
            modal.hide();
        }

        const guardar = async()=>{
            let cerrarModal = await updateUsuario(usuario.value, usuario.value.id);
            if(cerrarModal){
                modal.hide();
            }
        }



        const dt = ref();

        return{
            stateUsuarios,
            dt,
            router,
            getUsuarios,
            updateUsuario,
            abrirModal,
            modal,
            roles,
            usuario,
            guardar,
            cerrarModal,
        }
    }
}
</script>

<style scoped>

</style>

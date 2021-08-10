<template>
    <div class="p-col-12 p-md-4">
        <p class="text-center fs-3">Bienvenido {{usuario.apellido}} {{usuario.nombre}}</p>
    </div>
</template>

<script>
import {reactive, ref} from "vue";
export default {
    name: "IndexAdminPage",
    setup(){
        let usuario = ref(JSON.parse(window.localStorage.getItem('usuario')));
        const menu = reactive([
            {
                title: 'Usuarios',
                to: 'EstacionesIndex'
            },
            {
                title: 'Usuarios',
                to: 'UsuariosIndex',
            }
        ])
        return{
            menu,
            usuario
        }
    }
}
</script>

<style scoped>

</style>

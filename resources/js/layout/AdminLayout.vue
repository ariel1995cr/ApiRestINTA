<template>
    <div class="p-col-12 header p-shadow-10 p-text-capitalize p-p-3" style="color: white">
        Bienvenido {{usuario.apellido}} {{usuario.nombre}}
        <span class="p-ml-2 p-p-2 item" @click="changePage('AdminIndex')">
            <i class="pi pi-home"></i>
            Inicio
        </span>
        <span class="p-ml-5 p-p-2 item" @click="cerrarSesion">
            <i class="pi pi-sign-out"></i>
            Cerrar Sesión
        </span>
    </div>
    <div class="p-grid p-jc-center p-mt-2">
        <router-view></router-view>
    </div>
    <Toast/>
</template>

<script>
import Toast from "primevue/toast";
import {ref} from "vue";
import router from "../routes";
export default {
    components:{
        Toast
    },
    name: "AdminLayout",
    setup(){
        let usuario = ref(JSON.parse(window.localStorage.getItem('usuario')));

        const changePage = (nombre) => {
            router.push({name: nombre})
        }

        const cerrarSesion = ()=>{
            window.localStorage.removeItem('usuario');
            window.localStorage.removeItem('access_token');
            router.push({name: 'Login'});
        }
        return {
            usuario,
            changePage,
            cerrarSesion
        }
    }
}
</script>

<style scoped>
.header{
    background-color: gray;
    border-radius: 5px;
}
.item:hover{
    border: 2px solid black;
    border-radius: 5px;
}
</style>

<template>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li @click="changePage('AdminIndex')"><a class="nav-link px-2 link-secondary">Home</a></li>
                <li @click="changePage('EstacionesIndex')"><a class="nav-link px-2 link-dark">Estaciones</a></li>
                <li @click="changePage('UsuariosIndex')"><a  class="nav-link px-2 link-dark">Usuarios</a></li>
            </ul>

            <div class="col-md-3 text-end">
                <button @click="cerrarSesion" type="button" class="btn btn-danger">Cerrar sesión</button>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {ref} from "vue";
import router from "../routes";
export default {
    components:{
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
.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.text-small {
    font-size: 85%;
}

.dropdown-toggle {
    outline: 0;
}

</style>

<template>
    <main class="form-signin text-center">
            <img class="mb-4" src="../../assets/logoIPA.png" alt="">
            <h1 class="h3 mb-3 fw-normal">Iniciar sesión</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="email" v-model="usuario.email" placeholder="name@example.com">
                <label for="email">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" v-model="usuario.password" placeholder="Password">
                <label for="floatingPassword">Contraseña</label>
            </div>
            <button @click="login(usuario.email,usuario.password)" class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
            <p class="mt-5 mb-3 text-muted">&copy; Tecno-Soluciones</p>
    </main>
</template>

<script>
import { LoginServices } from "../../services/LoginServices";
import {reactive} from "vue";
export default {
    components:{
    },
    name: "Login",
    setup(){
        let usuario = reactive({
            email: "",
            password: "",
        })
        const { login,  state:stateLogin } = LoginServices();
        return {
            login,
            stateLogin,
            usuario,
        }
    }
}
</script>

<style lang="scss" scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
html, body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

</style>

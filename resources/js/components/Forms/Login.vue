<template>
    <div class="p-grid p-jc-center p-ai-center vertical-container">
        <div class="p-col-12 p-md-4">
            <div class="box">
                <img src="../../assets/logoIPA.png">
                <div class="p-fluid p-p-6">
                    <div class="p-field">
                        <label for="email">E-mail</label>
                        <InputText id="email" type="email" v-model="usuario.email" />
                    </div>
                    <div class="p-field">
                        <label>Password</label>
                        <Password v-model="usuario.password"></Password>
                    </div>
                    <Button @click="login(usuario.email, usuario.password)" label="Ingresar" class="p-button-success" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import { LoginServices } from "../../services/LoginServices";
import {reactive} from "vue";
export default {
    components:{
      InputText,
      Password,
        Button,
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

<style lang="scss">
.box {
    background-color: var(--surface-e);
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
.vertical-container {
    margin: 0;
    height: 97vh;
    background: var(--surface-d);
    border-radius: 4px;
}

</style>

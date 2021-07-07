import AxiosInstance from "./AxiosInstance";

import { reactive } from "vue";
import { useToast } from "primevue/usetoast";
import router from "../routes";

export const LoginServices = () =>{
    const toast = useToast();
    const state = reactive({
        loading: false,
        error: false,
        message: "",
    });

    const login = async(email, password)=>{
        AxiosInstance.post('/api/v1/admin/login',{
            email: email,
            password: password
        })
            .then(resp=>{
                window.localStorage.setItem('access_token', resp.data.access_token);
                window.localStorage.setItem('usuario', JSON.stringify(resp.data.usuario));
                router.push({name:'AdminIndex'});
            })
            .catch(err=>{
                toast.add({severity:'error', summary: 'Login Invalido.', detail:err.response.data.message, life: 3000});
            })
    }

    return {
        state,
        login,
    }
}

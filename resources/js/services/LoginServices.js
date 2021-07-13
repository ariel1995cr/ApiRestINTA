import AxiosInstance from "./AxiosInstance";

import { reactive } from "vue";
import router from "../routes";

import { useVueSweetAlert2 } from "../useSwal2";
import { inject } from "vue";

export const LoginServices = () =>{
    const $swal = useVueSweetAlert2();
    const InjectDirectly = inject("$swal");
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
                $swal.fire({
                    icon: "error",
                    title: "Login no exitoso.",
                    text: err.response.data.message,
                });
            })
    }

    return {
        state,
        login,
    }
}

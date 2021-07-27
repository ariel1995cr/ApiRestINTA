import AxiosInstance from "./AxiosInstance";

import {inject, reactive} from "vue";
import router from "../routes";
import {useVueSweetAlert2} from "../useSwal2";

export const UsuariosServices = () =>{
    const $swal = useVueSweetAlert2();
    const InjectDirectly = inject("$swal");
    const state = reactive({
        loading: false,
        error: false,
        message: "",
        data: "",
        errors: [],
        current_page: 1,
        first_page: "",
        last_page: "",
        next_page: "",
        prev_page: "",
        links: "",
        per_page: 10,
        total: 0,
    });

    const getUsuarios = async(url = null)=>{
        state.loading = true;
        let urlPage = ""
        if(url == null){
            urlPage = '/api/v1/admin/user';
        }else{
            urlPage = url;
        }
        await AxiosInstance.get(urlPage)
            .then(resp=>{
                state.data = resp.data.data;
                state.current_page = resp.data.current_page;
                state.total = resp.data.total;
                state.next_page = resp.data.next_page_url;
                state.prev_page = resp.data.prev_page_url;
                state.links = resp.data.links;
            })
            .catch(err=>{
                state.error = true;
                console.log(err);
            })
        state.loading = false;
    }

    const saveUsuario = async(data)=>{
        state.loading = true;
        await AxiosInstance.post('/api/v1/admin/user',{
            ...data
        })
            .then(resp=>{
                state.error = false;
                state.errors = [];
                router.push({name: 'UsuariosIndex'});
                $swal.fire({
                    icon: "success",
                    title: "Usuario creado.",
                    text: resp.data.message,
                });
            })
            .catch(err=>{
                state.error = true;
                state.errors = err.response.data.errors;
                $swal.fire({
                    icon: "error",
                    title: "Error en formulario.",
                    text: err.response.data.message,
                });
            })
        state.loading = false;
    }

    return {
        state,
        getUsuarios,
        saveUsuario
    }
}

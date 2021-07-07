import AxiosInstance from "./AxiosInstance";

import { reactive } from "vue";
import { useToast } from "primevue/usetoast";
import router from "../routes";

export const UsuariosServices = () =>{
    const toast = useToast();

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
        per_page: 10,
        total: 0,
    });

    const getUsuarios = async()=>{
        state.loading = true;
        await AxiosInstance.get('/api/v1/admin/user')
            .then(resp=>{
                state.data = resp.data.data;
                state.current_page = resp.data.current_page;
                state.total = resp.data.total;
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
                toast.add({severity:'success', summary: 'Usuario creado correctamente.', detail:resp.data.msg, life: 3000});
            })
            .catch(err=>{
                state.error = true;
                state.errors = err.response.data.errors;
                toast.add({severity:'error', summary: 'Error en formulario.', detail:err.response.data.message, life: 3000});
                console.log(err);
            })
        state.loading = false;
    }

    return {
        state,
        getUsuarios,
        saveUsuario
    }
}

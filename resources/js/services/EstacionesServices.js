import AxiosInstance from "./AxiosInstance";

import { reactive } from "vue";
//import { useToast } from "primevue/usetoast";

export const EstacionesServices = () =>{
    const state = reactive({
        loading: false,
        error: false,
        message: "",
        data: "",
    });

    const getEstaciones = async()=>{
        state.loading = true;
        await AxiosInstance.get('/api/v1/admin/estaciones')
            .then(resp=>{
                state.data = resp.data;
            })
            .catch(err=>{
                state.error = true;
                console.log(err);
            })
        state.loading = false;
    }

    const getEstacion = async(id)=>{
        state.loading = true;
        await AxiosInstance.get('/api/v1/admin/estacion/'+id)
            .then(resp=>{
                state.data = resp.data;
            })
            .catch(err=>{
                state.error = true;
            })
        state.loading = false;
    }

    return {
        state,
        getEstaciones,
        getEstacion,
    }
}

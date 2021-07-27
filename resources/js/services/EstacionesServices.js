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

    const getEstaciones = async(sortBy=null)=>{
        state.loading = true;
        let url;
        if(sortBy){
            url = '/api/v1/admin/estaciones/'+sortBy;
        }else{
            url = '/api/v1/admin/estaciones';
        }
        await AxiosInstance.get(url)
            .then(resp=>{
                state.data = resp.data;
                state.data.forEach(el=>{
                    el.position = {
                        lat: Number(el.Latitud),
                        lng: Number(el.Longitud)
                    };
                })
                console.log(state.data);
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

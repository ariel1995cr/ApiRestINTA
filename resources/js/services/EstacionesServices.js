import AxiosInstance from "./AxiosInstance";

import {inject, reactive} from "vue";
import {useVueSweetAlert2} from "../useSwal2";

export const EstacionesServices = () =>{
    const $swal = useVueSweetAlert2();
    const InjectDirectly = inject("$swal");

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

    const updateEstacion = async(data)=>{
        state.loading = true;
        let response = await AxiosInstance.post('/api/v1/admin/estacion/'+data.value.id,{
            ...data.value
        })
            .then(resp=>{
                $swal.fire({
                    icon: "success",
                    title: "Coordenada actualizada.",
                    text: resp.data.message,
                });
                return true;
            })
            .catch(err=>{
                state.error = true;
                return false;
            })
        state.loading = false;
        return response;
    }


    return {
        state,
        getEstaciones,
        getEstacion,
        updateEstacion
    }
}

import AxiosInstance from "./AxiosInstance";

import { reactive } from "vue";

export const HistoricoEstacionServices = () =>{
    const state = reactive({
        loading: false,
        error: false,
        message: "",
        data: "",
        current_page: 1,
        links: [],
        per_page: null,
        total: null,
    });

    const getHistoricoEstacion = async(id, page=null)=>{
        state.loading = true;
        let url;
        if(page){
            url = page;
        }else{
            url = '/api/v1/admin/estacion/'+id+'/historico';
        }
        await AxiosInstance.get(url)
            .then(resp=>{
                state.data = resp.data.data;
                state.current_page = resp.data.current_page;
                state.links = resp.data.links;
                state.per_page = resp.data.per_page;
                state.total = resp.data.total;
            })
            .catch(err=>{
                state.error = true;
            })
        state.loading = false;
    }

    const getUltimaActualizacion = async(id)=>{
        state.loading = true;
        await AxiosInstance.get('/api/v1/admin/estacion/'+id)
            .then(resp=>{
                state.data = resp.data;
            })
            .catch()
        state.loading = false;
    }


    return {
        state,
        getHistoricoEstacion,
        getUltimaActualizacion,
    }
}

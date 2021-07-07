<template>
    <DataTable class="p-mt-4"  :value="stateUsuarios.data" :lazy="true" :paginator="true" :rows="10" v-model:filters="filters" ref="dt"
               :totalRecords="stateUsuarios.total" :loading="stateUsuarios.loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
               :globalFilterFields="['email']" responsiveLayout="scroll">
        <template #header>
            <div class="table-header">
                <Button @click="router.push({name: 'UsuariosAgregar'})" icon="pi pi-plus" label="Agregar" />
            </div>
        </template>
        <Column field="email" header="E-mail" filterMatchMode="startsWith" ref="email" :sortable="true">
            <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by email"/>
            </template>
        </Column>
        <Column field="apellido" header="Apellido" ref="apellido" :sortable="true">
        </Column>
        <Column field="nombre" header="Nombre" ref="nombre" :sortable="true">
        </Column>
        <Column field="rol" header="Rol" ref="rol" :sortable="true">
        </Column>
    </DataTable>
</template>

<script>
import { UsuariosServices } from "../../services/UsuariosServices";
import {onMounted, ref} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import router from "../../routes";
export default {
    name: "index.vue",
    components:{
      DataTable,
        Column,
        InputText,
        Button,
    },
    setup(){
        const { getUsuarios, state:stateUsuarios } = UsuariosServices();

        onMounted(async ()=>{
            lazyParams.value = {
                first: 0,
                rows: dt.value.rows,
                sortField: null,
                sortOrder: null,
                filters: filters.value
            };

            await getUsuarios();
        })

        const dt = ref();


        const filters = ref({
            'email': {value: '', matchMode: 'contains'},
        });
        const lazyParams = ref({});


        const onPage = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onSort = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onFilter = () => {
            lazyParams.value.filters = filters.value ;
            loadLazyData();
        }


        return{
            stateUsuarios,
            dt,
            filters,
            lazyParams,
            onPage,
            onSort,
            onFilter,
            router,
        }
    }
}
</script>

<style scoped>

</style>

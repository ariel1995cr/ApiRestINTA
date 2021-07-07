<template>
    <div class="p-col-12 p-md-4" v-for="item in menu">
        <CardMenu :to="item.to" :title="item.title"></CardMenu>
    </div>
</template>

<script>
import CardMenu from "../components/Shared/CardMenu";
import {reactive} from "vue";
export default {
    name: "IndexAdminPage",
    components: {CardMenu},
    setup(){
        const menu = reactive([
            {
                title: 'Estaciones',
                to: 'EstacionesIndex'
            },
            {
                title: 'Usuarios',
                to: 'UsuariosIndex',
            }
        ])
        return{
            menu
        }
    }
}
</script>

<style scoped>

</style>

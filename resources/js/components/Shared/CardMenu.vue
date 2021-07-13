<template>
    <p class="text-center fs-3">Bienvenido {{usuario.apellido}} {{usuario.nombre}}</p>
</template>

<script>
import router from "../../routes";
export default {
    components:{
    },
    name: "CardMenu.vue",
    props:{
      to: String,
      title: String,
    },
    setup(props){
        const redirectTo = () =>{
          router.push({name: props.to});
        };
        return{
            props,
            redirectTo,
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    line-height: 1.5;
    margin: 0;
}
.p-card:hover{
    border: 2px solid #4CD964;
    background-color: white;
}
</style>

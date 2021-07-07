<template>
    <Card @click="redirectTo" style="width: 100%; height: 6em">
        <template #title>
            <p class="p-text-center">{{props.title}}</p>
        </template>
    </Card>
</template>

<script>
import Card from "primevue/card";
import router from "../../routes";
export default {
    components:{
        Card,
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

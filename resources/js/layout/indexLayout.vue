<template>
<router-view></router-view>
    <Toast/>
</template>

<script>
import Toast from "primevue/Toast";
export default {
    components:{
        Toast
    },
    name: "indexLayout"
}
</script>

<style scoped>

</style>

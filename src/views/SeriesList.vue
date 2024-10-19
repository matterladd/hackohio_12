<script setup>
import SeriesCard from '../components/SeriesCard.vue';
import router from '../plugins/router';
</script>

<template>
    <div class="container" v-for="SeriesCard in 5">
        <SeriesCard class="card" @click="router.push('/SeriesPage')"/>
    </div>
</template>

<style scoped>
.container {
    margin-top: 15px
}
.card{
    cursor: pointer;

}
.card:hover{
    background-color: hsl(0, 0%, 70%);
}

</style>
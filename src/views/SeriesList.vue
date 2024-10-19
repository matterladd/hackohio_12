<script setup>
import SeriesCard from '../components/SeriesCard.vue';
import router from '../plugins/router';

const showInfo = (id) => {
    router.push({
        name: 'SeriesPage',
        params: { id }
    })
}
</script>


<template>
    <div class="container" v-for="i in 5">
        <SeriesCard class="card" @click="showInfo(i)"/>
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
<script setup>
import SeriesCard from '../components/SeriesCard.vue';
</script>

<template>
    <div class="container" v-for="SeriesCard in 5">
        <SeriesCard/>
    </div>
</template>

<style scoped>
.container {
    margin-top: 15px
}

</style>
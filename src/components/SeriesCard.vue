<script setup>
import { defineProps } from 'vue';

const props = defineProps({

});
</script>
<template>
    <div class="container">
    <div>
        <div>Title</div>  <!--Can be show title-->
    </div>
    <div>
        <div>Season: 6</div> <!--Can be show Seasons or something else-->
    </div>
    </div>

</template>

<style scoped>
.container{
    width: 300px;
    height: 50px;
    border-radius: 15px;
    padding: 5px 40px; /* padding top and botton 5px, left and right 40px */
    background-color: #a6a6a6;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
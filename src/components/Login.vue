<script setup>
import { auth, googleProvider } from "@/firebase/firebaseClient"
import { signInWithPopup } from "firebase/auth";
import router from '@/src/plugins/router.js'
const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(auth, googleProvider)
        if(result){
            router.push('/test')
        }else {
            throw new error
        }

    }catch (error){
        console.log(error)
    }    
}
</script>

<template>
    <div>
        <button @click="signInWithGoogle()">Sign In with Google</button>
    </div>
</template>

<style scoped>

</style>

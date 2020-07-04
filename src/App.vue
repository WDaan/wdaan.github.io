<template>
    <v-app class="bg-black">
        <NavBar />
        <v-main class="bg-black">
            <router-view />
        </v-main>
        <Footer />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default Vue.extend({
    name: 'App',
    components: { NavBar, Footer }
})
</script>

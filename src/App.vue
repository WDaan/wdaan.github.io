<template>
    <div class="layout">
        <NavBar />
        <router-view />
        <Footer />
    </div>
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

<style>
.layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>

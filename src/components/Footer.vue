<template>
    <v-footer height="auto" class="bg-black small text-center text-white-50">
        <div class="container">Ur a nosey one, aren't ya?</div>
    </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style>
footer {
    font-size: 1.2em !important;
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 1rem 0em;
}
</style>

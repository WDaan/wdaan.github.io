<template>
    <section>
        <div class="bg-black mt-5">
            <div class="container text-center mt-10">
                <h2 class="text-uppercase mb-5 mx-auto text-center">
                    Storage info
                </h2>
                <div class="mt-10">
                    <v-progress-circular
                        class="mx-3 progress"
                        :rotate="270"
                        :size="200"
                        :value="33"
                        :width="12"
                        color="#64a19d"
                        >{{ 33 }}</v-progress-circular
                    >
                    <v-progress-circular
                        class="mx-3 progress"
                        :rotate="270"
                        :size="200"
                        :value="33"
                        :width="12"
                        color="#64a19d"
                        >{{ 33 }}</v-progress-circular
                    >
                    <v-progress-circular
                        class="mx-3 progress"
                        :rotate="270"
                        :size="200"
                        :value="33"
                        :width="12"
                        color="#64a19d"
                        >{{ 33 }}</v-progress-circular
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class StorageSection extends Vue {}
</script>

<style scoped>
@media (max-width: 550px) {
    .progress {
        margin: 1em;
        background-color: #fff;
        border-radius: 50%;
        font-size: 1em;
    }
}

@media (min-width: 551px) {
    .progress {
        margin: 1em;
        background-color: #fff;
        border-radius: 50%;
        font-size: 1.6em;
    }
}
</style>

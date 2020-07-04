<template>
    <section class="contact-section bg-black">
        <div class="container mt-10 pt-10">
            <div class="row">
                <div class="col-md-4 mb-3 mb-md-0">
                    <a target="_blank" href="https://wdaan.github.io/myNotes/">
                        <div class="card card1 py-4 h-100">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase m-0 txt">Notes</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50 txt">
                                    Simple notes web app, made using Angular
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <a
                        target="_blank"
                        href="https://wdaan.github.io/Survival_of_the_Fittest/"
                    >
                        <div class="card card1 py-4 h-100">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase m-0 txt">
                                    Survival of the Fittest
                                </h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50 txt">
                                    Simple machine learning example
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <a
                        target="_blank"
                        href="https://github.com/WDaan/VueTorrent"
                    >
                        <div class="card card1 py-4 h-100">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase m-0 txt">
                                    VueTorrent
                                </h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50 txt">
                                    A Vuejs WEBUI for qBittorrent
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'

import SetNavTitle from '@/mixins/SetNavTitle'

@Component({
    name: 'Projects'
})
export default class Projects extends SetNavTitle {}
</script>

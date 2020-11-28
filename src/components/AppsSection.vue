<template>
    <section id="Apps" class="contact-section bg-black">
        <div class="container">
            <h2 class="text-uppercase mb-0 mx-auto text-center"></h2>
            <div class="row">
                <div
                    class="col-md-4 mb-3 mb-md-0 mt-5"
                    v-for="app in apps"
                    :key="app.name"
                >
                    <div
                        class="card card1 py-4 h-100"
                        style="cursor: pointer"
                        @click="openUrl(app.url)"
                    >
                        <div class="card-body text-center">
                            <h4 class="text-uppercase m-0 txt">
                                {{ app.name }}
                            </h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50 txt">
                                {{ app.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface App {
    name: string
    url: string
    description: string
}

@Component
export default class AppsSection extends Vue {
    apps: App[] = [
        {
            name: 'Filerun',
            url: 'https://files.wdaan.xyz/',
            description: 'Web based file browser'
        },
        {
            name: 'Plex',
            url: 'https://app.plex.tv',
            description: 'Films en Series streamen van overal'
        },
        {
            name: 'Qbit',
            url: 'https://qbitreg.wdaan.xyz',
            description: 'Remote downloaden van overal'
        },
        {
            name: 'Portainer',
            url: 'https://portainer.wdaan.xyz',
            description: 'Manage docker containers'
        },
        {
            name: 'Nginx',
            url: 'https://nginx.wdaan.xyz',
            description: 'Reverse proxy manager'
        },
        {
            name: 'Vuetorrent',
            url: 'https://web.wdaan.xyz',
            description: 'Vuetorrent download count'
        }
    ]

    openUrl(url: string) {
        window.open(url)
    }
}
</script>

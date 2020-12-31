<template>
  <section class="w-full pb-12 pt-4  rounded mx-auto bg-white shadow-md">
    <div class=" mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Apps
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <a
            style="cursor: pointer"
            target="_blank"
            v-for="app in apps"
            :key="app.name"
            @click="openUrl(app.url)">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img :src="app.icon"/>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  {{ app.name }}
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  {{ app.description }}
                </dd>
              </div>
            </div>
          </a>
        </dl>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface App {
    name: string;
    url: string;
    description: string;
    icon: string;
}

export default defineComponent({
  data() {
    return {
      apps: [
        {
          name: 'Filerun',
          url: 'https://files.wdaan.xyz/',
          description: 'Web based file browser',
          icon: require('@/assets/logos/folder.svg')
        },
        {
          name: 'Plex',
          url: 'https://app.plex.tv',
          description: 'Stream Movies and TV Shows',
          icon: require('@/assets/logos/plex.svg')
        },
        {
          name: 'Portainer',
          url: 'https://portainer.wdaan.xyz',
          description: 'Manage Docker containers',
          icon: require('@/assets/logos/anchor.svg')
        },
        {
          name: 'Nginx',
          url: 'https://nginx.wdaan.xyz',
          description: 'Reverse proxy manager',
          icon: require('@/assets/logos/cloud.svg')
        },
        {
          name: 'Vuetorrent',
          url: '/vuetorrent',
          description: 'Vuetorrent download count',
          icon: require('@/assets/logos/vue.svg')
        }
      ] as App[]
    }
  },
  methods: {
    openUrl(url: string) {
      if (url.includes('vuetorrent')) {
        return this.$router.push('/vuetorrent')
      }
      window.open(url)
    }
  }

})
</script>

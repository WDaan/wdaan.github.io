<template>
  <section class="py-10 bg-gray-50">
    <div class="pb-12 pt-4 w-10/12 rounded mx-auto bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <a
              target="_blank"
              v-for="p in projects"
              :key="p.name"
              :href="p.link">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <!-- Heroicon name: globe-alt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    {{ p.name }}
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    {{ p.description }}
                  </dd>
                </div>
              </div>
            </a>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
    icon: string;
    name: string;
    description: string;
    link: string;
}

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      projects: [{
        icon: '',
        name: 'Vuetorrent',
        description: 'The sleekest looking WEBUI for qBittorrent made with Vuejs!',
        link: 'https://github.com/WDaan/VueTorrent'

      },
      {
        icon: '',
        name: 'Survival of the Fittest',
        description: '    Simple machine learning example',
        link: 'https://wdaan.github.io/Survival_of_the_Fittest/'

      },
      {
        icon: '',
        name: 'Notes',
        description: 'Simple notes web app, made using Angular',
        link: 'https://wdaan.github.io/myNotes/'

      },
      {
        icon: '',
        name: 'Dash',
        description: 'A minimal, customizable dashboard made with Vuejs!',
        link: 'https://github.com/WDaan/dash'

      },
      {
        icon: '',
        name: 'Vives Climate Monitor',
        description: 'Full software stack to turn Pi4\'s into climate monitors',
        link: 'https://gitlab.com/vives-climate-monitor'
      }
      ] as Project[]
    }
  }
})
</script>

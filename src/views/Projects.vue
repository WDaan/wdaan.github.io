<template>
  <section class="py-10 bg-gray-50">
    <div class="pb-12 pt-4 w-10/12 rounded mx-auto bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="lg:text-center">
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 gap-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8">
            <a
              target="_blank"
              v-for="p in projects"
              :key="p.name"
              :href="p.link"
              class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img v-if="p.icon" :src="p.icon"/>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900 grid grid-cols-8 gap-4">
                  <span class="col-span-4"> {{ p.name }} </span>
                  <div v-if="p.stars" class="gray-100 btn flex col-span-1">
                    <span class="text-white flex bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold" title="">
                      <svg
                        style="width: 1.3em"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="gray-300">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span class="ml-2"> {{ p.stars }} </span>
                    </span>
                  </div>
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  {{ p.description }}
                </dd>
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
import github from '@/services/Github'

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      repos: [
        { name: 'VueTorrent', icon: require('@/assets/logos/vue.svg') },
        { name: 'myNotes', icon: require('@/assets/logos/note.svg') },
        { name: 'dash', icon: require('@/assets/logos/vue.svg') },
        { name: 'Survival_of_the_Fittest', icon: require('@/assets/logos/neural.svg') }
      ],
      projects: [
        {
          icon: 'https://assets.gitlab-static.net/uploads/-/system/group/avatar/9610531/favicon-192x192.png?width=64',
          name: 'Vives Climate Monitor',
          description: 'Full software stack to turn Pi4\'s into climate monitors',
          link: 'https://gitlab.com/vives-climate-monitor'
        }
      ]
    }
  },
  mounted() {
    this.fetchRepos()
  },
  methods: {
    fetchRepos() {
      this.repos.forEach((repo: any) => {
        github.getRepoInfo(repo.name)
          .then((r: any) => this.projects.push({ ...r, icon: repo.icon }))
      })
    }
  }
})
</script>

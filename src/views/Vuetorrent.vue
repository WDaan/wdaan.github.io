<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
          Vuetorrent Download Count
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto mt-10 mb-5 w-11/12 md:w-8/12">
        <div class="shadow-lg overflow-hidden rounded border-gray-200">
          <table class="w-full bg-white text-center">
            <thead class="bg-teal-500 text-white">
              <tr class="px-4">
                <th class="py-3 px-4 uppercase font-semibold text-sm">
                  Version
                </th>
                <th class="py-3 px-4 uppercase font-semibold text-sm">
                  Published at
                </th>
                <th class="py-3 px-4 uppercase font-semibold text-sm">
                  # of Downloads
                </th>
              </tr>
            </thead>
            <tbody id="tbody" class="text-gray-700" v-if="releases.length">
              <tr v-for="r in releases" :key="r.name">
                <th class="py-3 px-4">{{ r.name }}</th>
                <td class="py-3 px-4"> {{ r.date }} </td>
                <td class="py-3 px-4"> {{ r.downloadCount }}</td>
              </tr>
              <tr class="bg-gray-200">
                <th class="py-3 px-4">Total</th>
                <td class="py-3 px-4"> </td>
                <td class="py-3 px-4"> {{ total }} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
class Release {
    public downloadCount: number
    public date: string
    constructor(
        public name: string,
        date: Date,
        assets: any
    ) {
      this.downloadCount = assets[0].download_count || 0
      this.date = new Date(date).toLocaleString()
    }
}

export default defineComponent({
  data() {
    return {
      releases: [] as Release[],
      total: 0
    }
  },
  mounted() {
    this.fetchReleases()
  },
  methods: {
    fetchReleases() {
      axios.get('https://api.github.com/repos/wdaan/vuetorrent/releases')
        .then(res => res.data)
        .then(data => {
          this.releases = data.map((release: any) => {
            this.total += release.assets[0].download_count || 0

            return new Release(release.name, release.published_at, release.assets)
          })
        })
    }
  }
})
</script>

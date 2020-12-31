<template>
  <div class="py-4 bg-gray-50">
    <div class="grid grid-cols-1 gap-2 mt-5">
      <div class="mx-auto w-3/4 rounded overflow-hidden shadow-lg bg-white">
        <div class="px-4 py-2">
          <div class="font-bold text-teal-500 text-4xl mb-2 text-center">
            VueTorrent Download Counter
          </div>
        </div>
      </div>
    </div>
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
import github from '@/services/Github'

export default defineComponent({
  data() {
    return {
      releases: [],
      total: 0
    }
  },
  mounted() {
    this.fetchReleases()
  },
  methods: {
    fetchReleases() {
      github.getRepoReleases('vuetorrent')
        .then((res: any) => {
          this.releases = res.releases
          this.total = res.total
        })
    }
  }
})
</script>

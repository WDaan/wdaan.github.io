<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-gray-50 text-2xl">Yeet</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <router-link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</router-link>
              <router-link to="/vuetorrent" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Vuetorrent</router-link>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="menuOpen = !menuOpen"
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!--
      Mobile menu, toggle classes based on menu state.
      Open: "block", closed: "hidden"
    -->
    <div class="md:hidden" :class="`transition-all ease-${menuOpen ? 'out' : 'in'} duration-${menuOpen ? '100' : '75'} h-${menuOpen ? '0' : '100'}`">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</router-link>
        <router-link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</router-link>
        <router-link to="/vuetorrent" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Vuetorrent</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      scrollPosY: false,
      menuOpen: false,
      disabled: false
    }
  },

  mounted() {
    this.updateScroll()
    window.addEventListener('scroll', this.updateScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll)
  },

  methods: {
    updateScroll() {
      this.scrollPosY = window.scrollY > 0
    }
  }

})
</script>

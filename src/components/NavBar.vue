<template>
    <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
        :class="scrollPosY ? 'navbar-shrink' : ''"
    >
        <div class="container">
            <a
                class="navbar-brand"
                style="font-weight: 500; font-size: 1.4em"
                >{{ navBarTitle }}</a
            >
            <button
                class="navbar-toggler navbar-toggler-right"
                @click="toggleMenu"
            >
                Menu
                <v-icon small color="#64a19d">mdi-menu</v-icon>
            </button>
            <div
                :class="menu ? '' : 'collapse'"
                class="navbar-collapse"
                id="navbarResponsive"
            >
                <ul class="navbar-nav ml-auto">
                    <router-link
                        to="/"
                        @click.native="toggleMenu"
                        class="nav-item mt-2"
                    >
                        <a class="js-scroll-trigger navbar-item">Apps</a>
                    </router-link>
                    <router-link
                        to="/radio"
                        @click.native="toggleMenu"
                        class="nav-item mt-2"
                    >
                        <a class="navbar-item">Radio</a>
                    </router-link>
                    <router-link
                        to="/projects"
                        @click.native="toggleMenu"
                        class="nav-item mt-2"
                    >
                        <a class="navbar-item">Projects</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
    computed: mapState(['navBarTitle'])
})
export default class NavBar extends Vue {
    scrollPosY = false
    menu = false
    disabled = false

    mounted() {
        this.updateScroll()
        window.addEventListener('scroll', this.updateScroll)
    }

    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScroll)
    }

    updateScroll() {
        this.scrollPosY = window.scrollY > 0
    }

    toggleMenu() {
        this.menu = !this.menu
    }
}
</script>

<style scoped lang="scss">
#mainNav {
    min-height: 56px;
    background-color: #fff;
}

#mainNav .navbar-toggler {
    font-size: 80%;
    padding: 0.75rem;
    color: #64a19d;
    border: 1px solid #64a19d;
}

#mainNav .navbar-toggler:focus {
    outline: 0;
}

#mainNav .navbar-toggler:hover {
    background-color: #64a19d;
    color: #fff;

    i {
        color: #fff !important;
        transition: color ease 0.5s;
    }
}

#mainNav .navbar-brand {
    color: #161616;
    font-weight: 700;
    padding: 0.9rem 0;
}

.nav-item-spacing {
    margin-bottom: 15px !important;
}

#mainNav .navbar-nav .nav-item:hover {
    color: fade(white, 80%);
    outline: 0;
    background-color: transparent;
}

#mainNav .navbar-nav .nav-item:active,
#mainNav .navbar-nav .nav-item:focus {
    outline: 0;
    background-color: transparent;
}

@media (max-width: 991px) {
    ul {
        a {
            color: #64a19d !important;
        }
        a:hover {
            color: #4f837f !important;
        }
    }
}

@media (min-width: 992px) {
    #mainNav {
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: none;
        background-color: transparent;
        -webkit-transition: background-color 0.3s ease-in-out;
        transition: background-color 0.3s ease-in-out;
    }

    #mainNav .navbar-brand {
        padding: 0.5rem 0;
        color: rgba(255, 255, 255, 0.5);
    }

    #mainNav .navbar-item {
        -webkit-transition: none;
        transition: none;
        padding: 2rem 1.5rem;
        color: rgba(255, 255, 255, 0.5);
    }

    #mainNav .navbar-item:hover {
        color: rgba(255, 255, 255, 0.75);
    }

    #mainNav .navbar-item:active {
        color: #fff;
    }

    #mainNav.navbar-shrink {
        background-color: #fff;
    }

    #mainNav.navbar-shrink .navbar-brand {
        color: #161616;
    }

    #mainNav.navbar-shrink .navbar-item {
        color: #161616;
        padding: 1.5rem 1.5rem 1.25rem;
        border-bottom: 0.25rem solid transparent;
    }

    #mainNav.navbar-shrink .navbar-item:hover {
        color: #64a19d;
    }

    #mainNav.navbar-shrink .navbar-item:active {
        color: #467370;
    }

    #mainNav.navbar-shrink .navbar-item.active {
        color: #64a19d;
        outline: 0;
        border-bottom: 0.25rem solid #64a19d;
    }
}
</style>

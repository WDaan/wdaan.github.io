<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Daan Wijns</a>
            <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <router-link to="/" class="nav-item mt-2">
                        <a class="js-scroll-trigger navbar-item">Apps</a>
                    </router-link>
                    <li class="nav-item mt-2">
                        <a class="navbar-item" href="html/radio.html">Radio</a>
                    </li>
                    <router-link to="/projects" class="nav-item mt-2">
                        <a class="navbar-item">Projects</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {}
</script>

<style>
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
<template>
    <div>
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Yeet</h1>
                    <a href="#Apps" class="btn btn-primary js-scroll-trigger mt-5">Get Started</a>
                </div>
            </div>
        </header>
        <section id="Apps" class="contact-section bg-black">
            <AppsSection />
        </section>
    </div>
</template>

<script>
import AppsSection from '@/components/AppsSection'
export default {
    name: 'Home',
    components: { AppsSection }
}
</script>

<style scoped>
.masthead {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 35rem;
    padding: 15rem 0;
    background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(22, 22, 22, 0.1)),
            color-stop(75%, rgba(22, 22, 22, 0.5)),
            to(#161616)
        ),
        url(../img/bg-masthead.jpg);
    background: linear-gradient(
            to bottom,
            rgba(22, 22, 22, 0.1) 0,
            rgba(22, 22, 22, 0.5) 75%,
            #161616 100%
        ),
        url(../assets/img/bg-masthead.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
}

.masthead h1 {
    font-family: 'Varela Round';
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.8rem;
    background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0)
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.masthead h2 {
    max-width: 20rem;
    font-size: 1rem;
}

@media (min-width: 768px) {
    .masthead h1 {
        font-size: 4rem;
        line-height: 4rem;
    }
}

@media (min-width: 992px) {
    .masthead {
        height: 100vh;
        padding: 0;
    }

    .masthead h1 {
        font-size: 6.5rem;
        line-height: 6.5rem;
        letter-spacing: 0.8rem;
    }

    .masthead h2 {
        max-width: 30rem;
        font-size: 1.25rem;
    }
}

.bg-black {
    background-color: #161616 !important;
}

.contact-section {
    padding: 5rem 0 0;
}

.contact-section .card {
    border: 0;
    border-bottom: 0.25rem solid #64a19d;
}

h2 {
    color: #fff;
    border-bottom: 1px solid currentColor;
}

/* ---------------card animations---------------*/
.contact-section .card:hover {
    border: 0;
    border-bottom: 0.25rem solid #64a19d;
    /* background: #64a19d; */
    transform: scale(1.03);
}

.contact-section .card h4 {
    font-size: 1.6rem;
    font-family: 'Varela Round';
    text-transform: uppercase;
    letter-spacing: 0.15rem;
}

.contact-section .card hr {
    border-color: #64a19d;
    border-width: 0.25rem;
    width: 3rem;
}
</style>
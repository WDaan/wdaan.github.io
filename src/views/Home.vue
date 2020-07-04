<template>
    <div>
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Yeet</h1>
                    <a href="#Apps" class="btn btn-primary white--text mt-5"
                        >Get Started</a
                    >
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

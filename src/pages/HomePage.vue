<template>
    <!-- HEADER SECTION -->
    <headerComponent />

    <!-- SECTION ONE -->
    <div class=" flex flex-col items-center mt-10 md:flex-row-reverse md:justify-between md:p-10 md:pl-40">
        <img class="md:hidden" src="../assets/hero-sm.png" alt="">
        <img class="hidden md:block md:w-1/2 md:h-auto" src="../assets/hero-md.png" alt="">
        <div class="text-left ml-5">
            <h1 class="text-h2 text-primary font-roboto mt-20">Jij wilt koken!<br class="hidden md:block"> Wat nu?</h1>
            <p class="text-gray mt-5">Kijk nu bij onze cursussen en recepten!</p>
            <CustomRouterLink to="/course-overview">
                <button class="mt-20 bg-secondary text-LABEL text-white p-4 rounded-md">
                    NAAR CURSUSSEN
                </button>
            </CustomRouterLink>
        </div>
    </div>

    <!-- SECTION TWO -->
    <div>
        <h3 class="bg-accent text-h3 pt-10 mt-10 text-center md:text-left md:p-10 md:pl-40">Laatste cursussen</h3>
        <div class="bg-accent flex flex-col items-center md:flex-row md:justify-around md:pt-10">

            <!-- Course -->
            <CustomRouterLink to="/course/:courseId">
                <div class="relative">
                    <img class="mt-10 md:hidden" src="../assets/wok.png" alt="">
                    <img class="hidden md:block" src="../assets/wokken-md.png" alt="">
                    <div class="absolute bottom-10 left-10">
                        <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full">
                            <p class="text-text text-gray">Kees</p>
                        </div>
                        <h3 class="text-h3 text-white mt-5">Leren wokken</h3>
                    </div>
                </div>
            </CustomRouterLink>

            <!-- Course -->
            <CustomRouterLink to="/course/:courseId">
                <div class="relative">
                    <img class="mt-10 md:hidden" src="../assets/salade.png" alt="">
                    <img class="hidden md:block" src="../assets/salade-md.png" alt="">
                    <div class="absolute bottom-10 left-10">
                        <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full">
                            <p class="text-text text-gray">Petra</p>
                        </div>
                        <h3 class="text-h3 text-white mt-5">Maaltijd Salade</h3>
                    </div>
                </div>
            </CustomRouterLink>

            <!-- Course -->
            <CustomRouterLink to="/course/:courseId">
                <div class="relative">
                    <img class="mt-10 md:hidden" src="../assets/snijden.png" alt="">
                    <img class="hidden md:block" src="../assets/snijden-md.png" alt="">
                    <div class="absolute bottom-10 left-10">
                        <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full">
                            <p class="text-text text-gray">Edwin</p>
                        </div>
                        <h3 class="text-h3 text-white mt-5">Leren snijden</h3>
                    </div>
                </div>
            </CustomRouterLink>
        </div>

        <div class="bg-accent md:text-left md:p-10 md:pl-40">
            <!-- CTA BUTTON -->
            <CustomRouterLink to="/course-overview">
                <button class="mt-20 ml-5 mb-20 border border-primary text-LABEL text-primary px-6 py-2 rounded-md">
                    ALLE CURSUSSEN
                </button>
            </CustomRouterLink>
        </div>
    </div>

    <!-- FOOTER SECTION -->
    <footerComponent />
</template>

<script>
import headerComponent from '@/components/header-component.vue';
import footerComponent from '@/components/footer-component.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'HomePage',
    // ...
    components: { headerComponent, footerComponent, CustomRouterLink: RouterLink, }
}
</script>
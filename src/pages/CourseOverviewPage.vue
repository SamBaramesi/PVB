<template>
    <!-- HEADER SECTION -->
    <headerComponent />

    <!-- HERO SECTION -->
    <div class="text-center mt-10 mb-20 md:hidden">
        <h2 class="text-h2">Portfolio</h2>
        <p class="text-text mt-5">Agency provides a full service range including<br>technical skills, design,
            business<br>understanding.</p>
    </div>

    <div class="hidden md:block text-center">
        <h1 class="text-h1">cursussen</h1>
        <p class="text-text mt-5 mb-20">Hier staan alle cursussen die van jou een beginnend chefkok maken.</p>
    </div>

    <div class="bg-accent flex flex-col items-center py-20 md:grid md:grid-cols-2 md:gap-4 md:p-20 lg:grid lg:grid-cols-3 lg:gap-4 lg:p-20">

        <!-- Course -->
        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/snijden.png" alt="">
                <img class="hidden md:block" src="../assets/snijden-md.png" alt="">
                <div class="absolute bottom-10 left-10 lg:space-x-0 lg:left-5">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full">
                        <p class="text-text text-gray">Kees</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Leren snijden</h3>
                </div>
            </div>
        </CustomRouterLink>

        <!-- Course -->
        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/wok.png" alt="">
                <img class="hidden md:block" src="../assets/wokken-md.png" alt="">
                <div class="absolute bottom-10 space-x-4">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Edwin</p>
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
                <div class="absolute bottom-10 space-x-4 lg:space-x-0">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Edwin</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Maaltijd Salade</h3>
                </div>
            </div>
        </CustomRouterLink>

        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/salade.png" alt="">
                <img class="hidden md:block" src="../assets/salade-md.png" alt="">
                <div class="absolute bottom-10 space-x-4 lg:space-x-0">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Edwin</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Maaltijd Salade</h3>
                </div>
            </div>
        </CustomRouterLink>

        <!-- Course -->
        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/voorbereiding.png" alt="">
                <img class="hidden md:block" src="../assets/salade-md.png" alt="">
                <div class="absolute bottom-10 space-x-4 lg:space-x-0">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Petra</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Voorbereiding</h3>
                </div>
            </div>
        </CustomRouterLink>

        <!-- Course -->
        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/pannekoeken.png" alt="">
                <img class="hidden md:block" src="../assets/salade-md.png" alt="">
                <div class="absolute bottom-10 space-x-4 lg:space-x-0">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Kees</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Pannenkoeken</h3>
                </div>
            </div>
        </CustomRouterLink>

        <!-- Course -->
        <CustomRouterLink to="/course/:courseId">
            <div class="relative">
                <img class="mt-10 md:hidden" src="../assets/spaghetti.png" alt="">
                <img class="hidden md:block" src="../assets/salade-md.png" alt="">
                <div class="absolute bottom-10 space-x-1 lg:space-x-0">
                    <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full ml-5">
                        <p class="text-text text-gray">Edwin</p>
                    </div>
                    <h3 class="text-h3 text-white mt-5">Spagheti maken</h3>
                </div>
            </div>
        </CustomRouterLink>
    </div>

    <!-- FOOTER SECTION -->
    <footerComponent />
</template>

<script>
import headerComponent from '@/components/header-component.vue';
import footerComponent from '@/components/footer-component.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'CourseOverviewPage',
    components: { headerComponent, footerComponent, CustomRouterLink: RouterLink, }
}
</script>
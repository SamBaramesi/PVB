<template>
    <!-- INCLUDE HEADER COMPONENT -->
    <HeaderComponent />

    <!-- PAGE CONTAINER -->
    <div class="px-5 my-10">

        <!-- HEAD SECTION -->
        <div class="flex flex-col items-left mt-5 space-y-5 md:mx-40 lg:mx-60 xl:mx-80">
            <CustomRouterLink to="/course-overview">
                <div class="flex space-x-2 items-center text-title">
                    <i class="fas fa-arrow-left"></i>
                    <p class="text-LABEL">TERUG NAAR OVERZICHT</p>
                </div>
            </CustomRouterLink>

            <h3 class="text-h3 text-title">Maaltijd salade</h3>
        </div>

        <img class="mt-5 w-full md:hidden" src="../assets/salad.png" alt="">

        <div class="md:mx-40 lg:mx-60 xl:mx-80">
            <div class="flex flex-col items-left space-y-1 mt-5 md:flex-row md:justify-between">
                <p class="text-text_small text-gray-400">Geschreven door<span
                        class="text-title text-text_small ml-3">Petra</span></p>
                <p class="text-text_small text-gray-400">Datum<span
                        class="text-title text-text_small ml-3">07-12-2022</span>
                </p>
            </div>

            <!-- DESCRIPTION SECTION -->

            <div class="flex flex-col items-left space-y-5 mt-10">
                <p class="text-title text-text_big">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p class="text-gray-400 text-text_small">Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod.
                    Phasellus at eros Leo. Suspendisse placerat,</p>
            </div>

            <div class="flex flex-col items-left space-y-10 mt-10">
                <p class="text-title text-text_big">Titel met wat uitleg</p>
                <p class="text-gray-400 text-text_small">Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod.
                    Phasellus at eros Leo</p>
                <ul class="list-none text-text_small text-gray-600">
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        Ingredient nr 1
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        Ingredient 400gr
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        Ingredient 15 eetlepels
                    </li>
                </ul>
                <p class="text-gray-400 text-text_small">Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod.
                    Phasellus at eros Leo a mauris. Donec scelerisque a mauris. Donec
                    scelerisqu Donec scelerisqu </p>
            </div>

            <div class="flex flex-col items-left space-y-10 mt-10">
                <p class="text-title text-text_big">Nog een Titel met wat uitleg</p>
                <p class="text-gray-400 text-text_small">Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod.
                    Phasellus at eros Leo</p>
                <ol class="list-decimal list-inside text-text_small text-gray-600">
                    <li>Stap 1 snij ....</li>
                    <li>Doe nu de ....</li>
                    <li>Vul nu nog wat in,...</li>
                </ol>
                <p class="text-gray-400 text-text_small">Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod.
                    Phasellus at eros Leo a mauris. Donec scelerisque a mauris. Donec
                    scelerisqu Donec scelerisqu </p>
            </div>

        </div>

    </div>

    <!-- INCLUDE FOOTER -->
    <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/footer-component.vue';
import HeaderComponent from '@/components/header-component.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    name: "CoursePage",
    data() {
        return {
            // product: products.find( product => productId === this.$route.params.productId)
            course: {}
        }
    },
    components: { HeaderComponent, FooterComponent, CustomRouterLink: RouterLink, },
    created() {
        // this.fetchCourse()
    },
    methods: {
        fetchCourse() {
            const courseId = this.$route.params.courseId;
            console.log(courseId);
            const url = `http://localhost:8000/fetch-course/:${courseId}`;

            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    // this.course = response.data; // Update the courses data property with the fetched courses
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>
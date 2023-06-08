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

            <h3 class="text-h3 text-title">{{ course.name }}</h3>
        </div>

        <img class="mt-10 mx-auto w-[329px] h-[201px] md:w-[970px] md:h-[592px] object-cover"
            :src="`../assets/${course.imageName}`" alt="">

        <div class="md:mx-40 lg:mx-60 xl:mx-80">
            <div class="flex flex-col items-left space-y-1 mt-5 md:flex-row md:justify-between">
                <p class="text-text_small text-gray-400">Geschreven door<span class="text-title text-text_small ml-3">{{
                    course.writtenBy }}</span></p>
                <p class="text-text_small text-gray-400">Datum<span class="text-title text-text_small ml-3">{{
                    course.dateMade }}</span>
                </p>
            </div>

            <!-- DESCRIPTION SECTION -->

            <div class="flex flex-col items-left space-y-5 mt-10">
                <p class="text-title text-text_big">{{ course.title1 }}</p>
                <p class="text-gray-400 text-text_small">{{ course.desc1 }}</p>
            </div>

            <div class="flex flex-col items-left space-y-10 mt-10">
                <p class="text-title text-text_big">{{ course.title2 }}</p>
                <p class="text-gray-400 text-text_small">{{ course.desc2 }}</p>
                <ul class="list-none text-text_small text-gray-600">
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {{ course.ingredient1 }}
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {{ course.ingredient2 }}
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {{ course.ingredient3 }}
                    </li>
                </ul>
                <p class="text-gray-400 text-text_small">{{ course.desc3 }}</p>
            </div>

            <div class="flex flex-col items-left space-y-10 mt-10">
                <p class="text-title text-text_big">{{ course.title3 }}</p>
                <p class="text-gray-400 text-text_small">{{ course.desc4 }}</p>
                <ol class="list-decimal list-inside text-text_small text-gray-600">
                    <li>{{ course.step1 }}</li>
                    <li>{{ course.step2 }}</li>
                    <li>{{ course.step3 }}</li>
                </ol>
                <p class="text-gray-400 text-text_small">{{ course.desc5 }}</p>
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
        this.fetchCourse()
    },
    methods: {
        fetchCourse() {
            const courseId = this.$route.params.courseId;
            console.log(courseId);
            const url = `http://localhost:8000/fetch-course/${courseId}`;

            axios.get(url)
                .then(response => {
                    this.course = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>
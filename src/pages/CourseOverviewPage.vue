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

    <div
        class="bg-accent flex flex-col items-center py-20 md:grid md:grid-cols-2 md:gap-4 md:p-20 lg:grid lg:grid-cols-3 lg:gap-4 lg:p-20">
        <div v-for="course in courses" :key="course._id">
            <!-- Course -->
            <router-link :to="`/course/${course._id}`">
                <div class="relative">
                    <img class="mt-10 w-[341px] h-[438px] md:w-[448px] md:h-[576px] object-cover"
                        :src="`../assets/${course.imageName}`" alt="">
                    <div class="absolute bottom-10 left-10">
                        <div class="flex items-center justify-center bg-white w-20 h-10 rounded-full">
                            <p class="text-text text-gray">{{ course.writtenBy }}</p>
                        </div>
                        <h3 class="text-h3 text-white mt-5 md:text-h4 lg:text-h3">{{ course.name }}</h3>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <!-- FOOTER SECTION -->
    <footerComponent />
</template>

<script>
import headerComponent from '@/components/header-component.vue';
import footerComponent from '@/components/footer-component.vue';
import axios from 'axios';


export default {
    name: 'CourseOverviewPage',
    components: { headerComponent, footerComponent, },
    data() {
        return {
            courses: {}
        }
    },
    created() {
        this.fetchCourses()
    },
    methods: {
        fetchCourses() {
            const url = 'http://localhost:8000/fetch-courses';

            axios.get(url)
                .then(response => {
                    this.courses = response.data; // Update the courses data property with the fetched courses
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>
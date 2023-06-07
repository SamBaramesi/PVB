<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-4">Edit Course</h2>
        <form @submit.prevent="saveChanges" class="max-w-sm">
            <div class="mb-4">
                <label for="courseName" class="block text-gray-700 text-sm font-bold mb-2">Course Name:</label>
                <input id="courseName" type="text" v-model="editedCourse.name"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="imageName" class="block text-gray-700 text-sm font-bold mb-2">Image Name:</label>
                <input id="imageName" type="text" v-model="editedCourse.imageName"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="writtenBy" class="block text-gray-700 text-sm font-bold mb-2">writtenBy:</label>
                <input id="writtenBy" type="text" v-model="editedCourse.writtenBy"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="dateMade" class="block text-gray-700 text-sm font-bold mb-2">dateMade:</label>
                <input id="dateMade" type="text" v-model="editedCourse.dateMade"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="title1" class="block text-gray-700 text-sm font-bold mb-2">title1:</label>
                <input id="title1" type="text" v-model="editedCourse.title1"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="desc1" class="block text-gray-700 text-sm font-bold mb-2">desc1:</label>
                <input id="desc1" type="text" v-model="editedCourse.desc1"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="title2" class="block text-gray-700 text-sm font-bold mb-2">title2:</label>
                <input id="title2" type="text" v-model="editedCourse.title2"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="desc2" class="block text-gray-700 text-sm font-bold mb-2">desc2:</label>
                <input id="desc2" type="text" v-model="editedCourse.desc2"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="ingredient1" class="block text-gray-700 text-sm font-bold mb-2">ingredient1:</label>
                <input id="ingredient1" type="text" v-model="editedCourse.ingredient1"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="ingredient2" class="block text-gray-700 text-sm font-bold mb-2">ingredient2:</label>
                <input id="ingredient2" type="text" v-model="editedCourse.ingredient2"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="ingredient3" class="block text-gray-700 text-sm font-bold mb-2">ingredient3:</label>
                <input id="ingredient3" type="text" v-model="editedCourse.ingredient3"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="desc3" class="block text-gray-700 text-sm font-bold mb-2">desc3:</label>
                <input id="desc3" type="text" v-model="editedCourse.desc3"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="title3" class="block text-gray-700 text-sm font-bold mb-2">title3:</label>
                <input id="title3" type="text" v-model="editedCourse.title3"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="desc4" class="block text-gray-700 text-sm font-bold mb-2">desc4:</label>
                <input id="desc4" type="text" v-model="editedCourse.desc4"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="step1" class="block text-gray-700 text-sm font-bold mb-2">step1:</label>
                <input id="step1" type="text" v-model="editedCourse.step1"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="step2" class="block text-gray-700 text-sm font-bold mb-2">step2:</label>
                <input id="step2" type="text" v-model="editedCourse.step2"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="step3" class="block text-gray-700 text-sm font-bold mb-2">step3:</label>
                <input id="step3" type="text" v-model="editedCourse.step3"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- Add other form fields for editing the course details -->
            <div class="mb-4">
                <label for="desc5" class="block text-gray-700 text-sm font-bold mb-2">desc5:</label>
                <input id="desc5" type="text" v-model="editedCourse.desc5"
                    class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>


            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save Changes
            </button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'EditCoursePage',
    data() {
        return {
            editedCourse: {
                name: '',
                imageName: "",
                writtenBy: "",
                dateMade: "",
                title1: "",
                desc1: "",
                title2: "",
                desc2: "",
                ingredient1: "",
                ingredient2: "",
                ingredient3: "",
                desc3: "",
                title3: "",
                desc4: "",
                step1: "",
                step2: "",
                step3: "",
                desc5: ""
                // Add other properties for the course details that you want to edit
            }
        };
    },
    methods: {
        saveChanges() {
            const courseId = this.$route.params._id; // Get the course ID from the route parameters
            const url = `http://localhost:8000/save-course/${courseId}`; // Replace with your actual API endpoint for updating a course

            axios.put(url, this.editedCourse)
                .then(response => {
                    // Handle successful response, e.g., redirect or display success message
                    console.log(response.data);
                    // Redirect example:
                    this.$router.push('/admin-page'); // Redirect the admin back to the admin page
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>
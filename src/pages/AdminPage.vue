<template>
    <div class="container mx-auto p-8">
        <div class="flex items-center mb-4">
            <CustomRouterLink to="/home" class="flex items-center text-title">
                <i class="fas fa-arrow-left mr-2"></i>
                <span class="text-sm font-medium">BACK TO HOME</span>
            </CustomRouterLink>
        </div>

        <h1 class="text-2xl font-bold text-center mb-4">ADMIN PAGE</h1>
        <h2 class="text-lg text-center mb-8">Manage Courses</h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="course in courses" :key="course._id" class="bg-white p-4 shadow rounded">
                <div class="mb-4">
                    <img :src="'../assets/' + course.imageName" alt="Course Image" class="w-full h-48 object-cover rounded">
                </div>
                <h3 class="text-lg font-semibold text-title mb-2">{{ course.name }}</h3>
                <div class="flex justify-center space-x-4">
                    <router-link :to="`/edit-course/${course._id}`"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</router-link>
                    <button @click="deleteCourse(course)"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-8">
            <form @submit.prevent="addCourse">
                <input type="text" v-model="newCourse.name" placeholder="Course Name" required
                    class="mr-2 px-4 py-2 border border-gray-300 rounded">
                <input type="text" v-model="newCourse.imageName" placeholder="Image Name" required
                    class="mr-2 px-4 py-2 border border-gray-300 rounded">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                    Course</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
    name: 'AdminPage',
    data() {
        return {
            courses: [],
            newCourse: {
                name: '',
                imageName: ''
            }
        }
    },
    components: {
        CustomRouterLink: RouterLink
    },
    created() {
        this.fetchCourses();
    },
    methods: {
        // METHOD 1
        getLoginToken() {
            localStorage.getItem('token');
        },
        // METHOD 2
        fetchCourses() {
            const url = 'http://localhost:8000/fetch-courses';

            // Include the login token in the request headers
            const config = {
                headers: {
                    Authorization: `Bearer ${this.getLoginToken()}`
                }
            };

            axios.get(url, config)
                .then(response => {
                    this.courses = response.data; // Update the courses data property with the fetched courses
                })
                .catch(error => {
                    console.error(error);
                });
        },

        // METHOD 3
        deleteCourse(course) {
            const confirmation = confirm('Are you sure you want to delete this course?');
            if (!confirmation) {
                return; // If user cancels the deletion, exit the method
            }

            const url = `http://localhost:8000/del-course/${course._id}`;

            // Include the login token in the request headers
            const config = {
                headers: {
                    Authorization: `Bearer ${this.getLoginToken()}` // Replace with your method for retrieving the login token
                }
            };

            axios.delete(url, config)
                .then(response => {
                    // Handle successful response
                    alert(response.data.message)
                    this.fetchCourses(); // Fetch courses again to update the list after deletion
                })
                .catch(error => {
                    console.error(error);
                });
        },

        // METHOD 4
        addCourse() {
            const url = 'http://localhost:8000/add-course';

            const config = {
                headers: {
                    Authorization: `Bearer ${this.getLoginToken()}` // Replace with your method for retrieving the login token
                }
            };

            axios.post(url, this.newCourse, config)
                .then(response => {
                    // Handle successful response
                    if (response) {
                        this.newCourse = { // Reset the new course input fields after successful addition
                            name: '',
                            imageName: ''
                        };
                    }
                    this.fetchCourses(); // Fetch courses again to update the list after addition
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>
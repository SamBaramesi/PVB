<template>
    <div class="min-h-screen flex items-center justify-center bg-primary">
        <div class="max-w-md w-full">
            <div class="text-center text-white text-h3 mb-6">CMS Login</div>
            <form @submit.prevent="handleLogin" class="bg-accent shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input v-model="username"
                        class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="email" placeholder="Enter your username" required>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="password"
                        class="appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Enter your password" required>
                    <p v-if="showError" class="text-red-500 text-xs italic">Invalid username or password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="hover:bg-secondary bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            showError: false
        };
    },
    methods: {
        handleLogin() {
            axios.post('http://localhost:8000/login', { username: this.username, password: this.password })
                .then(response => {
                    // Assuming the token is returned in the response data
                    const token = response.data.token;

                    // Save the token (e.g., in local storage or Vuex store)
                    localStorage.setItem('token', token);

                    // Redirect the user if the login is successful
                    this.$router.push('/admin-page');
                })
                .catch(error => {
                    // Handle any errors that occurred during the login request
                    alert("Login Failed, try again")
                    console.error('Login failed:', error);
                });
        }
    }
};
</script>
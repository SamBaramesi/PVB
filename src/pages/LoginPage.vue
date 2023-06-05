<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full">
            <div class="text-center font-bold text-2xl mb-6">CMS Login</div>
            <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input v-model="username"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Enter your username" required>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="password"
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Enter your password" required>
                    <p v-if="showError" class="text-red-500 text-xs italic">Invalid username or password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            showError: false
        };
    },
    methods: {
        login() {
            // Perform login logic here (e.g., API request to validate credentials)
            if (this.username === 'admin' && this.password === 'password') {
                // Successful login
                this.showError = false;
                // Redirect to the dashboard or desired page
                // You can use Vue Router to handle the navigation
            } else {
                // Invalid login
                this.showError = true;
            }
        }
    }
};
</script>
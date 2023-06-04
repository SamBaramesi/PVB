<template>
    <header class="bg-white">
        <div class="flex justify-between items-center py-4 px-6" v-if="!isMenuOpen">
            <div class="flex items-center">
                <img class="h-8 w-auto" src="../assets/schildRGB.png" alt="Logo">
            </div>
            <nav class="hidden md:flex space-x-10">
                <router-link to="/" class="">Home</router-link>
                <router-link to="/course-overview">Cursussen</router-link>
            </nav>
            <div class="md:hidden">
                <button class="flex items-center" @click="isMenuOpen = !isMenuOpen">
                    <img class="h-8 w-auto" src="../assets/menu.png" alt="Menu.png">
                </button>
            </div>
            <div class="hidden md:flex">
                <button class="flex items-center"></button>
            </div>
        </div>
        <div class="flex flex-col-reverse items-center space-y-1 bg-white mb-3" v-if="isMenuOpen">
            <nav class="flex flex-col items-center">
                <!-- Menu items -->
                <router-link to="/" class="">Home</router-link>
                <router-link to="/course-overview">Cursussen</router-link>
            </nav>
            <div class="md:hidden">
                <button class="" @click="isMenuOpen = !isMenuOpen">
                    <img class="h-8 w-auto" src="../assets/menu.png" alt="Menu.png">
                </button>
            </div>
        </div>
    </header>
    <img class="w-full h-5" src="../assets/seperatorLG.png" alt="">
</template>

<script>
export default {
    name: 'Header-Component',
    data() {
        return {
            isMenuOpen: false
        };
    }
    // ...
}
</script>
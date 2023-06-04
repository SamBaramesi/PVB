<template>
    <div class="bg-primary">
        <div class="md:flex md:justify-around">
            <div class="md:w-1/4 md:flex md:justify-between md:mr-20 md:mt-20">
                <div class="sm:pt-20 md:pt-0 text-left">
                    <h4 class="text-h4 text-white text-center md:inline-block md:text-left">Leger des Heils</h4>
                    <h4 class="text-h4 text-white text-center md:block md:text-left">Enkeltje Zelfstandig</h4>
                </div>
                <div class="text-center text-white">
                    <p class="mt-10 md:mt-0 text-secondary text-LABEL">MENU</p>
                    <p class="mt-5">About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div class="flex justify-center items-center space-x-2 mt-10 md:inline-flex">
                <div class="w-12 h-12 rounded-full bg-secondary flex justify-center items-center">
                    <i class="fab fa-facebook-f text-white text-lg"></i>
                </div>
                <div class="w-12 h-12 rounded-full bg-secondary flex justify-center items-center">
                    <i class="fab fa-twitter text-white text-lg"></i>
                </div>
                <div class="w-12 h-12 rounded-full bg-secondary flex justify-center items-center">
                    <i class="fab fa-instagram text-white text-lg"></i>
                </div>
            </div>
        </div>
        <div class="flex justify-center my-10 md:my-0 md:mt-20 md:px-10">
            <img class="md:hidden" src="../assets/Rectangle.png" alt="">
            <img class="sm:hidden md:block md:px-40" src="../assets/Rectangle-md.png" alt="">

        </div>
        <div class="pb-10 text-center text-gray-400 md:flex md:ml-40 md:p-10">
            <p>Copyright &copy; 2023 Sam Baramesi.</p>
            <p class="md:hidden">All rights reserved.</p>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Footer-Component',
}
</script>
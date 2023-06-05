<template>
    <div class="bg-primary">
        <div class="md:flex md:justify-around">
            <div class="md:w-2/4 md:flex md:justify-between md:mr-20 lg:w-1/3 lg:mt-20">
                <div class="pt-20 text-left lg:pt-0">
                    <h4 class="text-h4 text-white text-center lg:inline-block lg:text-left">Leger des Heils</h4>
                    <h4 class="text-h4 text-white text-center lg:block lg:text-left">Enkeltje Zelfstandig</h4>
                </div>
                <div class="text-center text-text_small text-white space-y-3">
                    <p class="mt-10 lg:mt-0 text-secondary text-text">MENU</p>
                    <p class="mt-5">About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div class="flex justify-center items-center space-x-2 mt-10 lg:inline-flex">
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
        <div class="flex justify-center my-10 lg:my-0 lg:mt-20 lg:px-10">
            <img class="lg:hidden" src="../assets/Rectangle.png" alt="">
            <img class="sm:hidden lg:block lg:px-20" src="../assets/Rectangle-md.png" alt="">

        </div>
        <div class="pb-10 text-center text-gray-400 lg:flex lg:ml-20 lg:p-10">
            <p>Copyright &copy; 2023 Sam Baramesi.</p>
            <p class="lg:hidden">All rights reserved.</p>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Footer-Component',
}
</script>
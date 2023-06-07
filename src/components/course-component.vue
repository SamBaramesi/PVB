<template>
    <div>
        <CustomRouterLink class="flex flex-col items-center" :to="'/course/' + course._id">
            <img class="w-2/3" :src="'../assets/' + course.imageName" alt="">
            <h3>{{ course.name }}</h3>
        </CustomRouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Course-Component',
    props: {
        course: {
            type: Object,
        }
    },
    components: { CustomRouterLink: RouterLink }
}
</script>

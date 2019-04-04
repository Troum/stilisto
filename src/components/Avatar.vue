<template>
    <div class="col-xl-5 mx-auto mt-4 text-center">
        <img :src="image" alt="" class="img-fluid blured">
    </div>
</template>

<script>
    export default {
        props: {
            image: String
        }
    }
</script>

<style scoped>
    .blured {
        transition: .5s ease-in-out;
        opacity: .789;
    }

    .blured:hover {
        cursor: none;
        opacity: 1;
    }
</style>

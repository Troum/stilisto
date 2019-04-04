<template>
    <div class="col-xl-5 mx-auto mt-4">
        <h1 class="text-white text-center font-weight-light" v-html="name"></h1>
        <hr class="d-block w-100 mt-4 mb-4 bg-light">
        <div class="description" v-html="description"></div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            description: String
        }
    }
</script>

<style scoped>
    h1 {
        font-family: "Poiret One", cursive;
    }
    .description {
        font-family: "Poiret One", cursive;
        font-size: 110%;
    }
</style>

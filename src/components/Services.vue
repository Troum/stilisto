<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-12 my-3 service">
            <p class="h4 text-white">{{ $ml.get('service.partners') }}</p>
        </div>
        <div class="col-xl-12 text-center my-5 service">
            <img :src="partners" alt="" class="img-fluid">
        </div>
        <div v-if="!$isMobile()" class="col-xl-6 my-3 service" v-html="$ml.get('service.choose')">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                partners: require('../assets/partners.png')
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-7 my-3" v-for="(item, i) in $ml.get('price.men.complex')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" :style="{height: $isMobile() ? '48rem' : '44rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.serviceOne }}</span> &mdash; <span>{{ item.priceOne }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceTwo }}</span> &mdash; <span>{{ item.priceTwo }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceThree }}</span> &mdash; <span>{{ item.priceThree }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceFour }}</span> &mdash; <span>{{ item.priceFour }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceFive }}</span> &mdash; <span>{{ item.priceFive }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceSix }}</span> &mdash; <span>{{ item.priceSix }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceSeven }}</span> &mdash; <span>{{ item.priceSeven }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceEight }}</span> &mdash; <span>{{ item.priceEight }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceNine }}</span> &mdash; <span>{{ item.priceNine }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceTen }}</span> &mdash; <span>{{ item.priceTen }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceEleven }}</span> &mdash; <span>{{ item.priceEleven }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceTwelve }}</span> &mdash; <span>{{ item.priceTwelve }}</span>
                        </p>
                        <p>
                            <span>{{ item.serviceThirteen }}</span> &mdash; <span>{{ item.priceThirteen }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.men.color')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" :style="{height: $isMobile() ? '22rem' : '15rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.short }}</span> &mdash; <span>{{ item.shortPrice }}</span>
                        </p>
                        <p>
                            <span>{{ item.middle }}</span> &mdash; <span>{{ item.middlePrice }}</span>
                        </p>
                        <p>
                            <span>{{ item.long }}</span> &mdash; <span>{{ item.longPrice }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.men.other')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" :style="{height: $isMobile() ? '22rem' : '15rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.one }}</span> &mdash; <span>{{ item.onePrice }}</span>
                        </p>
                        <p>
                            <span>{{ item.two }}</span> &mdash; <span>{{ item.twoPrice }}</span>
                        </p>
                        <p>
                            <span>{{ item.three }}</span> &mdash; <span>{{ item.threePrice }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>

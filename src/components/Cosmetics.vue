<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-9 my-3" v-for="(item, i) in $ml.get('price.cosmetology.face')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" style="height: 26rem">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.nameOne }}</span> &mdash; <span>{{ item.priceOne }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameTwo }}</span> &mdash; <span>{{ item.priceTwo }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameThree }}</span> &mdash; <span>{{ item.priceThree }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFour }}</span> &mdash; <span>{{ item.priceFour }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFive }}</span> &mdash; <span>{{ item.priceFive }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameSix }}</span> &mdash; <span>{{ item.priceSix }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9 my-3" v-for="(item, i) in $ml.get('price.cosmetology.depilation')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" :style="{height: $isMobile() ? '32rem' : '29rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.nameOne }}</span> &mdash; <span>{{ item.priceOne }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameTwo }}</span> &mdash; <span>{{ item.priceTwo }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameThree }}</span> &mdash; <span>{{ item.priceThree }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFour }}</span> &mdash; <span>{{ item.priceFour }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFive }}</span> &mdash; <span>{{ item.priceFive }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameSix }}</span> &mdash; <span>{{ item.priceSix }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameSeven }}</span> &mdash; <span>{{ item.priceSeven }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameEight }}</span> &mdash; <span>{{ item.priceEight }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameNine }}</span> &mdash; <span>{{ item.priceNine }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-7 my-3" v-for="(item, i) in $ml.get('price.cosmetology.shugaring')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" style="height: 22rem">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.nameOne }}</span> &mdash; <span>{{ item.priceOne }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameTwo }}</span> &mdash; <span>{{ item.priceTwo }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameThree }}</span> &mdash; <span>{{ item.priceThree }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFour }}</span> &mdash; <span>{{ item.priceFour }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameFive }}</span> &mdash; <span>{{ item.priceFive }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameSix }}</span> &mdash; <span>{{ item.priceSix }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-7 my-3" v-for="(item, i) in $ml.get('price.cosmetology.regular')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" style="height: 16rem">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.nameOne }}</span> &mdash; <span>{{ item.priceOne }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameTwo }}</span> &mdash; <span>{{ item.priceTwo }}</span>
                        </p>
                        <p>
                            <span>{{ item.nameThree }}</span> &mdash; <span>{{ item.priceThree }}</span>
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

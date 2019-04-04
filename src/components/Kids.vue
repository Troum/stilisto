<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-7 my-3" v-for="(item, i) in $ml.get('price.kids')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" style="height: 18rem">
                <div class="card-body">
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

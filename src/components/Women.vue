<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.women.complexOne')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white mx-auto" :style="{height: $isMobile() ? '22rem' : '18rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle">{{ item.subTitle }}</h6>
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
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.women.complexTwo')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white" :style="{height: $isMobile() ? '22rem' : '18rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle">{{ item.subTitle }}</h6>
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
                        <p>
                            <span>{{ item.added }}</span> &mdash; <span>{{ item.addedPrice }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.women.complexThree')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white" :style="{height: $isMobile() ? '22rem' : '18rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle">{{ item.subTitle }}</h6>
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
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.women.complexFour')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white" :style="{height: $isMobile() ? '22rem' : '18rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle">{{ item.subTitle }}</h6>
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
        <div class="col-xl-6 my-3" v-for="(item, i) in $ml.get('price.women.complexFive')" :key="i">
            <div class="card rounded-0 bg-transparent border-light text-white" :style="{height: $isMobile() ? '22rem' : '18rem'}">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle">{{ item.subTitle }}</h6>
                    <hr class="d-block mx-auto bg-light w-50">
                    <div class="my-3">
                        <p>
                            <span>{{ item.colorLashes }}</span> &mdash; <span>{{ item.colorLashesPrice }}</span>
                        </p>
                        <p>
                            <span>{{ item.shapeLashes }}</span> &mdash; <span>{{ item.shapeLashesPrice }}</span>
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

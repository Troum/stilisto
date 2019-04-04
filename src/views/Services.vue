<template>
        <div class="row my-3">
            <div class="col-xl-8 mx-auto">
                <div class="row">
                    <div class="col-12 col-xl-4 order-1 order-xl-0">
                        <ul :class="['nav flex-column', $isMobile() ? '' :'position-fixed']">
                            <li class="nav-item" v-for="(item, i) in $ml.get('services')" :key="i">
                                <router-link class="nav-link" :to="item.link">{{ item.title }}</router-link>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-8 order-0 order-xl-1">
                        <transition name="slide-left" mode="out-in">
                            <router-view></router-view>
                        </transition>
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
    span {
        display: block;
        width: 0;
        margin: 10px auto;
        border-bottom: 1px solid #fff;
        transition: .5s ease-in-out;
    }

    .nav-link:hover + span {
        width: 50%;
    }

    .router-link-active + span {
        width: 50%;
    }

    .nav-link {
        text-transform: uppercase;
        font-family: "Poiret One", cursive;
        color: #fff;
        transition: .5s ease-in-out;
    }
    .nav-link:hover {
        color: #fff;
    }
</style>

<template>
    <nav id="nav" class="navbar navbar-expand-xl navbar-dark bg-transparent m-0 p-0">
        <div class="col-xl-12 text-left navbar-toggler p-0">
            <button target="navbarNav" ref="mobile" @click="toggleMobile" class="navbar-toggler hamburger hamburger--emphatic" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
            </button>
        </div>
        <div class="row w-100 m-0 p-0">
            <div class="col-12 col-xl-12">
                <div class="navbar-brand mx-auto">
                    <router-link class="nav-link text-white display-3" to="/" v-html="brand"></router-link>
                    <p><small class="text-white text-uppercase">{{ subBrand }}</small></p>
                </div>
            </div>
            <div class="col-12 col-xl-12">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto w-50 d-flex justify-content-center">
                        <li class="nav-item" v-for="(item, i) in $ml.get('menu')" :key="i">
                            <router-link class="nav-link text-uppercase" :to="item.link">{{ item.title }}</router-link>
                        </li>
                        <li class="nav-item">
                            <a v-if="$ml.current === 'RU'" @click="$ml.change('EN')" class="nav-link">EN</a>
                            <a v-if="$ml.current === 'EN'" @click="$ml.change('RU')" class="nav-link">RU</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery';
    export default {
        watch: {
          '$route' () {
              $('#navbarNav').collapse('hide');
              this.$refs.mobile.classList.remove('is-active');
          }
        },
        props: {
            brand: String,
            subBrand: String
        },
        methods: {
            toggleMobile() {
                this.$refs.mobile.classList.toggle('is-active');
                document.getElementById('navbarNav').classList.toggle('show');
            }
        }
    }
</script>

<style scoped>
    .navbar-brand {
        font-family: 'PT Sans', sans-serif;
        font-weight: 400;
    }
    .nav-item {
        font-family: 'Poiret One', cursive;
        font-size: 135%;
    }
    small {
        font-family: 'Poiret One', cursive;
        font-size: 70%;
    }
    .nav-link {
        transition: .5s ease-in-out;
    }

    .nav-link:hover {
        color: #fff;
        cursor: pointer;
    }
</style>

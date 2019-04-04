<template>
    <div class="row my-xl-2 d-flex justify-content-center align-items-center">
        <div class="col-xl-8 mx-auto">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-xl-8 my-xl-2 service">
                    <p class="h3 text-white">{{ $ml.get('contacts.title') }}</p>
                </div>
                <div class="col-xl-8 my-xl-1 service">
                    <p class="h5 text-white" v-html="$ml.get('contacts.phoneOne')"></p>
                </div>
                <div class="col-xl-8 my-xl-1 service">
                    <p class="h5 text-white" v-html="$ml.get('contacts.phoneTwo')"></p>
                </div>
                <div class="col-xl-8 my-xl-1 service">
                    <p class="h3 text-white">{{ $ml.get('contacts.instTitle') }}</p>
                </div>
                <div class="col-xl-8 my-xl-1 service">
                    <p class="h5 text-white" v-html="$ml.get('contacts.instagram')"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8 mx-auto" id="map" style="height: 40vh"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import ymaps from 'ymaps';
    export default {
        data() {
            return {
                ymap: null,
                map: null,
                placemark: null
            }
        },
        mounted() {
            ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
                .then( maps => {
                    this.ymap = maps;
                    this.map = new this.ymap.Map('map', {
                        center: [53.899700, 27.604088],
                        zoom: 15,
                        controls: []
                    });
                    this.map.behaviors.disable('scrollZoom');
                    this.placemark = new this.ymap.Placemark([53.899700, 27.604088],{
                        balloonContent: this.$ml.get('address')
                    },{
                        iconLayout: 'default#image',
                        iconImageHref: require('../assets/salon.svg'),
                        iconImageSize: [42, 42]
                    });
                    this.map.geoObjects.add(this.placemark);
                } )
                .catch( error => {
                    console.log(error);
                });
        },
    }
</script>

<style scoped>

</style>

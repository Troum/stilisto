<template>
    <div class="row">
        <div class="col-xl-8 mx-auto">
            <div class="col-xl-12 my-3 service">
                <p class="h3 text-white">{{ $ml.get('gallery') }}</p>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-xl-4 my-3 text-center" v-for="(image, i) in images" :key="i">
                    <img v-lazy="image.src" class="img-fluid" @click="openGallery(i)">
                </div>
            </div>
        </div>
        <lightbox ref="lightBox" :showThumbs="false" :showLightBox="false" :images="images">
        </lightbox>
    </div>
</template>

<script>
    import Lightbox from 'vue-image-lightbox';
    export default {
        components: {
          Lightbox
        },
        data() {
            return {
                directory: '../assets/gallery/',
                images: [
                    {
                        thumb: require( '../assets/gallery/image1.jpg'),
                        src: require( '../assets/gallery/image1.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image2.jpg'),
                        src: require( '../assets/gallery/image2.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image3.jpg'),
                        src: require( '../assets/gallery/image3.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image4.jpg'),
                        src: require( '../assets/gallery/image4.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image5.jpg'),
                        src: require( '../assets/gallery/image5.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image6.jpg'),
                        src: require( '../assets/gallery/image6.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image7.jpg'),
                        src: require( '../assets/gallery/image7.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image8.jpg'),
                        src: require( '../assets/gallery/image8.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image9.jpg'),
                        src: require( '../assets/gallery/image9.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image10.jpg'),
                        src: require( '../assets/gallery/image10.jpg'),
                    },
                    {
                        thumb: require( '../assets/gallery/image11.jpg'),
                        src: require( '../assets/gallery/image11.jpg'),
                    },
                ]
            }
        },
        methods: {
            openGallery (i) {
                this.$refs.lightBox.showImage(i);
            }
        }
    }
</script>

<style scoped>
    img {
        transition: .5s ease-in-out;
    }

    img:hover {
        cursor: pointer;
        filter: drop-shadow(0 15px 25px rgba(255, 255, 255, .32));
    }

</style>

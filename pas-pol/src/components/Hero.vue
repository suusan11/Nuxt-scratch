<script setup lang="ts">
    const slides = [
        {
            main: "assets/images/hero01.jpg",
            srcset: "assets/images/hero01.jpg, assets/images/hero01-sp.jpg 869w"
        },
        {
            main: "assets/images/hero02.jpg",
            srcset: "assets/images/hero02.jpg, assets/images/hero02-sp.jpg 869w"
        },
        {
            main: "assets/images/hero03.jpg",
            srcset: "assets/images/hero03.jpg, assets/images/hero03-sp.jpg 869w"
        },
    ]

    const { isMobileOrTablet } = useDevice();
</script>
<template>
    <div class="pg-hero">
        <Swiper
            :height="300"
            :modules="[SwiperAutoplay, SwiperEffectFade]"
            :slides-per-view="1"
            :loop="true"
            effect="fade"
            :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
            }"
        >
            <SwiperSlide
                v-for="(slide, id) in slides"
                :key="id"
            >
                <img
                    :src="slide.main"
                    :srcset="slide.srcset"
                    alt=""
                >
            </SwiperSlide>
        </Swiper>
        <p class="icon-arrow"><img src="~/assets/images/arrow.png" alt=""></p>
        <p class="hero-logo" v-show="isMobileOrTablet"><img src="~/assets/images/logo-square.png" alt=""></p>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .pg-hero {
        position: relative;
        &::after {
            content: '';
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('~/assets/images/bg-overlay.png') no-repeat;
            background-size: contain;
            background-position: 0 bottom;
            z-index: 2;
        }
        .icon-arrow {
            position: absolute;
            width: 22px;
            height: 13px;
            bottom: 60px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
        }
        .hero-logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }
    }
</style>
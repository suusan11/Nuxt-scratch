<script setup lang="ts">
    type Props = {
        img: string,
        title: string,
        date: string,
        excerpt: string
    }
    const { img, title, date, excerpt } = defineProps<Props>();
</script>
<template>
    <NuxtLink class="news__card l-inner__flex align-start">
        <p class="img"><img :src="img" alt=""></p>
        <div class="text__wrap">
            <h3 class="title">{{ title }}</h3>
            <p class="date">{{ date }}</p>
            <p class="excerpt">{{ excerpt }}</p>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .news__card {
        margin-bottom: 60px;
        @include m.mq(sp_min) {
            width: 100%;
            margin-bottom: 30px;
        }
        @media (any-hover: hover) {
            &:hover {
                opacity: 0.8;
            }
        }
        .img {
            width: 35%;
            @include m.mq(sp_min) {
                width: 100%;
                margin-bottom: 15px;
            }
        }
        .text__wrap {
            width: 60%;
            text-align: left;
            @include m.mq(sp_min) {
                width: 100%;
            }
            .title {
                font-size: r.f-rem(18);
                margin-bottom: 5px;
            }
            .date {
                font-family: f.$font-en;
                font-size: r.f-rem(12);
                margin-bottom: 20px;
            }
            .excerpt {
                font-size: r.f-rem(13);
                @include m.mq(sp_min) {
                    display: none;
                }
            }
        }
    }
</style>
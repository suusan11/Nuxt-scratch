<script setup lang="ts">
    type Props = {
        img: string,
        title: string,
    }
    const { img, title } = defineProps<Props>();
</script>
<template>
    <NuxtLink class="product__card">
        <p class="img"><img :src="img" alt=""></p>
        <h3 class="title">{{ title }}</h3>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .product__card {
        .title {
            font-size: clamp(r.f-rem(18), 2vw, r.f-rem(20));
            padding: 0 20px;
            margin: 20px 0 0;
        }
    }
</style>
<script setup lang="ts">
    type Props = {
        sectionTitle: string,
    }
    const { sectionTitle } = defineProps<Props>();
</script>
<template>
    <h2 class="section__title">{{ sectionTitle }}</h2>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .section__title {
        position: relative;
        font-family: f.$font-en;
        font-size: r.f-rem(30);
        line-height: 1;
        margin: 0;
        &::after {
            content: '';
            display: inline-block;
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 68px;
            height: 8px;
            background: url('~/assets/images/title-underline.png') no-repeat;
            background-size: contain;
            background-position: 0 bottom;
            @include m.mq(sp_min) {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
</style>
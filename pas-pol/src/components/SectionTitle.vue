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
        letter-spacing: 0.1em;
        margin: 0;
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            background: url(../img/sectionTitle-underLine@2x.png) no-repeat;
            background-size: 68px 8px;
            background-position: 0 bottom;
        }
    }
</style>
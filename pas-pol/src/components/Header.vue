<script setup>
    const { isDesktop, isMobileOrTablet } = useDevice();

    const isOpen = ref(false)
    const toggleMenu = () => {
        isOpen.value = !isOpen.value
    }

</script>
<template>
    <header class="l-header">
        <div class="l-inner__flex">
            <h1 class="title" v-show="isDesktop"><nuxt-link to="/">PAS-POL -旅のモノづくりブランド-｜TABIPPO</nuxt-link></h1>
            <p class="menu" v-show="isMobileOrTablet">MENU</p>
            <div class="hamburger__menu" v-show="isMobileOrTablet" @click="toggleMenu" :class="{'is__open': isOpen}">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Navbar position="is__header" flex_type="flex-end" :class="{'is__open': isOpen}" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .l-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        @include m.mq(sp) {
            position: relative;
            padding: 0.5rem 2.5%;
        }
        .title {
            margin-top: 50px;
            margin-left: 7%;
            a {
                display: block;
                overflow: hidden;
                text-indent: 100%;
                white-space: nowrap;
                background: url('~/assets/images/logo.png') no-repeat;
                width: 266px;
                height: 72px;
                background-size: 266px 72px;
            }
        }
        .menu {
            font-family: f.$font-en;
            font-size: r.f-rem(13);
            letter-spacing: 0rem;
        }

        // For hanburger menu
        .hamburger__menu {
            position: relative;
            width: 10%;
            height: 30px;
            z-index: 999;
            cursor: pointer;
            span {
                position: absolute;
                width: 16px;
                height: 1px;
                background-color: c.$black;
                transition: transform 0.15s ease-in;
                &:nth-of-type(1) {
                    top: calc(30px / 2) - 5;
                }
                &:nth-of-type(2) {
                    top: calc(30px / 2);
                }
                &:nth-of-type(3) {
                    top: calc(30px / 2) + 5;
                }
            }
            &.is__open {
                span {
                    transition: transform 0.15s ease-in;
                    &:nth-child(1) {
                        top: calc(30px / 2);
                        transform: rotate(30deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:nth-child(3) {
                        top: calc(30px / 2);
                        transform: rotate(-30deg);
                    }
                }
            }
        }
    }
</style>
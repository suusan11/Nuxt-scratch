<script setup lang="ts">
    const items = [
        {
            img: "assets/images/product01.png",
            title: "地球一周 365日 世界遺産絶景の旅"
        },
        {
            img: "assets/images/product02.png",
            title: "365日 京都 絶景の旅"
        },
        {
            img: "assets/images/product03.png",
            title: "365日 北海道 絶景日めくりカレンダー"
        },
        {
            img: "assets/images/product04.png",
            title: "365日 北海道 絶景の旅"
        },
        {
            img: "assets/images/product05.png",
            title: "The World Festival Guide -海外の音楽フェス完全ガイド-"
        },
        {
            img: "assets/images/product06.png",
            title: "この世界で死ぬまでにしたいこと2000"
        },
    ]
</script>
<template>
    <section class="pg-product l-container">
        <div class="title__wrap l-inner__flex">
            <Sectiontitle sectionTitle="PRODUCT"/>
            <Button text="MORE" color_type="is__black" url="/"/>
        </div>
        <div class="card__wrap l-inner__flex align-start">
            <Productcard v-for="(item, index) in items" :key="index" :img="item.img" :title="item.title"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .pg-product {
        position: relative;
        padding-top: 110px;
        padding-bottom: 110px;
        @include m.mq(sp_min) {
            padding-top: 70px;
            padding-bottom: 70px;
            margin-bottom: 70px;
        }
        .title__wrap {
            margin-bottom: 60px;
            @include m.mq(sp_min) {
                justify-content: center;
                margin-bottom: 30px;
            }
            .c-button {
                @include m.mq(sp_min) {
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .card__wrap {
            margin: 0 4rem;
            @include m.mq(sp) {
                margin: 0;
            }
            .product__card {
                width: 30%;
                margin-bottom: 60px;
                @include m.mq(sp_min) {
                    width: 100%;
                    margin-bottom: 30px;
                }
            }
        }
    }
</style>
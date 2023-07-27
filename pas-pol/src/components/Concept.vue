<template>
    <section class="pg-concept">
        <div class="l-container sm">
            <h2 class="concept__title">旅に出よう</h2>
            <div class="text__wrap">
                <p class="concept__text">
                    僕たちが作りたいのは<br>
                    持っているだけで旅に出たくなるモノ。<br>
                    持っているだけでわくわくするモノ。
                </p>
                <p class="concept__text">
                    それは新しい時代の "パスポート"<br>
                    僕たちが作るものは、<br>
                    そんな、存在でありたい。
                </p>
                <p class="concept__text">
                    そして、人と人が繋がる<br>
                    こんな時代だからこそ、<br>
                    僕たちは、みんなでひとつのモノを<br>
                    作ることを追求したい。
                </p>
                <p class="concept__text logo">
                    <img src="~/assets/images/concept-logo.png" alt="">
                </p>
                <p class="concept__text">
                    それは、自分と世界を繋げる<br>
                    旅のモノづくりブランド
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .pg-concept {
        width: 100%;
        background-color: #f6f6f6;
        padding-top: 110px;
        padding-bottom: 110px;
        @include m.mq(sp) {
            padding-top: 70px;
            padding-bottom: 70px;
        }
        .concept__title {
            font-size: clamp(r.f-rem(36), 2vw, r.f-rem(44));
            letter-spacing: 0.1em;
            margin: 0 auto 1em;
            @include m.mq(sp_min) {
                text-align: left;
                margin-bottom: 0.5em;
            }
        }
        .text__wrap {
            max-width: 380px;
            margin: 0 auto;
        }
        .concept__text {
            font-size: clamp(r.f-rem(15), 2vw, r.f-rem(20));
            text-align: left;
            white-space: nowrap;
            margin-bottom: 1em;
            &.logo {
                width: 211px;
                height: 54px;
                margin: 35px auto;
                @include m.mq(sp) {
                    transform: scale(0.7);
                    transform-origin: 0 50%;
                    margin: 15px 0 15px 0;
                }
            }
        }
    }
</style>
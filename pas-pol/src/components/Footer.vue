<template>
    <footer class="l-footer">
        <div class="footer__buttons l-container l-inner__flex flex-center">
            <NuxtLink to="/" class="gotop"></NuxtLink>
            <Button text="Share on Facebook" color_type="is__facebook" url="/" />
            <Button text="Share on Twitter" color_type="is__twitter" url="/" />
            <Button text="Hatena Bookmark" color_type="is__hatena" url="/" />
            <Button text="Send to LINE" color_type="is__line" url="/" />
        </div>
        <div class="footer__nav">
            <Navbar position="is__footer" flex_type="flex-center"/>
        </div>
        <div class="footer__bottom">
            <div class="inner l-inner__flex">
                <NuxtLink to="/" class="footer__logo"><img src="~/assets/images/logo-small.png" alt=""></NuxtLink>
                <p class="copyright"><small>Copyright © 2023 PAS-POL -旅のモノづくりブランド-｜<br class="spm">TABIPPO All rights reserved.</small></p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .l-footer {
        .footer__buttons {
            position: relative;
            gap: 2%;
            padding: 35px 0;
            .gotop {
                display: inline-block;
                position: absolute;
                top: -25px;
                left: 50%;
                transform: translateX(-50%);
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: c.$white;
                transition: top 0.3s ease-out;
                @media (any-hover: hover) {
                    &:hover {
                        top: -30px;
                    }
                }
                &::before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 35%;
                    left: 54.5%;
                    transform: rotate(-45deg) translate(-50%, -50%);
                    width: 12px;
                    height: 12px;
                    border-top: 1px solid c.$black;
                    border-right: 1px solid c.$black;
                }
            }
            .c-button {
                @include m.mq(sp_min) {
                    width: 48%;
                    margin-bottom: 0.5rem;
                }
            }
        }
        .footer__nav {
            background-color: #939899;
            padding: 30px 0;
            @include m.mq(sp) {
                padding: 0;
            }
        }
        .footer__bottom {
            background-color: #656c6e;
            padding: 35px 0;
            .inner {
                max-width: 786px;
                margin: 0 auto;
                @include m.mq(sp) {
                    flex-direction: column;
                }
                .footer__logo {
                    width: 90px;
                    height: 89px;
                    @include m.mq(sp) {
                        margin-bottom: 25px;
                    }
                }
                .copyright {
                    color: c.$white;
                    font-family: f.$font-en;
                    font-size: clamp(r.f-rem(8), 2vw, r.f-rem(10));
                }
            }
        }
    }
</style>
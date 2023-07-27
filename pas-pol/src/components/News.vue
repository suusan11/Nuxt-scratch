<script setup lang="ts">
    const items = [
        {
            img: "assets/images/news01.jpeg",
            title: "2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！",
            date: "2022.7.22",
            excerpt: "こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。写真募集年 ..."
        },
        {
            img: "assets/images/news02.jpeg",
            title: "【2023年度も制作決定】人気の絶景ポストカード「春」の写真を大募集！",
            date: "2022.4.11",
            excerpt: "こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの絶景ポストカードの春編、2023年度も制作が決まりました！ 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。まずは、春の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、春以降募集の際にはまた、改めてお知らせをいたします。写真 ..."
        },
        {
            img: "assets/images/news03.jpeg",
            title: "人気の絶景ポストカード制作中！「クリスマス」の絶景写真を大募集します",
            date: "2021.11.29",
            excerpt: "こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの絶景ポストカードですが、2021年より制作が再開いたしました。 photo by PAS-POL 今回の制作は、四季に合わせて募集をしています。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。第四弾は、クリスマスの風景写真を募集いたします！ 現在、春、夏と募集が終了し、秋の絶景写真の募集を延長しております！そして最後の募集となるのが、冬の絶景 ..."
        },
        {
            img: "assets/images/news04.jpeg",
            title: "【募集期間延長】人気の絶景ポストカード製作中！日本の「秋」の絶景を大募集します",
            date: "2021.10.12",
            excerpt: "こんにちは、TABIPPOの中　美砂希です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの絶景ポストカードですが、2021年より制作が再開いたしました。 photo by PAS-POL 今回の制作は、四季に合わせて募集をしています。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。第三弾は、秋の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、秋以降募集の際にはまた、改めてお知らせを ..."
        },
        {
            img: "assets/images/news05.jpeg",
            title: "【セール情報あり】PAS-POLオンラインショップ閉店のお知らせ",
            date: "2021.9.15",
            excerpt: "いつも、PAS-POLのサイトをご覧いただきありがとうございます。突然ではございますが、この度2021年9月30日をもちまして、PAS-POL公式オンラインショップを閉鎖する運びとなりました。（※PAS-POLのブランドがなくなるわけではありません）   2015年の夏からスタートしたオンラインショップですが、旅が好きな方、TABIPPOを知ってくださってる方、ライフスタイルにこだわりたい方、などたくさんの方にPAS-POLの商品を公式ショップにて購入いただいたこと、と ..."
        },
        {
            img: "assets/images/news06.jpeg",
            title: "【募集期間延長】人気の絶景ポストカード製作中！日本の「夏」の絶景を大募集します",
            date: "2021.7.15",
            excerpt: "こんにちは、TABIPPOの中美砂希です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの絶景ポストカードですが、制作が再開しましたのでお知らせいたします。 photo by PAS-POL 今回の制作は、四季に合わせて募集をしています。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。第二弾は、夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知ら ..."
        }
    ]
</script>
<template>
    <section class="pg-news">
        <div class="l-container">
            <div class="title__wrap l-inner__flex">
                <Sectiontitle sectionTitle="NEWS"/>
                <Button text="MORE" color_type="is__black" url="/"/>
            </div>
            <div class="card__wrap l-inner__flex align-start">
                <Newscard v-for="(item, index) in items" :key="index" :img="item.img" :title="item.title" :date="item.date" :excerpt="item.excerpt"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .pg-news {
        position: relative;
        background-color: #f6f6f6;
        padding-top: 110px;
        padding-bottom: 110px;
        @include m.mq(sp_min) {
            padding-top: 70px;
            padding-bottom: 140px;
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
                    bottom: 70px;
                }
            }
        }
        .card__wrap {
            margin: 0 4rem;
            @include m.mq(sp) {
                margin: 0;
            }
        }
    }
</style>
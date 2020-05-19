<template>
    <div>
        <div>
                    <div class="container">
                        <van-swipe :autoplay="3000">
                            <van-swipe-item v-for="(image, index) in images2" :key="index" class="main_swiper">
                                <img v-lazy="image" />
                            </van-swipe-item>
                        </van-swipe>

                        <div class="row-phone" to="/miinfo" >
                            <div class="imgbox">
                                <img src="/img/row-phone1.jpg" alt="">
                            </div>
                            <div class="info bgw">
                                <div class="l l1">
                                    <div class="name fz-m">Redmi K30 5G</div>
                                    <div class="price">$1999<span>起</span><!----></div>
                                </div>
                                <div class="l l2">
                                    <div class="brief w450">双模5G，120Hz流速屏，索尼6400万前后六摄</div>
                                    <div class="buybtn">立即购买</div>
                                </div>
                            </div>
                        </div>
                        <div class="row-phone" to="/miinfo">
                            <div class="imgbox">
                                <img src="/img/row-phone2.jpg" alt="">
                            </div>
                            <div class="info bgw">
                                <div class="l l1">
                                    <div class="name fz-m">Redmi K30 5G</div>
                                    <div class="price">$1999<span>起</span><!----></div>
                                </div>
                                <div class="l l2">
                                    <div class="brief w450">双模5G，120Hz流速屏，索尼6400万前后六摄</div>
                                    <div class="buybtn">立即购买</div>
                                </div>
                            </div>
                        </div>

                    <div class="pro-list2">
                        <ul class="clearfix">
                            <router-link tag="li" to="/miinfo">
                                <div class="imgbox">
                                    <img src="/img/phone1.jpg" alt="">
                                </div>
                                <div class="info bgw align-center">
                                    <div class="name">小米10</div>
                                    <div class="brief">骁龙865/1亿像素相机</div>
                                    <div class="price">￥3999<span>起</span></div>
                                    <div class="buybtn mauto"> 立即购买</div>
                                </div>
                            </router-link >
                            <router-link tag="li" to="/miinfo">
                                <div class="imgbox">
                                    <img src="/img/phone1.jpg" alt="">
                                </div>
                                <div class="info bgw align-center">
                                    <div class="name">小米10</div>
                                    <div class="brief">骁龙865/1亿像素相机</div>
                                    <div class="price">￥3999<span>起</span></div>
                                    <div class="buybtn mauto"> 立即购买</div>
                                </div>
                            </router-link >
                            <router-link tag="li" to="/miinfo">
                                <div class="imgbox">
                                    <img src="/img/phone1.jpg" alt="">
                                </div>
                                <div class="info bgw align-center">
                                    <div class="name">小米10</div>
                                    <div class="brief">骁龙865/1亿像素相机</div>
                                    <div class="price">￥3999<span>起</span></div>
                                    <div class="buybtn mauto"> 立即购买</div>
                                </div>
                            </router-link >
                            <router-link tag="li" to="/miinfo">
                                <div class="imgbox">
                                    <img src="/img/phone1.jpg" alt="">
                                </div>
                                <div class="info bgw align-center">
                                    <div class="name">小米10</div>
                                    <div class="brief">骁龙865/1亿像素相机</div>
                                    <div class="price">￥3999<span>起</span></div>
                                    <div class="buybtn mauto"> 立即购买</div>
                                </div>
                            </router-link >
                        </ul>
                    </div>

                    
                    </div>
                </div>
    </div>
</template>

<script>
    export default {
         data(){
            return {
                // trueboo:true,
                active:0,
                images: [
                    '/img/swiper1.jpg',
                    '/img/swiper2.jpg',
                    '/img/swiper3.jpg',                   
                ],
                 images2: [
                    '/img/mid-row1.jpg',
                    '/img/swiper4.jpg',
                    '/img/swiper5.jpg',                   
                ],

            }
        },
    }
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    //-------手机页面横向商品块------------
   

    .row-phone{
        width: 99%;
        margin: 8px auto;
        height: 330px;
        background-color: white;
        .imgbox{
            width: 100%;
            height: 250px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            padding: 5px;
            height: 70px;
            .l1{
                align-items: center;
                display: flex;
                overflow: hidden;
                justify-content: space-between;

                .name{
                    color: rgba(0,0,0,.87);
                    font-size: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price {
                    font-size: 16px;
                    color: #ea625b;
                    height: 15px;
                    line-height: 15px;
                    position: relative;
                    display: inline-block;
                }
            }
            .l2{
                align-items: center;
                display: flex;
                overflow: hidden;
                justify-content: space-between;
                .brief{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-top: 5px;
                    font-size: 10px;
                    line-height: 15px;
                    color: rgba(0,0,0,.54);
                }

                .buybtn{
                         width: 114px;
                        height: 34px;
                        background: #ea625b;
                        border-radius: 5px;
                        text-align: center;
                        color: #fff;
                        line-height: 34px;
                        font-size: 16px;
                        // margin: 0 auto;
                        // padding: .16rem 0;
                        font-weight: 700;
                }

            }
            
        }
        
    }
    //-------手机页面横向商品块end------------

    //------手机页面商品列表--------
    .pro-list2{
        width: 100%;
        background-color: rgb(230, 231, 251);

        ul{
            width: 100%;

            li{
                float: left;
                width: 48.5%;
                height: 280px;
                margin:5px 3px;
                &:nth-child(2n){
                    margin-right: 0px;
                }
                .imgbox{
                    height: 160px;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    // width: 100%;
                    height: 100px;
                    padding:10px ;
                    text-align: center;
                    background-color: #fff;
                    .name{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: .28rem;
                        color: rgba(0,0,0,.87);
                    }
                    .brief{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-top: 5px;
                        font-size: 10px;
                        line-height: 15px;
                        color: rgba(0,0,0,.54);

                    }
                    .price {
                        font-size: 12px;
                        color: #ea625b;
                        height: 15px;
                        line-height: 15px;
                        position: relative;
                        display: inline-block;
                    }
                    .buybtn {
                        width: 60%;
                        height: 34px;
                        background: #ea625b;
                        border-radius: 5px;
                        text-align: center;
                        color: #fff;
                        line-height: 34px;
                        font-size: 16px;
                        margin: 0 auto;
                        // padding: .16rem 0;
                        font-weight: 700;
                    }
                }


            }
        }
    }









    //------手机页面商品列表--end------
</style>
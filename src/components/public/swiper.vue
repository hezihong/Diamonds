<template>
    <div>
        <div class="container">
            <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in imgs" :key="index" class="main_swiper">
                        <img v-lazy="image" />
                    </van-swipe-item>
            </van-swipe>

        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        data(){
            return {
                

            }
        },
        props:["imgs"],//接收图片数据
        mounted(){
            new Swiper('.swiperRecommend', {
                pagination: {
                    el: '.paginationRecommend',
                },
            });
        },   
    }
</script>

<style lang="scss" scoped>
        .container{
            width: 100%;
            height: 100%;
        }
        .van-swipe {
             width: 100%;
            // height: 455px;
        .main_swiper{
            img{
                height: 100%;
                width:100%;
            }
        }
    }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
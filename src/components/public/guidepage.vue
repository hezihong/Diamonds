<template>
    <div>
        
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div v-show="flag">                
                    <img class="animated  bigimg" src="/img/gui1.png" alt="">
                    <h3 class="animated">最新手机资讯</h3>
                </div>

            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <!-- <img class="animated " src="/img/mi-icon02gray.png" alt=""> -->
                    <img class="animated  bigimg" src="/img/gui1.png" alt="">
                    <h3 class="animated ">一键下单<br>
                        送货上门
                    </h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <!-- <img class="animated " src="/img/mi-icon03gray.png" alt=""> -->
                    <img class="animated  bigimg" src="/img/gui1.png" alt="">
                    <h3 class="animated ">最潮手机造型</h3>
                    <van-button plain hairline type="primary" size="small" to="/main" class="btn animated ">点击体验</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        data(){
            return {
                flag:true
            }
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            let _this = this;
            new Swiper('.containerguidepage', {
                pagination: {
                    el: '.paginationguidepage',
                },
                on: {
                    // 轮播图切换前效果
                    slideChangeTransitionStart:function(){
                        _this.flag = false; //隐藏
                    },
                    // 轮播图切换后效果
                    slideChangeTransitionEnd: function(){
                        _this.flag = true; //显示
                    },
                },
            });
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>

    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background: url('/img/guibg1.jpg') no-repeat;
        background-size: cover;
        
    }
    .swiper-slide{
        text-align: center;
        .bigimg{
            margin-top: 100px;
            width: 60%;
            height:60%;
        }
        img{
            margin-left:auto;
            margin-right:auto;
            width: 120px;
            height: 120px;
            margin-top: 200px;
        }
        h3{
            color:white;
            font-size: 30px;
        }

        .btn{
            width:130px;
            height:50px;
            // border-radius: 25px;
            color: rgb(51, 51, 212);
            background-color:#fff;
            font-size: 15px;
            border-color:rgb(51, 51, 212);
        }
    }
    
</style>
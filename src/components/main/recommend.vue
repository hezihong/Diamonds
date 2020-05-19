<template>
    <div>
        
                
                <div class="container">
                    <div class="swiper">
                        <!-- <van-swipe :autoplay="3000">
                            <van-swipe-item v-for="(image, index) in images" :key="index" class="main_swiper">
                                <img v-lazy="image" />
                            </van-swipe-item>
                        </van-swipe> -->
                        <swiper :imgs="images"></swiper>
                    </div>

                    <!-- -------颈部道具盒子------ -->
                   
                    <div class="item-box">
                        <ul class="clearfix">
                            <router-link tag="li" to="/miroll?id=0">
                                <img src="/img/main-item1.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll?id=1">
                                <img src="/img/main-item2.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll?id=2">
                                <img src="/img/main-item3.jpg" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll?id=3">
                                <img src="/img/main-item4.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll?id=4">
                                <img src="/img/main-item5.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll?id=5">
                                <img src="/img/main-item6.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll">
                                <img src="/img/main-item7.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll">
                                <img src="/img/main-item8.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll">
                                <img src="/img/main-item9.png" alt="">
                            </router-link>
                            <router-link tag="li" to="/miroll">
                                <img src="/img/main-item10.png" alt="">
                            </router-link>
                        </ul>
                    </div>
                     <!-- -------颈部道具盒子-end----- -->
                    <div class="middle-box clearfix" >
                        <div class="left" >
                            <a href="javascript:;" @click="$router.push('/list')">
                                <img src="/img/mid-box1.jpg" alt="">
                            </a>
                        </div>
                        <div class="right" >
                            <a href="javascript:;" @click="$router.push('/list')">
                                <img src="/img/mid-box2.jpg" alt="">
                            </a>
                            <a href="javascript:;" @click="$router.push('/list')">
                                <img src="/img/mid-box3.jpg" alt="">
                            </a>
                        </div>

                        
                    </div>
                    <div class="main-row1">
                            <img src="/img/mid-row1.jpg" alt="">
                    </div>
                    <div class="main-row2">
                            <img src="/img/mid-row2.jpg" alt="">
                    </div>

                    <div class="pro-list">
                        <ul class="clearfix">
                            <router-link tag="li" to="/miinfo" >
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

                    <div class="ti">更多小米手机产品 &gt;</div>

                    <div class="pro-box clearfix">
                        <div class="imgbox">
                            <img src="/img/pro-box1.png" alt="">
                        </div>
                        <div class="imgbox">
                            <img src="/img/pro-box2.png" alt="">
                        </div>
                        <div class="imgbox">
                            <img src="/img/pro-box3.png" alt="">
                        </div>
                        <div class="imgbox">
                            <img src="/img/pro-box4.png" alt="">
                        </div>
                        <div class="imgbox">
                            <img src="/img/pro-box5.png" alt="">
                        </div>
                        <div class="imgbox">
                            <img src="/img/pro-box6.png" alt="">
                        </div>
                    </div>
                </div>
        
    </div>
</template>

<script>
    import '../../sass/main.scss'
    import swiper from "../public/swiper.vue" 
    export default {
        data(){
            return{
                images: [
                    '/img/swiper1.jpg',
                    '/img/swiper2.jpg',
                    '/img/swiper3.jpg',                   
                ],
            }
        },
        components:{
            swiper,
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
//--------标题栏 end--------
    .main-title{
        width: 100%;
        height: 48px;
        background-color: #f2f2f2;
        color: #666;
        overflow: hidden;
    }
    .main-title div{
        float:left;
    }
    .main-title .title-logo{  
        width: 15%;
        height: 100%;
        display: flex;   
        align-items: center;
        text-align: center;
        .van-icon {
            width:100%;
            text-align: center;
            font-size: 30px;
            color: orangered;
        }
    }
    .main-title .title-logo img{
            box-sizing: inherit;
            background-repeat: no-repeat;
            padding: 0;
            display: block;
            width: 30px;
            margin: 14px auto;
    }
    .main-title .search{
        width: 72%;
        background-color: white;
        height: 34px;
        text-align: left;
        overflow: hidden;
        margin-top: 7px;
        color: #B2B2B2;
    }
    .main-title .search .van-icon{
        font-size: 20px;
        width: 34px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        float: left;
    }
    .main-title .search-txt{
        height: 34px;
        line-height: 34px;
        border: 0px;
        float: left;
        color:#B2B2B2;
    }
    .main-title .self-center{
        float: left;
        width:13% ;
        height: 100%;
        img{
            width: 26px;
            height: 26px;
            margin-top: 12px;
            margin-left: 12px;
        }
    }
//--------标题栏 end--------
// -------颈部标签栏-----------


// -------颈部标签栏-end-------
.nav-list .container{
    // ----------轮播图----------
    background-color: #f2f2f2;
    .main_swiper{
        width: 100%;
        img{
            width:100%;
            height: 207px;
        }
    }
    // ----------轮播图-end---------
    .item-box{
        width: 100%;
        ul{
            width:100%;

            li{
                float: left;
                width: 20%;
                height: 86px;
                cursor: pointer;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
    }

    .middle-box{
        width:100%;
        height: 292px;
        margin-top:10px ;
        .left{
            width: 50%;
            height: 100%;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            width: 49%;
            height: 100%;
            float: right;
            img{
                width:100%;
                height: 50%;
            }
        }

    }

    .main-row1{
        width:100%;
        height: 160px;
        margin: 10px auto;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .main-row2{
        width:100%;
        height: 252px;
        margin-bottom: 5px;
        img{
            width: 100%;
            height: 100%;
        }

    }
    // ------商品列表----------
    .pro-list{
        width: 100%;
        background-color: white;

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


    .ti{
        width:100%;
        height: 56px;
        text-align: center;
        line-height: 56px;
        margin: 3px auto;
        background-color: white;
    }




    // ------商品列表--end--------
    //--------方块盒子商品列表--------
    .pro-box{
        width: 100%;
        margin-top: 10px;
        .imgbox{
            float: left;
            width: 49.3%;
            border:1px solid transparent;
            height: 276px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

}




    //--------方块盒子商品列表-end-------
</style>
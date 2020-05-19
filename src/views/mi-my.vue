<template>
    <div >
        <div class="container">
            <div class="myhead">
                <div class="head-box">
                    <div class="imgbox">
                        <img src="/img/head.jpg" alt="" v-if="$store.state.username">
                        <img src="/img/my-logo.png" alt="" v-else>
                    </div>
                <van-col span="10">
                    <div v-if="$store.state.username">
                        <h3 v-text="$store.state.username" class="username"></h3>
                        <span @click="$store.state.username=''" class="exit">退出</span>
                    </div>
                    <div v-else>
                        <router-link to="/login">登陆</router-link>/
                        <router-link to="/register">注册</router-link>
                    </div>
                </van-col>
                </div>
            </div>
            <div  class="myform" @click="$router.push('/orderList/orderAll')">
                <div  class="cite">我的订单</div>
                <div  class="span ui-flex align-center">
                    <a   class="">全部订单</a>
                </div>
                    <van-icon name="arrow" />
            </div>

            <div class="wait-pay">
                <div class="wait-box" @click="$router.push('/orderList?index=1')">
                    <a href="javascript:;">
                        <img src="/img/wait1.png" alt="">
                        <div class="info">
                            待付款
                        </div>
                    </a>
                </div>
                <div class="wait-box" @click="$router.push('/orderList?index=3')">
                    <a href="javascript:;">
                        <img src="/img/wait2.png" alt="">
                        <div class="info">
                            待收货
                        </div>
                    </a>
                </div>
                <div class="wait-box" @click="$router.push('/caftersell')">
                    <a href="javascript:;">
                        <img src="/img/wait3.png" alt="">
                        <div class="info">
                            退还修
                        </div>
                    </a>
                </div>
            </div>

            <div class="vip-center">
                <ul>
                    <router-link tag="li" to="/vipcenter">
                        <a href="javascript:;">
                            <span>
                                会员中心
                            </span>

                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <router-link tag="li" to="/coupon" >
                        <a href="javascript:;">
                            <span>
                                我的优惠
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <router-link tag="li" to="/service">
                        <a href="javascript:;">
                            <span>
                                服务中心
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <router-link tag="li" to="/collection">
                        <a href="javascript:;">
                            <span>
                                我的收藏
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <router-link tag="li" to="/address">
                        <a href="javascript:;">
                            <span>
                                我的地址
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <!-- <router-link tag="li" to="/service">
                        <a href="javascript:;">
                            <span>
                                礼物码兑换
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link >
                    <router-link tag="li" to="/service">
                        <a href="javascript:;">
                            <span>
                                设置
                            </span>
                        </a>
                        <van-icon name="arrow" />
                    </router-link > -->
                </ul>
            </div>

            

        </div>

        


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.username{
    margin: 0px;
    height:20px;
}



.van-col{
    height: 72px;
    line-height: 72px;
        color: white;
    a{
        color: white;
        font-size: 16px;
    }
}
.container{
    background-color: #f5f5f5;
}

    .myhead{
        width: 100%;
        height: 72px;
        background: url("/img/mybg.png") center 0 #f37d0f;
        padding: 20px 0;
        .head-box{
            width: 100%;
            height: 72px;
            .imgbox{
                height:67px;
                width: 67px;
                margin:0px 10px 0px 20px;
                float: left;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .name{
                // width: 100%;
                height: 100%;
                float: left;
                text-align: center;
                line-height: 72px;
                color:white;
            }
        }


    }


    .myform{
        position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        background-color: white;
        height: 40px;
        margin-bottom: 5px;
        div{
            margin: 0 20px;
            line-height: 40px;
            height: 40px;
        }
        .cite{

        }
        .span{
            margin-right: 30px;
        }
        .van-icon{
            position: absolute;
            font-size: 16px;
            right: 0px;
            top:17px;
            // line-height: 60px;
        }
    }

    .wait-pay{
        height: 128px;
        display: flex;
        padding: 0 60px;
        justify-content: space-between;
        background-color: #fff;
        .wait-box{
            width: 50px;
            float: left;
            height: 68px;
            // line-height: 128px;
            padding: 30px 0;
            a{
               color: rgba(0,0,0,.87);
            }
            img{
                width: 36px;
                height: 36px;
                margin:0px 5px 5px 5px;
            }
            .info{
                font-size: 12px;
                text-align: center;
            }
            
        }
    }


    .vip-center{
        margin-top: 20px;
        
        li{
            
            height: 60px;
            background:#fff url("/img/vip1.png") no-repeat 20px;
            position: relative;
            color: rgba(0,0,0,.54);
            background-size: 30px auto;
            border-bottom: 1px solid rgba(0,0,0,.15);
            a{
                display: block;
                padding: 0 32.2px 0 64.4px;
                height: 60px;
                line-height: 60px;
                color:rgba(0,0,0,.54) ;
            }
            &:nth-child(2n){
                border-bottom: 0px;
                margin-bottom: 20px;
            }   
            &:nth-child(2){
                background-image: url("/img/vip2.png");
            }
            &:nth-child(3){
                background-image: url("/img/vip3.png");
            }
            &:nth-child(4){
                background-image: url("/img/vip4.png");
            }
            &:nth-child(5){
                background-image: url("/img/vip5.png");
            }
            &:nth-child(6){
                background-image: url("/img/vip6.png");
            }
            &:nth-child(7){
                background-image: url("/img/vip7.png");
            }




            .van-icon{
                position: absolute;
                right:10px;
                top: 20px;
                font-size: 25px;
            }
        }

    }


</style>
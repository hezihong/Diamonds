<template>
    <div>
        <div class="container">
            <div class="top-btn">
                <div class="back" @click="$router.go(-1)">
                    <van-icon name="arrow-left" />
                </div>
                <div class="share">
                    <van-icon name="apps-o" />
                </div>
            </div>
            <!-- ---------轮播图----- -->
            <div class="swiperBox">
                <swiper :imgs="images" class="swiperimg"></swiper>     
            </div>

            <!-- 商品导航 加入购物车 -->
        <van-goods-action>
            <van-goods-action-icon 
                @click="$router.push('/')" 
                icon="wap-home-o" 
                color="#07c160" 
            />
            <van-goods-action-icon 
                @click="$router.push('/shopcar')" 
                icon="cart-o" 
                :info='num'
            />
            <van-goods-action-icon icon="star" color="#ff5000"  @click="onClickIcon"/>
            <van-goods-action-button type="warning"  @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" @click="text"  text="立即购买" />
        </van-goods-action>


            <div class="info-title">
                <h3>
                    {{goods.name}}
                </h3>

            </div>
            
            <div class="info-font">
                <div class="font-box">
                    <span class="font">「4GB+64GB到手价仅699元，购机抽奖赢小米电视」</span>
                    5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22"水滴全面屏 / AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 支持无线FM收音机
                </div>
            </div>

            <div class="info-price clearfix">
                <div class="now-price">
                    ￥{{goods.price}}
                </div>
                <div class="pass-price">
                    <del>￥4000</del>
                </div>
            </div>

            <!-- <div class="row-info2 clearfix">
               
                <ul class="clearfix">
                    <li>
                        <div class="imgbox">
                            <img src="/img/cpu.png" alt="">
                        </div>
                        <div class="name">
                            CPU
                        </div>
                        <div class="nameinfo">
                            晓龙939
                        </div>
                    </li>
                    <li>
                        <div class="imgbox">
                            <img src="/img/cpu.png" alt="">
                        </div>
                        <div class="name">
                            CPU
                        </div>
                        <div class="nameinfo">
                            晓龙939
                        </div>
                    </li>
                    
                </ul>
            </div> -->

            <div class="address">
                <div class="choose">
                    <div class="txt">
                        <div class="txt">已选：</div>
                        <div class="chose">
                            Redmi 8A 4GB+64GB 深海蓝 64GB x 1
                        </div>
                        
                    </div>
                    <van-icon name="arrow" />
                </div>
                <div class="choose">
                    <div class="txt">
                        <div class="txt">送至：</div>
                        <div class="chose">
                            北京市    东城区
                        </div>
                        
                    </div>
                    <van-icon name="arrow" />
                </div>

                <div class="choose">
                    <div class="part1">
                        <img src="img/gou.png" alt="">
                        <span>小米自营</span>
                    </div>
                    <div class="part1">
                        <img src="img/gou.png" alt="">
                        <span>小米发货</span>
                    </div>
                    <div class="part1">
                        <img src="img/gou.png" alt="">
                        <span>7天无条件退款</span>
                    </div>
                </div>

                



            </div>


            <div class="info-row">
                    <img src="/img/info-row1.jpg" alt="">
            </div>
            <div class="info-row">
                    <img src="/img/info-row2.jpg" alt="">
            </div>

            <div class="long">
                <img src="/img/long1.jpg" alt="">
            </div>
            <div class="long">
                <img src="/img/long2.jpg" alt="">
            </div>
            <div class="long">
                <img src="/img/long3.jpg" alt="">
            </div>

            
        </div>
    </div>
</template>

<script>
    import swiper from "../components/public/swiper.vue" 
    import { createNamespacedHelpers } from 'vuex'

    const { mapState,mapMutations } = createNamespacedHelpers('cart')
    import { Toast } from 'vant';
    export default {
        data(){
            return {
                active:0,
                goods:{
                    id:2,
                    name:"小米10 Pro",
                    price:"3999",
                    num:1,
                    isSelect:true,
                    src:"/img/roll-phone2.png",
                    info:"5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口"
                },
                 images: [
                    '/img/info1.jpg',
                    '/img/info2.jpg',
                    '/img/info3.jpg',                   
                ],

            }
        },
        components:{
            swiper,
        },
        methods:{
            text(){
                // console.log(this.$store.state.cart.lists)
                this.$store.commit('cart/add',this.goods);
                this.$router.push('/shopcar')
            },
            onClickIcon(){
                Toast('已收藏');
                this.$store.commit('cart/collectAdd',this.goods);
            },
            // getCart(){
            //     // 把数据添加入vuex购物车
            //     this.$store.commit("cart/add",this.goods);
            // }
            //add 直接调用vuex购物车里面add方法
            ...mapMutations(["add"])
        },
        computed:{
            ...mapState({
                num:state=>state.num
            })
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    .van-goods-action{
        // bottom:50px;
        height: 80px;
        // width: 90px;
        z-index: 20;
    }



    .container{
        position: relative;
        .top-btn{
            position: absolute;
            width: 100%;
            top: 10px;
            left: 0px;
            z-index: 100;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            // height: 100%;
            justify-content: space-between;

            .back{
                display: block;
                width: 34px;
                height: 34px;
                margin: 0 10px;
                color: #ddd;
                background: rgba(0,0,0,.6);
                border-radius: 50%;
                .van-icon{
                    font-size: 23px;
                    line-height: 34px;
                    text-align: center;
                    width: 90%;
                }
                
            }
            .share{
                display: block;
                width: 34px;
                height: 34px;
                margin: 0 10px;
                color: #ddd;
                background: rgba(0,0,0,.6);
                border-radius: 50%;
                line-height: .84rem;
                font-size: .32rem;
                .van-icon{
                    font-size: 23px;
                    line-height: 34px;
                    text-align: center;
                    width: 100%;
                }
            }
            
        }


        .swiperBox{
            width: 100%;
            height: 455px;
            overflow: hidden;
            .swiperimg{
                width: 100%;
                height:100%;
            }   
            div{
                width: 100%;
                height:100%;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }

        .info-title{
            background: #fff;
            text-align: left;
            padding: 20px 20px 0px 20px;

            h3{
                font-size: 20px;
                font-weight: normal;
                margin: 0px;
            }
        }

        .info-font{
            .font-box{
                padding: 0 20px;
                font-size: 12px;
                word-break: break-all;
                color: rgba(0,0,0,.54);
                .font{
                    color: rgb(255, 74, 0);
                }
            }
        }

        .info-price{
            height: 30px;
            padding: 10px 20px 0px 20px;
            div{
                float: left;
                height: 30px;               
            }
            .now-price{
                font-size: 25px;
                color: rgb(255, 74, 0);
            }
            .pass-price{
                margin: 10px;
                font-size: 12px;
                color: rgba(0,0,0,.54);
            }
        }

        .row-info2{
            margin-top: 10px;
            height: 70px;
            width: 100%;
            text-align: left;
            ul{
                // padding: 0 5px;
                height: 70px;
                width: 100%;
                li{
                    height: 100%;
                    float: left;
                    width: 24%;
                    border-right: 1px solid #ccc;
                    .imgbox{
                        width: 100%;
                        height: 23px;
                        text-align: center;
                        img{
                            width: 23px;
                            height: 23px;
                            margin: 0 auto;
                        }
                    }
                    .name{
                        text-align: center;
                        font-size: 12px;
                        color: #3c3c3c;
                    }
                    .nameinfo{
                        text-align: center;
                        font-size: 10px;
                        color: #676767;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                
                
                }

            }
        }

        .address{
            margin: 20px auto;
            width: 96%;
            height: 128px;
            border-radius: 8px;
            background-color: #fafafa;
            border: 1px solid gainsboro;
            .choose{
                padding:10px 15px;
                height: 22px;
                border-bottom: 1px solid gainsboro;
                    position: relative;
                    line-height: 22px;
                div{
                    float: left;
                    font-size: 14px;
                    line-height: 22px;
                }
                .txt{
                    color: rgba(0,0,0,.54);
                    margin-right: 10px;
                }
                .chose{
                    color: rgba(0,0,0,.87);
                    // margin-right: 26px;
                }
                .van-icon{
                    position: absolute;
                    right: 20px;
                }
                &:nth-child(3n){
                    border-bottom: 0px;
                }

                .part1{
                    float: left;
                    margin-right: 10px;
                    text-align: center;
                    img{
                        width: 12px;
                        height:12px;
                        margin-right:8px;
                        margin-top: 3px;
                    }
                    span{
                        line-height: 10px;
                        font-size: 10px;
                        color: rgba(0,0,0,.54);
                    }
                }



            }
        }


        .info-row{
            width: 96%;
            height: 146px;
            margin: 0 auto;
            img{
                border-radius: 8px;
                width: 100%;
                height: 100%;
            }
        }

        .long{
            width: 100%;
            img{
                width: 100%;
            }
        }

    }





</style>
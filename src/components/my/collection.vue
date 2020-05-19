<template>
    <div>
         <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/mimy')"
        />
        <h4>我的收藏</h4>

        <div class="container">
            <div class="collectBox" v-for="(item,index) in collectList" :key="index" >
                <div class="left" @click="$router.push('/miinfo')">
                    <img :src="item.src" alt="">
                </div>
                <div class="right" >
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="info">
                        {{item.info}}
                    </div>
                    <div class="price">
                        ￥<span>{{item.price}}</span>
                    </div>
                    <div class="btn">
                        <van-button size="small" type="danger" @click="collectDel(index)">删除</van-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="emplyCar" v-show="collectList.length == 0">
                <div class="emplyRow">
                    收藏夹为空 
                     <router-link to="/main" tag="a">去逛逛</router-link>

                </div>

                <div class="youlike">
                    <h5>猜你喜欢</h5>
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
                </div>
            </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers} from 'vuex'

    const { mapState , mapMutations } = createNamespacedHelpers('cart')
    export default {

        methods:{
            
            // del(index){
            //     // this.$store.commit('cart/collectDel',index)
            // },
            ...mapMutations([
                "collectDel",      //删除              
            ])
        },
        computed:{
            ...mapState({
                collectList: state=> state.collectList
            }),
        },
        created(){
            this.$store.state.vanTabbar = false;
            // this.collectList = this.$store.state.cart.collectList
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    h4{
        padding: 0 10px;
        font-size: 16px;
        font-weight: normal;
        margin: 0px;
        height: 30px;
        line-height: 30px;
    }
    
    .collectBox{
        margin: 10px;
        border:1px solid #ccc;
        display: flex;
        justify-content: space-between;
        .right{
            padding: 10px;
            .name{
                font-size: 16px;

            }
            .info{
                width: 100%;
                text-overflow: ellipsis;
                height:21px;
                overflow: hidden;
                text-overflow:ellipsis;
                // white-space: nowrap;
            }
            .price{
                color: red;
                height: 42px;
                line-height: 42px;
                span{
                    font-size: 18px;
                }
            }
            .btn{
                text-align: right;
                // margin-right: 20px;
            }
        }
        .left{
            height: 100%;
            text-align: center;
        }
    }



     .emplyCar{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: antiquewhite;
    }
    // ------商品列表----------
    .youlike h5{
        margin: 0px;
    }
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
</style>
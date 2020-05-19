<template>
    <div>
        <!-- <h1>购物车</h1> -->
        <van-nav-bar title="购物车"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>

        
            <div class="emplyCar" v-show="lists.length == 0 ">
                <div class="emplyRow" v-show="$store.state.username !=''">
                    购物车为空 
                     <router-link to="/main" tag="a">去逛逛</router-link>
                </div>
                <div class="emplyRow" v-show="$store.state.username ==''">
                    请先登录 
                     <router-link to="/login" tag="a">去登录</router-link>
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
        
        <van-submit-bar
            :price="sum*100"
            button-text="提交订单"
            class="shop-post"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checkAll">全选</van-checkbox>           
        </van-submit-bar>

        <!-- -----购物车主体------ -->
        <div class="container">
            <div class="shopBox" v-for="(item,index) in lists" :key = "index">
                <div class="label">
                    <van-checkbox v-model="item.isSelect"></van-checkbox>
                </div>
                <div class="right">
                    <div class="imgbox">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="info">                       
                        <span class="shop-info">
                            {{item.name}}                
                       </span>
                       <span class="span2">
                            {{item.info}}
                       </span>
                       <div class="info-price clearfix">
                           <span class='font'>售价:</span>
                            <div class="now-price">
                                ￥
                                <span class="priceNum">{{item.price}}</span>
                            </div>
                            <div class="pass-price">
                                <del>￥1000</del>
                            </div>
                        </div>
                        <div span="32" class="plus">
                                <div  class="priceBtn" @click="subtraction(index)">-</div>
                                <input type="text" v-model="item.num"  class="buynum">
                                <div  class="priceBtn"    @click="addition(index)">+</div>
                            <!-- <button type="danger" class="delBtn" @click="del(index)">删除</button> -->
                                <div class="delBox" @click="del(index)">
                                    <i class="iconfont icon-lajitong"></i>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

   <!-- -----购物车主体-end----- -->


    </div>
</template>

<script>
    import { createNamespacedHelpers} from 'vuex'
    import { Dialog } from 'vant';
    const { mapState , mapMutations } = createNamespacedHelpers('cart')
    export default {
        data(){
            return {
               
            }
        },
        methods:{
            // 删除功能
            // del(index){
            //     this.lists.splice(index,1);
            // }
            ...mapMutations([
                "del",          //删除
                "addition",     //加法功能
                "subtraction",  // 减法功能
                "changeIsSelect", //选择
            ]),
            onSubmit(){

                // 判断用户名是否为空
                // 为空：跳转登陆页面
                // 不为空:订单页面
                if(this.$store.state.username){
                    if(this.lists.find(item=>item.isSelect == true)){
                        // console.log("you")
                         this.$router.push('/forms')
                    }else{
                        Dialog.alert({
                            message: '购物车为空'
                            }).then(() => {
                            // on close
                        });
                    }

                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/shopcar"
                        }
                    })
                }

                

                
            }
        },
        computed:{
            // mapState中定义lists取代组件data中lists数据
            ...mapState({
                lists: state=> state.lists
            }),


            checkAll:{
                get(){
                    // 第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
                    return this.lists.every((item)=>{
                        return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
                    })
                },
                set(value){
                    // 遍历所有数据中选项。
                    this.lists.forEach((item)=>{
                        return item.isSelect = value;
                    })
                }
            },
        
        sum(){
                // 总价格计算
                // reduce()返回计算总价格
                // total 总价格累加
                // item 数据中对象
                return this.lists.reduce((total,item)=>{
                    // 判断选项
                    if(!item.isSelect) return total; //false不让计算总价格
                    return total + parseInt(item.price) * parseInt(item.num);//总价格
                },0);//总价格默认参数值为0
            }
        },
        
        
    }
</script>

<style lang="scss" scoped>


    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }
    .van-nav-bar{
            background-color: rgb(242, 242, 242);
            .van-nav-bar__title{
                max-width: 100%;
            }
            .van-icon{
                color: black;
            }
        }


    .shop-post{
        bottom: 50px;

    }

    .container{
        padding: 10px 10px 10px 10px;
        overflow: hidden;
        // background-color: #ccc;
        .shopBox{
            width: 100%;
            height: 160px;
            // background-color: white;
            .label{
                float: left;
                width: 10%;
                line-height: 120px;
                height: 120px;
                text-align: center;
                div{
                    display: inline-block;
                }

            }
            .right{
                float: left;
                width: 90%;
                height: 100%;
                .imgbox{
                    width: 30%;
                    height: 100%;
                    float:left;
                    img{
                        width: 100%;
                        // height: 100%;
                    }

                }

                .info{
                    float: left;
                    width: 70%;
                    .shop-info{
                        display: block;
                        font-size: 16px;
                        height:20px;
                        overflow: hidden;

                    }
                    .span2{
                        margin: 10px 0px;
                        font-size: 10px;
                        color: #666;
                    }
                    .plus{
                        width: 100%;
                        height: 30px;
                        // margin-top: 10px;
                        
                        float: left;
                    }
                    .priceBtn{
                        float: left;
                        width: 30px;
                        height: 30px;
                        font-size: 20px;
                        // margin: 0 10px;
                        line-height: 30px;
                        text-align: center;
                        border: 1px solid transparent;
                        background-color: #F4F4F4;
                        color: #707070;
                    }
                    .delBox{
                        // width: 20px;
                        height: 30px;
                        // line-height: 20px;
                        text-align: center;
                        // border: 1px solid black;
                        font-size: 25px;
                        float:right;
                        i{
                            display: inline-block;
                            font-size: 30px;
                        }
                    }
                    .buynum{
                        float: left;
                        height:30px;
                        width: 50px;
                        text-align: center;
                        line-height: 30px;
                        border: 0px solid black;
                    }
                    .delBtn{
                        width: 100px ;
                        height: 40px;
                        float:right;
                        line-height: 40px;
                        text-align: center;
                        background-color: red;
                        color: #fff;
                         outline:none;
                         border: none;
                         border-radius: 20px;
                    }
                }

                .info-price{
                    height: 23px;
                    // padding: 10px 20px 0px 20px;
                    .font{
                        float: left;
                        font-size: 15px;
                        color: rgba(0,0,0,.54);
                    }
                    div{
                        float: left;
                        // height: 30px;               
                    }
                    .now-price{
                        font-size: 15px;
                        color: rgb(255, 74, 0);
                        margin-right: 5px;
                    }
                    .pass-price{
                        margin-top: 3px;
                        font-size: 12px;
                        color: rgba(0,0,0,.54);
                    }
                }



            }
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
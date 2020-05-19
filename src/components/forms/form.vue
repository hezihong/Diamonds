<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="orderpay"
        />
        <!-- 地址 -->
        <van-contact-card
        type="edit"
        :name="name"
        :tel="tel"
        @click="add"
        />
        

        <div class="emplyRow"></div>

        <!-- 商品列表 -->
        <van-card v-for="(item,index) in selectedList" :key="index"
            :num="item.num"
            :price="item.price"
            :desc="item.info"
            :title="item.name"
            :thumb="item.src"
        />

        

        <van-action-sheet v-model="show" title="标题">
            <div class="payment clearfix">
            <van-radio-group v-model="radio" @change="onChange">
            <ul>
                <li>
                    <div class="flex">
                        <a href="javascript:;" class="bgimg1" >
                            支付宝支付
                        </a>
                        <van-radio name="1"></van-radio>
                    </div>
                </li>
                <li>
                    <div class="flex">
                        <a href="javascript:;" class="bgimg2">
                            微信支付
                        </a>
                        <van-radio name="2"></van-radio>
                    </div>
                </li>
                <li>
                    <div class="flex">
                        <a href="javascript:;" class="bgimg3">
                            银联支付
                        </a>
                        <van-radio name="3"></van-radio>
                    </div>
                </li>
            </ul>
            </van-radio-group>
        </div>
        </van-action-sheet>


        <div class="emplyRow"></div>
        <!-- 支付方式 -->
        <div class="payclick" @click="payShow" >
            <img :src="paysrc" alt="" v-show="flag" >
            {{text}}
            <van-icon name="arrow" />
        </div>
        <!-- 提交订单 -->
        <div class="emplyRow"></div>
        <van-submit-bar
        :price="sum*100"
        button-text="支付"
        @submit="onsubmit"
        />


    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                name:"",
                tel:"",
                // shopList:this.$store.state.cart.lists,
                checked:true,
                radio: '1',
                show:false,
                text:'支付宝支付',
                flag:true,
                paysrc:'/img/pay1.png'
            }
        },
        methods:{
            add(){
                // console.log("11");
                this.$router.push("/address");
            },
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    address:this.address,
                    goodsList:this.selectedList,
                    type:2 //已支付
                }
                this.$store.commit("orderlist/add",order);
                // 清除购物车数据
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;

                this.$router.push("/orderList/orderAll");
            },
            // 未支付处理
            orderpay(){
                // console.log("处理订单未支付");
                // 未支付订单处理
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    address:this.address,
                    goodsList:this.selectedList,
                    type:1 //未支付
                }
                this.$store.commit("orderlist/add",order);

                // 清除购物车数据
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;

                // 跳转路由
                this.$router.push("/shopcar");
            },
            payShow(){
                this.show = true;
            },
            onChange(){
                this.show = false; 
                // console.log(this.radio)  
                if(this.radio == 1){
                    this.paysrc = '/img/pay1.png'
                    this.text = '支付宝支付'

                }else if(this.radio == 2){
                    this.paysrc = '/img/pay2.png'
                    this.text = '微信支付'

                }else if(this.radio == 3){
                    this.paysrc = '/img/pay3.png'
                    this.text = '银联支付'

                } 

            }
        },
        computed:{
            sum(){
                // 总价格计算
                // reduce()返回计算总价格
                // total 总价格累加
                // item 数据中对象
                return this.shopList.reduce((total,item)=>{
                    return total + parseInt(item.price) * parseInt(item.num);//总价格
                },0);//总价格默认参数值为0
            },
            selectedShop(){
                return this.$store.state.cart.lists.find(item=>item.isSelect == true)
            }
        },
        
        created(){
            // 默认获取地址信息
            let defaultId = this.$store.state.address.defaultId;
            let data = this.$store.state.address.lists;
            this.address = data.find(item=>item.id == defaultId); //默认id匹配数组中id值
            // let {name,tel} = data.find(item=>item.id == defaultId); //默认id匹配数组中id值
            
            this.name = this.address.name;
            this.tel = this.address.tel;

            this.shopList = this.$store.state.cart.lists
            this.selectedList = this.shopList.filter(item=>item.isSelect == true);
            // console.log([this.selectedList])
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
    .payclick{
        padding:0px 30px;
        height: 60px;
        font-size: 18px;
        line-height: 60px;
        .van-icon{
            float: right;
            line-height: 60px;
        }
        img{
            // line-height: 50px;
            vertical-align:middle;
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
    .content {
        padding: 16px 16px 160px;
    }

    .emplyRow{
        height: 30px;
        background-color: #f5f5f5;
    }
    .clearfix::after{
        clear: both;
        display: block;
        content: "";
    }
    .payment{
        background-color:#fff ;
        width: 100%;

        li{
            margin: 0px 18px;
            height: 46px;
            .flex{
                display: flex;
                justify-content: space-between;
                height: 100%;
                // line-height: 46px;
                a.bgimg1{
                    display: block;
                    padding: 10px 0px 10px 40px;
                    background: url('/img/pay1.png') 0 50% no-repeat ;
                    background-size: 30px 30px;
                    
                }
                a.bgimg2{
                    display: block;
                    padding: 10px 0px 10px 40px;
                    background: url('/img/pay2.png') 0 50% no-repeat ;
                    background-size: 30px 30px;
                    
                }
                a.bgimg3{
                    display: block;
                    padding: 10px 0px 10px 40px;
                    background: url('/img/pay3.png') 0 50% no-repeat ;
                    background-size: 30px 30px;
                    
                }
            }
        }
        
    }
</style>
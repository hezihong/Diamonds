<template>
    <div>
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-panel 
            :title="'订单：'+item.orderId" 
            :status="typeList[item.type]"
            v-if="item.type == 2"
            >
                <!-- 商品遍历 -->
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    desc="描述信息"
                    :title="value.name"
                    :thumb="value.src"
                    />
                </div>
                <!-- 待收货 -->
                <div slot="footer" class="van-panel-footer">
                    <van-button size="small" >退款申请</van-button>
                    <van-button size="small"  @click="onGoods(item.orderId)"  >已收货</van-button>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lists:[],
                typeList:[]
            }
        },
        methods:{
            onGoods(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货改已完成。
            }
        },
        created(){
            this.typeList = this.$store.state.orderlist.typeList;
            let dataList = this.$store.state.orderlist.lists;
            this.lists = dataList.filter(item=>item.type == 2);
        },
        
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                this.$store.commit("orderlist/editId",this.lists);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .van-panel-footer{
        text-align: right;
    }
    .van-button{
        margin-left: 10px;
    }
    .orderBox{
        // height:150px !important;
        padding: 10px 0;
    }
    .van-panel {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
        box-shadow: 6px 3px 5px #888888;
    }
    .van-cell{
        border-bottom:1px solid #ccc ;
    }
</style>
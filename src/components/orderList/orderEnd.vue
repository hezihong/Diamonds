<template>
    <div>
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
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
                <!-- 评价商品 -->
                <div  slot="footer" class="van-panel-footer">
                    <van-button size="small"  @click="$router.push('/main')">继续逛逛</van-button>
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
        created(){
            this.typeList = this.$store.state.orderlist.typeList;
            let dataList = this.$store.state.orderlist.lists;
            this.lists = dataList.filter(item=>item.type == 3);
        },
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                // console.log(this.lists);
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
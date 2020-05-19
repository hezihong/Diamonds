<template>
    <div>
        <div class="top">
            <div class="back" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </div>
            <div class="search">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div>
        </div>

        <h3 class="hotSearch">热门搜索</h3>

        <div class="hotImg">
            <img src="/img/search1.jpg" alt="">
        </div>

        <div class="hotbox">
            <a href="javascript:;">黑鲨游戏手机3</a>
            <a href="javascript:;">黑鲨游戏手机3 Pro</a>
            <a href="javascript:;">小米10</a>
            <a href="javascript:;">头脑王小米10Pro</a>
            <a href="javascript:;">破壁料理机</a>
            <a href="javascript:;">空调（1.5匹）</a>
            <a href="javascript:;">Redmi Note 8</a>
            <a href="javascript:;">小米手环4</a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:""
            }
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
    .top{
        height:50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .back{
            width: 10%;
            height: 50px;
            line-height: 60px;
            text-align: center;
            font-size: 20px;
        }
        .search{
            width: 90%;
        }
    }
    .hotSearch{
        padding-left: 30px;
        font-weight: normal;
        font-size: 20px;
        height: 58px;
        line-height: 58px;
        margin: 0px;
    }

    .hotImg{
        width:100%;
        height: 146px;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .hotbox{
        padding: 20px;
        height: 170px;
        // display: flex;
        // justify-content: space-between;
        a{
            display: inline-block;
            margin: 5px;
            padding: 10px 14px;
            color: rgb(72, 72, 72);
            border-color: rgb(250, 96, 53);
            background: rgb(255, 189, 197);
            border: 1px solid #e4e4e4;
            font-size: 18px;
        }

    }
</style>
<template>
    <div>
         <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/mimy')"
        />

        <div class="container">
            <div class="main">
                <div class="afterBtn">
                    <!-- <button></button> -->
                    申请售后
                </div>
                <div class="noneimg">
                    <img src="/img/noneimg1.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
    .van-nav-bar{
        background-color: #F2F2F2;
    }
    .container{
        background-color: #eee;
        // height: -webkit-calc(100% - 50px);
        height: calc(100% - 50px);
        overflow-y: auto;
        position: fixed;
        width: 100%;
        .main{
            padding: 20px;
        }
        

    }
    .afterBtn{
        width: 100%;
        height: 50px;
        background-color: #fff;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        border:1px solid #ccc;
        color: #757575;
        cursor: pointer;

    }
    .noneimg{
        padding: 80px 0px;
        text-align: center;
        img{
            width:150px;
            height: auto;
        }
    }
</style>
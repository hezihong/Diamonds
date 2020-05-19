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
                <div class="text">
                    <p>
                        请前往专属App查看会员福利
                    </p>
                </div>
                <div class="afterBtn">
                    <!-- <button></button> -->
                    立即下载专属App
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
        // background-color: #eee;
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
        background-color: #FF5B00;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        // border:1px solid #ccc;
        color: #fff;
        cursor: pointer;

    }
    .text{
        padding: 80px 23px 57px 23px;
        p{
            text-align: center;
            font-size: 20px;
        }
    }
</style>
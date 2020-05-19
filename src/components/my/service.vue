<template>
    <div>
        <van-nav-bar title="服务中心"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>

        <div class="top">
            <h4>自助服务</h4>
            <div class="nav">
                <ul>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/service1.png" alt="">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
        h4{
            font-size: 20px;
            font-weight: normal;
            padding-left: 20px;
        }
    }
    .nav{
        width: 100%;
        height: 162px;
        ul{
            list-style: none;
            padding: 0px;
            margin: 0px;
            li{
                width:25%;
                height: 81px;
                float: left;
                a{
                    display: inline-block;

                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
<template>
    <div >
        <!-- <h1>广告页<font style="font-size:40px">{{num}}</font></h1>
        <h2>广告只打三秒</h2>
        <button @click="goHome">跳过</button> -->

        <div class="bg">
            <div class="imgbox">
                <img src="/img/02.gif" alt="">

                <div class="skip">
                    <div class="time">
                        {{num}}
                    </div>
                    <div class="font" @click="$router.push('/main')">
                        跳过
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:3,
                cleardata:null //清除定时器
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommend");//推荐页面
            }
        },
        created(){
            // 倒计时定时器
            this.cleardata = setInterval(() => {
                if(this.num == 0){
                    this.$router.push("/main");//推荐页面
                    // console.log("跳转页面");
                }else{
                    this.num--;
                }
            }, 1000);
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
        // 销毁生命周期函数之前停止
        beforeDestroy() { //销毁vue数据与方法。组件结束执行
            // 定时器属于浏览器对象，属于window。
            clearInterval(this.cleardata);
        },
    }
</script>

<style lang="scss" scoped>
    div.imgbox{
        width: 100%;
        height: 100%;
        position: relative;
        background: #B5FFF5;
        img{
            width: 100%;
            height: 100%;
        }
        .skip{
            position:absolute;
            z-index: 100;
            right: 20px;
            top: 20px;
            width: 100px;
            height: 40px;
            background-color: rgba(0, 0,0,0.4);
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            .time{
                width: 40px;
                color: white;
                line-height: 40px;
                text-align: center;
            }
            .font{
                width: 60px;
                color: white;
                line-height: 40px;
                text-align: center;
                border-left: 1px gainsboro solid;
            }
        }

        
    }

    .bg{
        height: 100%;
        position: fixed;
        height: 100%;
        width: 100%;
        
    }
</style>
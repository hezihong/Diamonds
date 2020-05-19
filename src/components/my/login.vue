<template>
    <div>
        <!-- <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        /> -->


        <div class="top-btn">
                <div class="back" @click="$router.push('/mimy')">
                    <van-icon name="arrow-left" />
                </div>
                <!-- <div class="share">
                    <van-icon name="apps-o" />
                </div> -->
        </div>
        <div class="container">
            

        </div>

            <div class="wel">
                welcome
            </div>
            <van-form @submit="onSubmit" class="loginform">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    class="color"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                </div>
                <div class="register">
                    <a href="javascript:;" @click="$router.push('/register')">
                        没有账号？去注册
                    </a>
                </div>
            </van-form>

    </div>
</template>

<script>
import { Toast } from 'vant';
import '../../sass/main.scss'
export default {
        data() {
            return {
            username: '123',
            password: '123',
            };
        },
        methods: {
           onSubmit(params) {
                // 请求登陆接口
                let _this = this;
                // 判断是否传参,修改返回对象路径
                let path = "/mimy";
                if("path" in _this.$route.query){
                    path = _this.$route.query.path;
                }

                this.$axios.get("login",{params}).then((res)=>{
                    // 请求数据成功后提示
                    // console.log(res.data)
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            // 提示后回调
                            onOpened(){
                                // 设置store中添加用户名
                                _this.$store.state.username = _this.username;
                                // 跳转登陆路由
                                _this.$router.push(path);
                            }
                        })

                    }else{
                        Toast("登陆失败");
                    }
                })
            },
        },
    
        created(){
            this.$store.state.vanTabbar = false;
            
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    };
</script>

<style lang="scss" scoped>
    .register{
        text-align: center;
        height: 30px;
        a{
        color: white;

        }
    }
    .wel{
        width: 100%;
        height:150px;
        text-align: center;
        line-height: 150px;
        font-size: 36px;
        color: white;
    }
    .container{
        width: 100%;
        height: 740px;
        background: url('/img/loginbg2.jpg') no-repeat;
        background-size: cover;
        position: fixed;
        top:0px;
        left:0px;
        z-index: -1;
    }
    .van-form{
        background-color: rgba(0,0,0,0.4);
    }
    .van-cell{
        background-color: transparent;
        color: white;
        background-color: transparent;
        input{
            color: white;
        }
        
    }
   .color .van-field__control {           
        color: white ;
    }

    input{
            color: white !important;
    }
    .top-btn{
            position: absolute;
            width: 100%;
            top: 10px;
            left: 0px;
            z-index: 100;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            // height: 100%;
            justify-content: space-between;

            .back{
                display: block;
                width: 34px;
                height: 34px;
                margin: 0 10px;
                color: #ddd;
                background: rgba(0,0,0,.6);
                border-radius: 50%;
                .van-icon{
                    font-size: 23px;
                    line-height: 34px;
                    text-align: center;
                    width: 90%;
                }
                
            }
            .share{
                display: block;
                width: 34px;
                height: 34px;
                margin: 0 10px;
                color: #ddd;
                background: rgba(0,0,0,.6);
                border-radius: 50%;
                line-height: .84rem;
                font-size: .32rem;
                .van-icon{
                    font-size: 23px;
                    line-height: 34px;
                    text-align: center;
                    width: 100%;
                }
            }
            
        }
</style>
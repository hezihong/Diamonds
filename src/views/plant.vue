<template>
    <div>
        <van-nav-bar title="星球"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>


        <div class="main clearfix">
            <div class="title">
                
                <h3 >兴趣圈</h3>   
                
                <!-- Swiper -->
				<div class="swiper-container recommendslide">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
                            <div class="roll clearfix">
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
						<div class="swiper-slide">
                            <div class="roll clearfix">
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
						<div class="swiper-slide">
                            <div class="roll clearfix">
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                                <div class="rollBox">
                                    <div class="imgbox">
                                        <img src="../assets/img/pl1.png" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">
                                            有奖征集
                                        </div>
                                        <div class="txt">
                                            智能家居方案
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
							
					</div>
				</div>
            </div>

            <div class="items clearfix">
                <div class="itemBox">
                    <img src="../assets/img/buy1.png" alt="">
                </div>
                <div class="itemBox">
                    <img src="../assets/img/buy1.png" alt="">
                </div>
                <div class="itemBox">
                    <img src="../assets/img/buy1.png" alt="">
                </div>
                <div class="itemBox">
                    <img src="../assets/img/buy1.png" alt="">
                </div>
            </div>

            <!-- 主体 -->
            <div class="container clearfix">
                <div class="left">
                    <!-- 论坛盒子 -->
                    <div class="plantBox" v-for="(item,index) in leftList" :key="index" @click="$router.push('/plantinfo')">
                        <div class="imgBox">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="info">
                            {{item.info}}
                        </div>
                        <div class="name">
                            {{item.name}}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <!-- 论坛盒子 -->
                    <div class="plantBox" v-for="(item,index) in rightList" :key="index" @click="$router.push('/plantinfo')">
                        <div class="imgBox">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="info">
                            {{item.info}}
                        </div>
                        <div class="name">
                            {{item.name}}
                        </div>
                    </div>
                    
                </div>
                
            </div>


        </div>

        <div class="photoBtn" @click='onPost'>
            <van-icon name="upgrade" />
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        data(){
            return {
                imgs:[
                    {
                        img: require("../assets/img/pl1.png"),
                    },
                    {
                        img: require("../assets/img/pl2.jpg"),
                    },
                    {
                        img: require("../assets/img/pl3.jpg"),
                    },
                ]

                
            }
        },
        methods:{
            onPost(){
                if(this.$store.state.username){                   
                    this.$router.push('/plantadd')
                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/plant"
                        }
                    })
                }

            }
        },
        
        created(){
            this.rightList = this.$store.state.plant.plantRight;
            this.leftList = this.$store.state.plant.plantLeft;
            // console.log(this.rightList)
        },
       mounted(){
			this.swiperObj = new Swiper(".recommendslide");
		}

    }
</script>

<style lang="scss" scoped>
    .title{
        margin:10px;
        // padding-top: 10px;
        font-size: 20px;
        font-weight: normal;
        
        border-radius:8px ;
        // text-align: center;
        background-color: #fff;
        h3{
            height: 30px;
            line-height: 30px;
            margin: 0px;
            font-size: 18px;
            padding-left: 10px;
        }
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .main{
        padding-top: 10px;
        background-color: #F5F5F5;
    }
    .container{
        width:calc(100% - 20px) ;
        margin: 0 10px;
        background-color: #F5F5F5;
    }
    .left{
        float:left;
        width: calc(50% - 5px);
    }
    .right{
        float: right;
        width: calc(50% - 5px);
    }
    .plantBox{
        width:100%;
        margin-right: 5px;
        max-height: 290px;
        border-radius: 8px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 10px;
        
        &:nth-child(2n){
            float: right;
            margin-right: 0px;
        }
        .imgBox{
            height: 188px;
            width: 100%;
            
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            margin-top: 5px;
            padding: 5px;
            font-size: 16px;
            color: #3F3F3F;
            max-height: 60px;
            overflow: hidden;
            box-sizing: content-box;
        }
        .name{
            padding:6px 10px;
            font-size: 12px;
            color: #7F7F7F;
        }
    }

    // 按钮
    .photoBtn{
        position: fixed;
        bottom: 100px;
        left: calc(50% - 25px);
        line-height: 50px;
        text-align: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #FF5B00;
        .van-icon{
            font-size: 30px;
            line-height: 50px;
            color: #fff;
        }
    }

    .topbar{
        background-color: #F2F2F2;
    }

    //划动条
    .roll{
        height:110px;
    }
    .rollBox{
        width: 33.3333%;
        height: 120px;
        float:left;
        .imgbox{
            width: 64px;
            height: 64px;
            border-radius: 50%;
            overflow:hidden;
            background-size: cover;
            margin: 5px auto;
            img{
                width: 100%;
                height: 100%;
            }

        }
        .info{
            padding: 5px;
            .name{
                text-align: center;
                font-size: 12px;
                font-weight: bold;
            }
            .txt{
                font-size: 12px;
                color: rgba(0,0,0,0.6);
                text-align: center;
            }
        }
    }
    .items{
        margin: 10px;
        .itemBox{
            width: calc(25% - 5px) ;
            height: 100px;
            float: left;
            margin-right: 6px;
            img{
                width: 100%;
                height: 100%;
            }
            &:nth-child(4){
                margin-right: 0px;
            }
        }
    }

</style>
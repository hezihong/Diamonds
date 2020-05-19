<template>
    <div>
        <!-- <h1>shouye</h1> -->
        <div class="main-title">
            <div class="title-logo">
                <van-icon name="gem" />
            </div>
            <div class="search" >
                <van-icon name="search" />
                <input type="text" placeholder="请输入" class="search-txt"  @focus="getSearch">
            </div>
            <div class="self-center" @click="$router.push('/mimy')">
                <img src="/img/mi-icon05gray.png" alt="">
            </div>
        </div>
        <van-tabs v-model="active" animated class="main-nav" >
            <van-tab class="nav-list">
                <div slot="title"  class="list-title">推荐</div>
                <!-- 推荐组件栏 -->
                <recommend></recommend>
            </van-tab>
            <van-tab class="nav-list">
                <div slot="title" class="list-title">手机</div>
                <!-- 手机组件栏 -->
                <phone></phone>
            </van-tab>
            <van-tab class="nav-list">
                <div slot="title" class="list-title">智能</div>
                <intelligence></intelligence>
            </van-tab>
            <!-- <van-tab class="nav-list">
                <div slot="title" class="list-title">电视</div>
                <div>
                    推荐3
                </div>
            </van-tab> -->
            <!-- <van-tab class="nav-list">
                <div slot="title" class="list-title">笔记本</div>
                <div>
                    推荐3
                </div>
            </van-tab>
            <van-tab class="nav-list">
                <div slot="title" class="list-title">家电</div>
                <div>
                    推荐3
                </div>
            </van-tab>
            <van-tab class="nav-list">
                <div slot="title" class="list-title">生活周边</div>
                <div>
                    推荐3
                </div>
            </van-tab> -->
        </van-tabs>
    </div>
</template>

<script>

    import '../sass/main.scss'
    // import swiper from "../components/public/swiper.vue" 
    import recommend from '../components/main/recommend.vue'
    import phone from '../components/main/phone.vue'
    import intelligence from '../components/main/intelligence.vue'
    export default {
        data(){
            return {
                // trueboo:true,
                active:0,
                images: [
                    '/img/swiper1.jpg',
                    '/img/swiper2.jpg',
                    '/img/swiper3.jpg',                   
                ],
                 images2: [
                    '/img/mid-row1.jpg',
                    '/img/swiper4.jpg',
                    '/img/swiper5.jpg',                   
                ],

            }
        },
        components:{
            // swiper,
            recommend,
            phone,
            intelligence,
        },
        methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            }
        }
    }
</script>

<style lang="scss" scope>
ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
}
.clearfix::after{
    content: "";
    display: block;
    clear: both;
}
//--------标题栏 end--------
    .main-title{
        width: 100%;
        height: 48px;
        background-color: #f2f2f2;
        color: #666;
        overflow: hidden;
    }
    .main-title div{
        float:left;
    }
    .main-title .title-logo{  
        width: 15%;
        height: 100%;
        display: flex;   
        align-items: center;
        text-align: center;
        .van-icon {
            width:100%;
            text-align: center;
            font-size: 30px;
            color: orangered;
        }
    }
    .main-title .title-logo img{
            box-sizing: inherit;
            background-repeat: no-repeat;
            padding: 0;
            display: block;
            width: 30px;
            margin: 14px auto;
    }
    .main-title .search{
        width: 72%;
        background-color: white;
        height: 34px;
        text-align: left;
        overflow: hidden;
        margin-top: 7px;
        color: #B2B2B2;
    }
    .main-title .search .van-icon{
        font-size: 20px;
        width: 34px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        float: left;
    }
    .main-title .search-txt{
        height: 34px;
        line-height: 34px;
        border: 0px;
        float: left;
        color:#B2B2B2;
    }
    .main-title .self-center{
        float: left;
        width:13% ;
        height: 100%;
        img{
            width: 26px;
            height: 26px;
            margin-top: 12px;
            margin-left: 12px;
        }
    }
//--------标题栏 end--------
// -------颈部标签栏-----------


// -------颈部标签栏-end-------
.nav-list .container{
    // ----------轮播图----------
    background-color: #f2f2f2;
    .main_swiper{
        width: 100%;
        img{
            width:100%;
            height: 207px;
        }
    }
    // ----------轮播图-end---------
    .item-box{
        width: 100%;
        ul{
            width:100%;

            li{
                float: left;
                width: 20%;
                height: 86px;
                cursor: pointer;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
    }

    .middle-box{
        width:100%;
        height: 292px;
        margin-top:10px ;
        .left{
            width: 50%;
            height: 100%;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            width: 49%;
            height: 100%;
            float: right;
            img{
                width:100%;
                height: 50%;
            }
        }

    }

    .main-row1{
        width:100%;
        height: 160px;
        margin: 10px auto;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .main-row2{
        width:100%;
        height: 252px;
        margin-bottom: 5px;
        img{
            width: 100%;
            height: 100%;
        }

    }
    // ------商品列表----------
    .pro-list{
        width: 100%;
        background-color: white;

        ul{
            width: 100%;

            li{
                float: left;
                width: 48.5%;
                height: 280px;
                margin:5px 3px;
                &:nth-child(2n){
                    margin-right: 0px;
                }
                .imgbox{
                    height: 160px;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    // width: 100%;
                    height: 100px;
                    padding:10px ;
                    text-align: center;
                    .name{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: .28rem;
                        color: rgba(0,0,0,.87);
                    }
                    .brief{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-top: 5px;
                        font-size: 10px;
                        line-height: 15px;
                        color: rgba(0,0,0,.54);

                    }
                    .price {
                        font-size: 12px;
                        color: #ea625b;
                        height: 15px;
                        line-height: 15px;
                        position: relative;
                        display: inline-block;
                    }
                    .buybtn {
                        width: 60%;
                        height: 34px;
                        background: #ea625b;
                        border-radius: 5px;
                        text-align: center;
                        color: #fff;
                        line-height: 34px;
                        font-size: 16px;
                        margin: 0 auto;
                        // padding: .16rem 0;
                        font-weight: 700;
                    }
                }


            }
        }
    }


    .ti{
        width:100%;
        height: 56px;
        text-align: center;
        line-height: 56px;
        margin: 3px auto;
        background-color: white;
    }




    // ------商品列表--end--------
    //--------方块盒子商品列表--------
    .pro-box{
        width: 100%;
        margin-top: 10px;
        .imgbox{
            float: left;
            width: 49.3%;
            border:1px solid transparent;
            height: 276px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }






    //--------方块盒子商品列表-end-------

    //-------手机页面横向商品块------------
   

    .row-phone{
        width: 99%;
        margin: 8px auto;
        height: 330px;
        background-color: white;
        .imgbox{
            width: 100%;
            height: 250px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            padding: 5px;
            height: 70px;
            .l1{
                align-items: center;
                display: flex;
                overflow: hidden;
                justify-content: space-between;

                .name{
                    color: rgba(0,0,0,.87);
                    font-size: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price {
                    font-size: 16px;
                    color: #ea625b;
                    height: 15px;
                    line-height: 15px;
                    position: relative;
                    display: inline-block;
                }
            }
            .l2{
                align-items: center;
                display: flex;
                overflow: hidden;
                justify-content: space-between;
                .brief{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-top: 5px;
                    font-size: 10px;
                    line-height: 15px;
                    color: rgba(0,0,0,.54);
                }

                .buybtn{
                         width: 114px;
                        height: 34px;
                        background: #ea625b;
                        border-radius: 5px;
                        text-align: center;
                        color: #fff;
                        line-height: 34px;
                        font-size: 16px;
                        // margin: 0 auto;
                        // padding: .16rem 0;
                        font-weight: 700;
                }

            }
            
        }
        
    }
    //-------手机页面横向商品块end------------

    //------手机页面商品列表--------
    .pro-list2{
        width: 100%;
        background-color: rgb(230, 231, 251);

        ul{
            width: 100%;

            li{
                float: left;
                width: 48.5%;
                height: 280px;
                margin:5px 3px;
                &:nth-child(2n){
                    margin-right: 0px;
                }
                .imgbox{
                    height: 160px;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    // width: 100%;
                    height: 100px;
                    padding:10px ;
                    text-align: center;
                    background-color: #fff;
                    .name{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: .28rem;
                        color: rgba(0,0,0,.87);
                    }
                    .brief{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-top: 5px;
                        font-size: 10px;
                        line-height: 15px;
                        color: rgba(0,0,0,.54);

                    }
                    .price {
                        font-size: 12px;
                        color: #ea625b;
                        height: 15px;
                        line-height: 15px;
                        position: relative;
                        display: inline-block;
                    }
                    .buybtn {
                        width: 60%;
                        height: 34px;
                        background: #ea625b;
                        border-radius: 5px;
                        text-align: center;
                        color: #fff;
                        line-height: 34px;
                        font-size: 16px;
                        margin: 0 auto;
                        // padding: .16rem 0;
                        font-weight: 700;
                    }
                }


            }
        }
    }









    //------手机页面商品列表--end------



}








</style>
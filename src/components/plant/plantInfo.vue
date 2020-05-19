<template>
    <div>
        <van-nav-bar title="文章详情"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>

        <div class="top">
            <div class="topimg">
                <img src="../../assets/img/plantbg.png" alt="">

            </div>
            <div class="topMsg">
                <div class="topTitle">
                    <span>房子是租的，但生活不是。</span>
                </div>
                <div class="topContent clearfix">
                    <div class="head">
                        <img src="../../assets/img/pl2.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="name">
                            小米手机
                        </div>
                        <div class="time">
                            4天前
                        </div>
                    </div>
                    <div class="btn">
                        +关注
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <p>
                我从16岁（现在20岁）开始自己租房子住的时候到现在，一直坚持的一点是：房子是租的，但生活是自己的。最开始接触小米的时候是小米的MIUI系统，然后是红米Note4、小米Note3，后来慢慢开始接触小米的智能家居产品，又买了小米9，和现在的小米10Pro，不知不觉自己的生活里到处都是小米。
            </p>
            <div class="imgbox">
                <img src="../../assets/img/plinfo1.jpg" alt="">
            </div>
            <p>
                我从16岁（现在20岁）开始自己租房子住的时候到现在，一直坚持的一点是：房子是租的，但生活是自己的。最开始接触小米的时候是小米的MIUI系统，然后是红米Note4、小米Note3，后来慢慢开始接触小米的智能家居产品，又买了小米9，和现在的小米10Pro，不知不觉自己的生活里到处都是小米。
            </p>
            <div class="imgbox">
                <img src="../../assets/img/plinfo1.jpg" alt="">
            </div>
            <p>
                我从16岁（现在20岁）开始自己租房子住的时候到现在，一直坚持的一点是：房子是租的，但生活是自己的。最开始接触小米的时候是小米的MIUI系统，然后是红米Note4、小米Note3，后来慢慢开始接触小米的智能家居产品，又买了小米9，和现在的小米10Pro，不知不觉自己的生活里到处都是小米。
            </p>

            <div class="article clearfix">
                <div class="read">
                    阅读  {{this.$store.state.plant.readNum}}
                </div>
                <div class="like" @click="likeAdd">
                    <img src="../../assets/img/like.png" alt="" >
                    <span>
                        {{likeNum}}
                    </span>
                </div>
            </div>

            <h3>评论</h3>

            <div class="comment clearfix">
                <div class="commentBox clearfix" v-for="(item,index) in commentList" :key="index">
                    <div class="left">
                        <img src="../../assets/img/plantbg.png" alt="">
                    </div>
                    <div class="right">
                        <div class="rightInfo">
                            <div class="name">
                                {{item.name}}
                                <div class="like" @click="commitLikeAdd(index)">
                                    <img src="../../assets/img/like.png" alt="" >
                                    <span>
                                        {{item.likeNums}}
                                    </span>
                                </div>
                            </div>
                            <div class="data">
                                {{item.time}}
                            </div>
                            
                        </div>
                        <div class="content">
                            {{item.content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="heightBox">

        </div>
        <van-popup
        v-model="show"
        position="bottom"
        closeable
        :style="{ height: '30%' }"
        >
            <div class="emplty"></div>
            
                <van-field
                    v-model="message"
                    rows="2"
                    autosize
                    label="留言"
                    type="textarea"
                    maxlength="50"
                    placeholder="请输入留言"
                    show-word-limit
                />
            <div class="comBox">
                <van-button round type="info" class="submit" @click="onSubmit">提交</van-button>
            </div>
        </van-popup>

        <van-goods-action>
            <van-goods-action-button type="" text="立即评论" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                likeNum:this.$store.state.plant.likeNum,
                show: false,
                message:'',
                nowTime:''
            }
        },
        methods:{
            likeAdd(){
                this.likeNum += 1;
                // console.log(this.likeNum)
                
            },
            onClickButton(){
                if(this.$store.state.username){                   
                    // this.$router.push('/plantadd')
                    this.show = true;
                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/plantinfo"
                        }
                    })
                }
                
            },
            onSubmit(){
                let datatime =  this.$options.methods.getTime();
                // console.log(datatime)
                this.commentList.push({
                    name:this.$store.state.username,
                    likeNums:0,
                    content:this.message,
                    time:datatime
                })
                this.show = false;
                this.message = ''
            },
            commitLikeAdd(index){
                this.commentList[index].likeNums += 1;

            },
            getTime(){
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth()+1;
                let dd = new Date().getDate();
                let hh = new Date().getHours();
                let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
                let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
                return yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
            }
            
        },
        created(){

            // this.$store.state.vanTabbar = false;
            this.$store.state.plant.readNum +=1;
            this.readNum = this.$store.state.plant.readNum;
            // this.likeNum = this.$store.state.plant.likeNum;
            this.commentList = this.$store.state.plant.commentList;
            // console.log(this.commendList)

        },
        destroyed(){
            this.$store.state.plant.likeNum = this.likeNum;
            this.$store.state.plant.commentList = this.commentList;
            // 当组件被销毁时候，修改导航数据
            // this.$store.state.vanTabbar = true;
        }

    }
</script>

<style lang="scss" scoped>
    .van-nav-bar{
        background-color: #F2F2F2;
    }
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .top{
        width: 100%;
        height: 276px;
        overflow: hidden;
        position: relative;
        .topimg{
            width: 100%;
            height: 100%;
            position: relative;
            img{
                position: absolute;
                width: 100%;
                top: -20px;
            }
        }
        .topMsg{
            position: absolute;
            bottom: 0px;
            padding: 35px 15px 15px 15px;
            width: 100%;
            height: 160px;
            overflow: hidden;
            box-sizing: border-box;
            .topTitle{
                font-size: 24px;
                color: white;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .topContent{
                width: 100%;
                .head{
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    float:left;
                    overflow: hidden;
                    margin-right: 20px;
                    img{
                        width:100%;
                        height: 100%;
                    }

                }
                .info{
                    width:226px ;
                    float: left;
                    color: white;
                    .name{
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 30px;
                    }
                    .time{
                        font-size: 12px;
                    }
                }
                .btn{
                    width: 72px;
                    height: 27px;
                    border-radius: 13px;
                    background-color: orange;
                    color: white;
                    float:right;
                    text-align: center;
                    line-height: 27px;
                    margin-top: 16px;
                }
            }

        }
    }

    .container{
        margin: 20px 16px;
        
        p{
            font-size: 18px;
            line-height: 30px;
            text-indent: 20px;
            margin: 30px 0;
        }
        .imgbox{
            width: 100%;
            height: auto;
            img{
                width: 100%;
                height:100%;
            }
        }

        .article{
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            .read{
                width: 100px;
                float: left;
                color: rgba(0,0,0,.54);
            }
            .like{
                width:40px;
                height: 18px;
                float:right;

                img{
                    width: 13px;
                    height: 13px;
                    // margin-bottom:12px ;
                }
                span{
                    font-size: 8px;
                    line-height: 12px;
                     color: rgba(0,0,0,.54);
                }
            }
        }
    }

    .comment{

        .commentBox{
            margin-bottom: 20px;
            .left{
                float: left;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                overflow: hidden;
                
                img{
                    width:100%;
                    height:100%;
                }
            }
            .right{
                float: left;
                margin-left: 20px;
                width: calc(100% - 62px );
                .rightInfo{
                    .like{
                        width:40px;
                        height: 18px;
                        float:right;

                        img{
                            width: 13px;
                            height: 13px;
                            // margin-bottom:12px ;
                        }
                        span{
                            font-size: 8px;
                            line-height: 12px;
                            color: rgba(0,0,0,.54);
                        }
                    }
                    .name{
                        width:calc(100%);
                        float: left;
                        color:  rgba(0,0,0,.54);
                        font-size: 16px;
                    }
                    .data{
                        width:calc(100% - 40px );
                        float: left;
                        color:  rgba(0,0,0,.54);
                        font-size: 10px;
                    }
                }

                .content{
                    width: 100%;
                    float: left;
                    margin-top: 20px;
                }

            }
        }
    }

    .van-goods-action{
        bottom: 50px;
    }

    .comBox{
        padding: 10px;
    }

    div.emplty{
        height: 44px;
        width: 100%;
    }
    .submit{
        width: 100%;
    }

    .heightBox{
        height: 100px;
    }
</style>
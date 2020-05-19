<template>
    <div>
        <van-nav-bar title="分类"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>
        <!-- item2 -->
        <!-- <h4><span style="color:red">作业：</span>把小米联动分类功能,写到当前组件中</h4> -->
        

        <div class="content">
            <div class="left" ref="left">
                <ul  class="clearfix">
                    <li v-for="(item,index) in left"  :class="{current:index==currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <!-- <div class="rolltop">
                    <img src="/img/roll-top.jpg" alt="">
                </div> -->
                <ul class="clearfix">
                    <!-- 循环嵌套 -->
                    <li v-for="(item,index) in right" class="right-item right-item-hook" :key="index">
                        <div class="roll-title">
                            <span>{{item.name}}</span>
                            </div>
                        <ul class="product-phone clearfix">
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone1.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone2.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone1.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone2.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone1.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone1.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                            <li @click="toinfo">
                                <div class="imgbox">
                                    <img src="/img/roll-phone1.png" alt="">
                                </div>
                                <div class="name">
                                    黑纱手机3
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>



    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data:function(){
            return {
                left:["新品","众筹","小米手机","Redmi","黑鲨","电视",],
                right:[
                    {name:"新品",content:[1,2,3,4,5,6]},
                    {name:"众筹",content:[1,2,3,4]},
                    {name:"小米手机",content:[1,2,3,4,5]},
                    {name:"Redmi",content:[1,2,3]},
                    {name:"黑鲨",content:[1,2,3,4]},
                    {name:"电视",content:[1,2,3]}
                ],
                scrollY:0,
                listHeight:[]  //存储右边每一项li高度
            }
        },
        methods: {
            test(){
                this.$router.push({path:"/main"})
            },
            toinfo(){
                this.$router.push({path:"/miinfo"})
            },
            _initScroll(){
                    // 联动实例化插件对象
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    // console.log(this.rights)
                    // right这个对象监听滚动事件，
                    this.rights.on("scroll",(pos)=>{
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
        },
        
            _getHeight(){
                let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                let height = 0;//默认高度
                this.listHeight.push(height); //添加高度数组中
                // 循环对象
                for(let i = 0;i < rightItems.length;i++){
                    let item = rightItems[i];
                    height += item.clientHeight; // 对象高度
                    this.listHeight.push(height);
                }
            },
            // 左侧点击效果
            // index 下标
            // event 点击对象事件
            selectItem(index,event){
                // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
                // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                if(!event._constructed){
                    return;
                }else{
                    // 联动效果
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let el = rightItems[index];
                    // scrollToElement()//滚动到指定的目标元素
                    this.rights.scrollToElement(el,0);
                
                    //左边联动
                    let leftItems = this.$refs.left.getElementsByTagName("li") 
                    let elLi = leftItems[index]
                    this.lefts.scrollToElement(elLi,0);
                
                }
            }
        },

        computed: {
                currentIndex(){
                    for(let i = 0; i < this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
                        if(!height2 || (this.scrollY >=height && this.scrollY < height2) ){
                            let leftItems = this.$refs.left.getElementsByTagName("li") 
                            let elLi = leftItems[i];
                            this.lefts.scrollToElement(elLi,0);
                            return i;
                        }
                    }
                    // 如果this.listHeight没有值，返回0
                    return 0;
                }
        },
        // 生命周期函数
            mounted() {  //页面渲染到浏览器时候
                // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
                // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
                // $nextTick() 让所有DOM执行完后，回调执行方法
                this.$nextTick(()=>{
                    this._initScroll();//调用初始化联动效果
                    this._getHeight(); //获取右边每一项高度
                    // console.log("111")

                    // 跳转效果
                    if("id" in this.$route.query){
                        // console.log(this.$route.query.id)
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[this.$route.query.id];
                        this.rights.scrollToElement(el);
                    }
                })

                


            }
}
</script>

<style lang="scss" scoped>
        .van-nav-bar .van-icon{
            font-size: 20px;
        }           
        *{
            padding:0px;
            margin:0px;
        }
        ul{
            list-style: none;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
            top:50px;
            bottom: 50px;
            // background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }

        .rolltop{
            width: 80%;
            height:115px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .left{
            flex:0 0 80px;
            width: 80px;
            background-color: #fff;
        }
        .left li{
            width:100%;
            height: 100%;
        }
        .left li.current{
            // background-color: #007AAE;
            color:#fb7d34;
            font-weight: bold;
        }
        .left-item{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            // background-color: azure;
        }
        .right li{
            width:100%;
        }
        // .right-item li{
        //     width: 100%;
        //     height: 100px;
        //     line-height: 100px;
        //     text-align: center;
        //     border: 1px solid yellow;
        // }
        .clearfix::after{
            content: "";
            clear: both;
            display: block;
        }

        .van-nav-bar{
            background-color: rgb(242, 242, 242);
            .van-nav-bar__title{
                max-width: 100%;
            }
            .van-icon{
                color: black;
            }
        }

        .roll-title{
            text-align: center;
            height: 70px;
            line-height: 70px;
            font-size: 16px;
            span{
                position: relative;
            }
        }
        
        .roll-title span::after{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 20px;
            border-top: 1px solid #e0e0e0;
            left: auto;
            right: 0;
            transform: translate3d(150%,-50%,0);
    
        }
        .roll-title span::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 20px;
            border-top: 1px solid #e0e0e0;
            transform: translate3d(-150%,-50%,0);
            // -webkit-transform: translate3d(-150%,-50%,0);
    
        }

        .product-phone{
            width: 100%;

            li{
                float: left;                
                width: 33.333333333333336%;
                text-align: center;
                margin-top: .2rem;
                margin-bottom: .3rem;
                overflow: hidden;
                .imgbox{
                    width: 76px;
                    height: 76px;
                    margin: 0 auto;
                    background: #fff;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                .name{
                    margin-top: .28rem;
                    white-space: nowrap;
                    font-size: .23rem;
                    color: rgba(0,0,0,.54);
                }
            }
        }

</style>
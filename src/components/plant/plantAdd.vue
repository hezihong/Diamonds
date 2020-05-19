<template>
    <div>
        <van-nav-bar title="星球"  class="topbar">
            <!-- <div class="">返回</div> -->
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="left" class="backBtn" to="/main" @click="$router.go(-1)"/>
        </van-nav-bar>

        <van-form @submit="onSubmit" >
            <h3 class="title">说点什么：</h3>
            <van-field
                v-model="message"
                rows="2"
                autosize
                name="message"
                label="留言"
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />

            <van-field name="uploader" label="图片上传">
                <template #input>
                    <van-uploader v-model="uploader" :max-count="1" />
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" >
                提交
                </van-button>
            </div>
        </van-form>
        <!-- <img :src="src" alt=""> -->
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
                message:"",
                src:'https://img.yzcdn.cn/vant/leaf.jpg',
                uploader: [
                    // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { url: 'https://cloud-image', isImage: true }
                ]
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                // console.log(file);
                this.src = file.content
            },
            onSubmit(values) {
                if(values.message != '' && values.uploader != ''){
                    this.postlist = {
                        info:values.message,
                        src:values.uploader[0].content,
                        name:this.$store.state.username
                    }
                    console.log(this.postlist);
                    this.$store.commit('plant/plantAdd',this.postlist);
                    this.$router.push('/plant')

                }else{
                    Toast.fail('内容不能为空');
                }

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
    }   
</script>

<style lang="scss" scoped>
    img{
        width: 300px;
        height: 300px;
    }
    .title{
        padding: 10px;
        font-size: 20px;
        font-weight: normal;
        margin:0px;
        // text-align: center;
    }
</style>
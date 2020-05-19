export default {
    namespaced: true, //命名空间
    state:{
        plantLeft:[
            {
                src:'/img/plant4.jpg',
                info:'手机新品发布会',
                name:' 小米手机'
            },
            {
                src:'/img/plant3.png',
                info:'5G，已经就位',
                name:'Super MI'
            },
            {
                src:'/img/plant5.png',
                info:'零接触收快递，小助手来帮你',
                name:'aasdw'
            }
        ],
        plantRight:[
            {
                src:'/img/plant1.png',
                info:'腾讯黑鲨3 首款5G游戏手机来啦！',
                name:'黑鲨游戏手机'
            },
            {
                src:'/img/plant2.png',
                info:'直播回顾：小米CC9发布会 ',
                name:'Super MI'
            },
            {
                src:'/img/plant6.jpg',
                info:'只要9.9，米家又一款不可错过的随身好物 ',
                name:'王石非'
            }
        ],

        likeNum:2,
        readNum:1339,
        commentList:[
            {
                name:'name111',
                likeNums:4,
                content:'期待已久的小米5G时代 ，现在可终于盼到了asdawh',
                time:'2020-3-20 10:25:46'

            }
        ]

        
    },
    mutations:{
        plantAdd(state,obj){
            if(state.plantLeft.length == state.plantRight.length){
                state.plantLeft.unshift(obj);
            }else{
                state.plantRight.unshift(obj);

            }
        }
    },
    acttions:{},
    getters:{},
    modules:{}
}
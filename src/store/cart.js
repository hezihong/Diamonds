// import { Toast } from 'vant';

export default {
    namespaced: true, //命名空间
    state:{
        //收藏夹数据
        collectList:[
            
        ],
        //购物车列表
        lists:[
            // {
            //     isSelect:true,
            //     name:"荣耀pro 2",
            //     price:1999,
            //     num:1,
            //     src:"/img/shop1.png",
            //     info:" 幻夜星河,全网通 8GB+128GB,官方标配 "
            // },
            
        ], //购物车数据

        num:0,//商品数量
    },
    mutations:{
        //商品页添加数据
        add(state,obj){
            // 1.判断如果加入数据在，购物车中存在。数量加一
            // 获取不到相同id返回-1
            let index = state.lists.findIndex(val=>val.id == obj.id);
            if(index != "-1"){
                // 存在数据，数量加一
                state.lists[index].num += 1;
                state.num = state.lists[index].num; //修改数量
            }else{  
                // 不存在数据，数据添加购物车
                obj.isSelect = true; //默认选项
                state.lists.push(obj);
                state.num = 1; //修改数量
            }
        },
        del(state,index){
            state.lists.splice(index,1);
        },
        //加法运算
        addition(state,index){
            state.lists[index].num += 1;
        },
        //减法运算
        subtraction(state,index){
            
            state.lists[index].num = state.lists[index].num <=1? 1 : state.lists[index].num -1;
        },
        //修改选项
        changeIsSelect(state,index){
            state.lists[index].isSelect = !state.lists[index].isSelect;
        },
        //添加收藏
        collectAdd(state,obj){
            let index = state.collectList.findIndex(val=>val.id == obj.id);
            if(index != "-1"){
                // 存在数据，数量加一
                // state.collectList[index].num += 1;
                // state.num = state.lists[index].num; //修改数量
                // console.log('该商品已存在')
            }else{  
                // 不存在数据，数据添加购物车
                obj.isSelect = true; //默认选项
                state.collectList.push(obj);
                state.num = 1; //修改数量
                // console.log('已收藏')
                // console.log(index)
            }
        },
        //删除收藏
        collectDel(state,index){
            state.collectList.splice(index,1);
        }

    },
    acttions:{},
    getters:{},
    modules:{}
}
<template>
    <div>
        <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />

        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @change-area='onChangeCity'
        />
        <!-- <button @click="getLocation">dianji</button> -->

        <baidu-map
            class="map"
            @ready="handler"
            :center="city"
            :zoom="15"
            :map-click="false"
        >
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        </baidu-map>
        
    </div>
</template>

<script >
import areaList from "./erea.js";
// import BMap from 'bmap';
export default {
    data() {
        return {
            areaList,
            searchResult: [],
            center: { lng: 0, lat: 0 },
            zoom: 3,
            location: null,
            city:'广州市番禺区'
        };
    },
    methods: {
        onSave({ name, tel, province, city, county, addressDetail, areaCode }) {
            this.$store.commit("address/add", {
                name,
                tel,
                province,
                city,
                county,
                addressDetail,
                address: province + city + county + addressDetail,
                areaCode
            });
            this.$router.go(-1); //回到上一级列表页
        },
        onChangeCity(value){
            // console.log(value)
            this.city = value[0].name+value[1].name
        },
        handler({ BMap}) {
            // console.log(BMap);
            // this.center.lng = 116.404;
            // this.center.lat = 39.915;
            this.zoom = 15;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(
                r => {
                    // console.log(r.address);
                    this.city = r.address.city;
                },
                { enableHighAccuracy: true }
            );
        },
        
        
    },

    created() {
        this.$store.state.vanTabbar = false;
    },
    mounted() {
        // this.Tmap();
    },
    // 生命周期钩子，最后销毁函数
    destroyed() {
        // 当组件被销毁时候，修改导航数据
        this.$store.state.vanTabbar = true;
    }
};
</script>

<style lang="scss" scoped>
.map {
    height: 300px;
}
</style>
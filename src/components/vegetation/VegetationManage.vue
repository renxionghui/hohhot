<template>
    <div class="main-content vegetation-manage-wrap">
        <el-menu default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item class="menu-item-wrap" v-for="item in menuItems" :index="`${item.pid}`">{{ item.vegetationName
            }}</el-menu-item>
        </el-menu>
        <div class="router-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import { readonly } from 'vue'
import { usePid } from '../../common/use-pid'
import {useRoute, useRouter } from 'vue-router';
import listData from '../../common/list-data'

const menuItems = readonly(listData)

const pid = usePid();

const router = useRouter()
const route = useRoute();
const handleSelect = (e) => {
    pid.value = e
    if(route.name!="query"){
        router.replace({name:"query"})
    }
}

</script>

<style scoped>
.vegetation-manage-wrap {
    box-sizing: border-box;
    padding: 24px;
}

.menu-item-wrap.is-active {
    background-color: var(--theme-color) !important;
    color: #fff !important;
    font-weight: bolder;
}

.router-wrap {
    width: 100%;
    height: calc(100% - 60px);
    box-sizing: border-box;
    padding-top: 24px;
    overflow-x: hidden;
    overflow-y: auto;
}

</style>
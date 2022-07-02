<template>
    <div class="vegetation-query-wrap">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input v-model="parkName" class="w-50 m-2" clearable placeholder="输入绿地名称" :prefix-icon="Search" />
            </el-col>
            <el-col :span="20">
                <el-button type="primary" @click="handleSearch">搜索</el-button>
                <el-button type="primary" @click="handleAdd">新增</el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData" styel="width:100%" table-layout="auto" empty-text="暂无数据">
            <el-table-column prop="vegetationName" label="绿地名称" width="200" />
            <el-table-column prop="vegetationLevel" label="绿地等级" width="100" align="center" />
            <el-table-column prop="totalArea" label="总面积(公顷)" width="120" />
            <el-table-column prop="conservationArea" label="植物养护面积" width="120" />
            <el-table-column prop="normalBuildingArea" label="一般建筑面积" width="120" />
            <el-table-column prop="classicalBuildingArea" label="古典建筑面积" width="120" />
            <el-table-column prop="gardenRoadArea" label="园路面积" width="100" />
            <el-table-column prop="squareArea" label="广场面积" width="100" />
            <el-table-column prop="waterArea" label="水面面积" width="100" />
            <el-table-column prop="otherArea" label="其他面积" width="100" />
            <el-table-column prop="toiletDistribution" label="厕所" width="100" />
            <el-table-column prop="remark" label="备注" show-overflow-tooltip />
            <el-table-column label="操作" width="80" align="center" #default="scope">
                <el-button type="primary" link @click="handleEdit(scope.row)">编辑</el-button>
            </el-table-column>>
        </el-table>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'
import { usePid } from '../../common/use-pid'
import { useDatabase } from '../../common/use-database'
import { useRouter } from 'vue-router'

const pid = usePid();
watch(pid, async (value) => {
    tableData.value = await db.queryVegetationListByPid(value)
})

let db

const parkName = ref('')
watch(parkName, async (value) => {
    if (!value) {
        tableData.value = await db.queryVegetationListByPid(pid.value);
    }
})

const tableData = ref([])

onMounted(async () => {
    db = await useDatabase();
    tableData.value = await db.queryVegetationListByPid(pid.value);
})

const router = useRouter();

const handleEdit = (data) => {
    router.push({ name: 'edit', query: { cid: data.cid } })
}

const handleSearch = async () => {
    tableData.value = await db.filterVegetationByName(pid.value, parkName.value)
}

const handleAdd = () => {
    router.push({ name: 'add' })
}

</script>

<style scoped>
.vegetation-query-wrap {
    box-sizing: border-box;
    width: 100%;
}
</style>
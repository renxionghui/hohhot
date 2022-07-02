<template>
    <div class="main-content" id="echarts" ref="echartsDom"></div>
</template>
<script setup>

import { onMounted, ref, computed } from "vue"
import { useEcharts } from '../../common/use-echarts'

const echartsDom = ref(null)
onMounted(() => {
    const echart = useEcharts(echartsDom.value)
})

</script>

<style scoped>
</style>
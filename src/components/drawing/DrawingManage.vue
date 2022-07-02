<template>
    <div class="main-content" id="map"></div>
    <div class="draw-info" v-show="drawNumber">
        <p class="draw-info-title">{{ drawType }}</p>
        <p class="draw-info-number">{{ drawNumber }}</p>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue"
import { useMap } from "../../common/use-map"
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { MapboxExportControl } from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';
import * as turf from '@turf/turf'

let map = null

let drawNumber = ref('')

let drawType = ref('')

const initExportControl = () => {
    map.addControl(new MapboxExportControl({ accessToken: 'pk.eyJ1IjoicmVueGlvbmdodWkiLCJhIjoiY2w0Yms4c2c5MW4yeDNlbnN0eGszZTExZSJ9.UNq7x8E0CxG3Qc9CN77EGQ' }), 'top-right');
    const labels = document.querySelectorAll(".print-table label")
    labels[0].innerHTML = '尺寸： '
    labels[1].innerHTML = '方向： '
    labels[2].innerHTML = '格式： '
    labels[3].innerHTML = '精度： '
    const generateButton = document.querySelector('.generate-button');
    generateButton.innerHTML = "导出"
    generateButton.classList.add('el-button')
    generateButton.style.marginTop = "8px"
}

const initDrawControl = () => {
    const drawTool = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            point: true,
            line_string: true,
            polygon: true,
            trash: true
        }
    });
    map.addControl(drawTool)

    const drawUpdate = (e) => {
        const geometryType = e.features[0].geometry.type
        if (geometryType == 'Polygon') {
            drawNumber.value = `面积：${turf.area(drawTool.getSelected()).toFixed(2)}平方米`
            drawType.value = '绘制面'
        } else if (geometryType == 'LineString') {
            drawNumber.value = `长度：${turf.length(drawTool.getSelected()).toFixed(2)}千米`
            drawType.value = '绘制线'
        } else {
            drawNumber.value = `坐标：${e.features[0].geometry.coordinates}`
            drawType.value = '绘制点'
        }
    }

    map.on('draw.create', drawUpdate)
    map.on('draw.update', drawUpdate)
    map.on('draw.selectionchange', drawUpdate)
}

onMounted(() => {
    map = useMap()

    initDrawControl()

    initExportControl()
})
</script>

<style>
.mapboxgl-export-list {
    padding: 12px !important;
}

.draw-info {
    position: fixed;
    bottom: 48px;
    left: 184px;
    background-color: #409eff;
    z-index: 999;
    padding: 12px;
    border-radius: 12px;
    color: #fff;
}

.draw-info-title {
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 12px;
}
</style>
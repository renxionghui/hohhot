<template>
    <div class="main-content" id="map"></div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue"
import { useMap } from "../../common/use-map"
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { MapboxExportControl} from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';

let map = null

onMounted(() => {
    map = useMap()
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
    map.addControl(new MapboxExportControl({accessToken: 'pk.eyJ1IjoicmVueGlvbmdodWkiLCJhIjoiY2w0Yms4c2c5MW4yeDNlbnN0eGszZTExZSJ9.UNq7x8E0CxG3Qc9CN77EGQ'}), 'top-right');

    const labels = document.querySelectorAll(".print-table label")
    labels[0].innerHTML = '尺寸： '
    labels[1].innerHTML = '方向： '
    labels[2].innerHTML = '格式： '
    labels[3].innerHTML = '精度： '
    const generateButton = document.querySelector('.generate-button');
    generateButton.innerHTML = "导出"
    generateButton.classList.add('el-button')
    generateButton.style.marginTop = "8px"
})
</script>

<style>
.mapboxgl-export-list{
    padding: 12px !important;
}
</style>
<template>
    <div class="main-content" id="map"></div>
</template>
<script setup>
import { onMounted,onBeforeUnmount} from "vue"
import { useMap } from "../../common/use-map"
import Mapbox from "mapbox-gl";
import { MapboxExportControl } from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';
import { ElNotification } from 'element-plus'

let map = null;

onMounted(() => {
    map = useMap('map', 'mapbox://styles/renxionghui/cl4kfj3z3000t15qosk9txce5')
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

    map.on('click', (e) => {
        const marker = {
            "type": "Feature",
            "properties": {
                "iconSize": [32, 32]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [e.lngLat.lng, e.lngLat.lat]
            }
        }
        points.features.push(marker)
        addPoint(marker)
    })

    ElNotification({
        title: '操作提示',
        message: '单击鼠标左键添加，右键移除',
        duration: 0,
        position: 'bottom-right',
    })
})

onBeforeUnmount(()=>{
    ElNotification.closeAll()
})

const points = {
    "type": "FeatureCollection",
    "features": []
};

const addPoint = (marker) => {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(/image/tree.png)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('contextmenu', (e) => {
        addMarker.remove()
    })
    const addMarker = new Mapbox.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
}

</script>

<style scoped>
</style>
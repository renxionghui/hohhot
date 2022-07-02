<template>
    <div class="main-content" id="map"></div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { useMap } from "../../common/use-map"
import Mapbox from "mapbox-gl";
import { ElNotification } from 'element-plus'

let map = null;

onMounted(() => {
    map = useMap('map', 'mapbox://styles/renxionghui/cl4kfj3z3000t15qosk9txce5')
    map.on('load', () => {
        for (const marker of points.features) {
            addPoint(marker)
        }
    })

    map.on('click', (e) => {
        const marker = {
            "type": "Feature",
            "properties": {
                "iconSize": [64, 64]
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

onBeforeUnmount(() => {
    ElNotification.closeAll()
    localStorage.setItem('points', JSON.stringify(points))
})

const points = JSON.parse(localStorage.getItem('points')) || {
    "type": "FeatureCollection",
    "features": []
}

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
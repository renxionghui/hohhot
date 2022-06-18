<template>
    <div class="main-content" id="map"></div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue"
import { useMap } from "../../common/use-map"
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

let map = null;

onMounted(() => {
    map = useMap('map', 'mapbox://styles/renxionghui/cl4k5j4w5000d14rwf3ajf1yb')
})

</script>

<style scoped>
</style>
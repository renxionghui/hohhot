<template>
    <div class="main-content" id="map"></div>
</template>
<script setup>
import { onMounted } from "vue"
import { useMap } from "../../common/use-map"
import * as turf from '@turf/turf'
import { usePopup } from '../../common/use-popup'

let map = null;

let isPopupShow = false;

const popup = usePopup({
    closeButton: false,
    closeOnClick: false
})

onMounted(() => {
    map = useMap('map', 'mapbox://styles/renxionghui/cl4k5j4w5000d14rwf3ajf1yb')

    map.on('load', () => {
        map.addSource('park', {
            'type': 'geojson',
            'data': 'data/park.geojson'
        })

        map.addLayer({
            'id': 'park-layer',
            'type': 'fill',
            'source': 'park',
            'paint': {
                'fill-color': 'rgba(3, 255, 28, 0.8)',
                'fill-outline-color': '#03ff1c'
            }
        })

        map.on('mousemove', (e) => { 
            const features = map.queryRenderedFeatures(e.point, { layers: ['park-layer'] });
            if (features.length) {
                map.getCanvas().style.cursor = features.length ? 'pointer' : '';
                const area = turf.area(features[0]).toFixed(2)
                const center = turf.center(features[0])
                if(!isPopupShow){
                    isPopupShow = true
                    popup.setLngLat(center.geometry.coordinates).setHTML(`${area}平方米`).addTo(map)
                }
            } else {
                isPopupShow = false
                popup.remove()
            }

        })
    })
})

</script>

<style scoped>
</style>
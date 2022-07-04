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


let layerId = 'circle-layer'
let sourceId = 'circle-source'
let isSourceAdd = false;

const drawCircle = (circle) => {
    if (!isSourceAdd) {
        map.addSource(sourceId, {
            type: 'geojson',
            data: circle
        })
        map.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            paint: {
                'fill-color': '#FF975E',
                'fill-opacity': 0.5,
                'fill-outline-color': '#FF975E'
            }
        })

        isSourceAdd = true
    } else {
        map.getSource(sourceId).setData(circle)
        map.setLayoutProperty(layerId, 'visibility', 'visible');
    }
    
}

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

                if (!isPopupShow) {
                    isPopupShow = true

                    let radiu = 0;
                    const exploade = turf.explode(features[0])
                    for (const point of exploade.features) {
                        const distance = turf.distance(center, point)
                        radiu = Math.max(distance, radiu)
                    }
                    const circle = turf.circle(center, radiu * 3 / 2, {
                        steps: 64
                    })

                    const circleArea = turf.area(circle).toFixed(2)
                    drawCircle(circle)

                    popup.setLngLat(center.geometry.coordinates).setHTML(`绿地：${area}平方米<br/>辐射：${circleArea}平方米`).addTo(map)
                }
            } else {
                isPopupShow = false
                popup.remove()
                if (isSourceAdd) {
                    map.setLayoutProperty(layerId, 'visibility', 'none');
                }
            }
        })
    })
})

</script>

<style scoped>
</style>
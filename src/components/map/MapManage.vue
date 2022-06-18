<template>
  <div class="main-content" id="map">
  </div>
  <div class="toggle-style">
    <el-tooltip content="普通地图" placement="bottom" effect="light">
      <div class="map-style-normal map-style-wrap" @click="handleClick('normal')"
        :class="isSelectedNormal ? 'is-selected' : ''">
      </div>
    </el-tooltip>
    <el-tooltip content="卫星地图" placement="bottom" effect="light">
      <div class="map-style-satellite map-style-wrap" @click="handleClick('satellite')"
        :class="isSelectedNormal ? '' : 'is-selected'"></div>
    </el-tooltip>
  </div>

</template>
<script setup>
import { onMounted, ref, computed } from "vue"
import { useMap } from "../../common/use-map"
import MapboxLanguage from "@mapbox/mapbox-gl-language";

let map = null

onMounted(() => {
  map = useMap();
})

const styleName = ref("mapbox://styles/mapbox/streets-v11")

const isSelectedNormal = computed(() => styleName.value == 'mapbox://styles/mapbox/streets-v11')

const handleClick = (clickName) => {
  if (clickName == 'normal') {
    styleName.value = 'mapbox://styles/mapbox/streets-v11'
    map.addControl(new MapboxLanguage({ defaultLanguage: "zh-Hans" }));
  } else {
    styleName.value = 'mapbox://styles/mapbox/satellite-v9'
  }

  map.setStyle(styleName.value)
}

</script>

<style scoped>
.toggle-style {
  position: fixed;
  right: 24px;
  top: 84px;
  height: 64px;
  border: 4px solid var(--theme-color);
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  display: flex;
}

.map-style-wrap {
  width: 64px;
  height: 64px;
  background-size: 100% 100%;
  box-sizing: border-box;
}

.map-style-wrap+.map-style-wrap {
  margin-left: 8px;
}

.map-style-wrap:hover {
  box-shadow: 0px 0px 10px #999;
}

.map-style-normal {
  background-image: url("../../assets/image/map-style-normal.png");
}

.map-style-satellite {
  background-image: url("../../assets/image/map-style-satellite.png");
}

.is-selected{
  border: 1px solid var(--theme-color);
}
</style>
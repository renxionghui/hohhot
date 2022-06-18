import * as echarts from 'echarts';
import hohhot from './geojson/hohhot'

const useEcharts = (dom) => {
    const echart = echarts.init(dom)
    echarts.registerMap('hohhot', {
        geoJSON: hohhot
    })

    const options = {
        backgroundColor: '#404a59',
        title: {
            left: 10,
            right: 10,
            text: '呼和浩特地图',
            textStyle: {
                color: '#fff',
            },
        },
        visualMap: {
            type: 'piecewise',
            left: 40,
            bottom: 40,
            textStyle: {
                color: '#fff'
            },
            pieces: [
                { label: '绿化面积：9682.5公顷', value: '3', color: '#67C23A' },
                { label: '覆盖比率：40.02%', value: '2', color: '#67a23A' },
                { label: '人均面积：16.91平方米', value: '1', color: '#62923A' }
            ]
        },
        tooltip: {
            trigger: 'item'
        },
        geo: {
            map: 'hohhot',
            zoom: 1.2,
            scaleLimit: {
                min: 0.5,
                max: 3,
            },
            roam: true,
            itemStyle: {
                areaColor: '#62923A',
                borderColor: '#94F003',
            },
            label: {
                show: true,
                color:'#0E539A'
            },
            tooltip: {
                formatter: function (params) {
                    const name = params.name;
                    console.log(name);
                    let label = ''
                    if (name == '武川县') {
                        label = "武川县</br>绿化面积:469.3公顷</br>绿化覆盖:41.7%</br>人均面积:18.9平方米"
                    } else if (name == '土默特左旗') {
                        label = "土默特左旗</br>绿化面积:824.3公顷</br>绿化覆盖:38.7%</br>人均面积:15.1平方米"
                    } else if (name == '新城区') {
                        label = "新城区</br>绿化面积:689.2公顷</br>绿化覆盖:39.6%</br>人均面积:17.4平方米"
                    }else if (name == '回民区') {
                        label = "回民区</br>绿化面积:357.7公顷</br>绿化覆盖:41.2%</br>人均面积:18.9平方米"
                    }else if (name == '赛罕区') {
                        label = "赛罕区</br>绿化面积:641.2公顷</br>绿化覆盖:40.3%</br>人均面积:16.7平方米"
                    }else if (name == '玉泉区') {
                        label = "玉泉区</br>绿化面积:397.3公顷</br>绿化覆盖:38.1%</br>人均面积:15.1平方米"
                    }else if (name == '和林格尔县') {
                        label = "和林格尔县</br>绿化面积:583.7公顷</br>绿化覆盖:42.9%</br>人均面积:17.5平方米"
                    } else if (name == '托克托县') {
                        label = "托克托县</br>绿化面积:493.2公顷</br>绿化覆盖:39.4%</br>人均面积:16.3平方米"
                    } else if (name == '清水河县') {
                        label = "清水河县</br>绿化面积:767.3公顷</br>绿化覆盖:43.1%</br>人均面积:19.2平方米"
                    }
                    return label
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: '#93F003',
                }
            }
        }
    }
    echart.setOption(options)
    return echart
}

export { useEcharts }

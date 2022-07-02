import * as echarts from 'echarts';
import hohhot from './geojson/hohhot'

const textBg = 'image://image/icon-bg.png';

const centerIcon = 'image://image/icon-location.png'

const mapDate = [
    {
        name: '新城区',
        value: [111.844304556545438, 40.968046836038937],
        datas: '689.2公顷',
        img: centerIcon,
    },
    {
        name: '回民区',
        value: [111.559123883929558, 40.868777362630574],
        datas: "357.7公顷",
        img: centerIcon,
    },
    {
        name: '玉泉区',
        value: [111.646160605137837, 40.717642172144046],
        datas: "397.3公顷",
        img: centerIcon,
    },
    {
        name: '赛罕区',
        value: [111.943380977148664, 40.785521284812823],
        datas: "641.2公顷",
        img: centerIcon,
    },
    {
        name: '土默特左旗',
        value: [111.229846390054064, 40.683968594544972],
        datas: "824.3公顷",
        img: centerIcon,
    },
    {
        name: '托克托县',
        value: [111.310974636461864, 40.355366618573818],
        datas: '493.2公顷',
        img: centerIcon,
    },
    {
        name: '和林格尔县',
        value: [111.895114673502903, 40.327001660364637],
        datas: '583.7公顷',
        img: centerIcon,
    },
    {
        name: '清水河县',
        value: [111.700181806546382, 39.88246835109652],
        datas: '767.3公顷',
        img: centerIcon,
    },
    {
        name: '武川县',
        value: [111.173994938537462, 41.109272663782356],
        datas: '469.3公顷',
        img: centerIcon,
    },
];



const useEcharts = (dom) => {
    const echart = echarts.init(dom)
    echarts.registerMap('hohhot', {
        geoJSON: hohhot
    })

    const option = {
        backgroundColor: '#161D3E',
        title: {
            top: 48,
            left: 48,
            text: '呼和浩特市量化评估',
            textStyle: {
                color: '#0281F0',
                fontWeight: 700,
                fontSize: 24,
                textShadowColor: '#0085EC',
                textShadowBlur: 5,
                textShadowOffsetX:2,
                textShadowOffsetY:2
            },
        },
        geo: {
            map: 'hohhot',
            aspectScale: 0.75,
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            silent: true,
            roam: false,
            z: 0,
            itemStyle: {
                areaColor: '#0085EC',
                borderWidth: 3,
                borderColor: '#0085EC',
                shadowColor: '#0085EC',
                shadowBlur: 10
            }
        },
        series: [
            {
                type: 'map',
                map: 'hohhot',
                roam: false,
                zoom: 1.25,
                label: {
                    show: false
                },
                itemStyle: {
                    borderColor: '#0281F0',
                    borderWidth: 1,
                    areaColor: '#01103D',
                    shadowColor: 'rgba(255, 255, 255, .5)',
                    shadowBlur: 1
                },
                emphasis: {
                    itemStyle: {
                        areaColor: 'rgba(0, 0, 0, 0.2)',
                    },
                    label: {
                        show: false,
                    },
                }
            },
            {
                tooltip: {
                    show: false,
                },
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    scale: 10,
                    brushType: 'stroke',
                },
                showEffectOn: 'render',
                itemStyle: {
                    shadowColor: '#0ff',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    color: () => new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#64fbc5',
                        },
                        {
                            offset: 1,
                            color: '#018ace',
                        }
                    ])
                },
                label: {
                    color: '#fff',
                },
                symbol: 'circle',
                symbolSize: [10, 5],
                data: mapDate,
                zlevel: 1,
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                itemStyle: {
                    color: '#f00',
                },
                symbol: function (value, params) {
                    return params.data.img;
                },
                symbolSize: [32, 41],
                symbolOffset: [0, -20],
                z: 9999,
                data: mapDate,
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                label: {
                    show: true,
                    formatter: function (params) {
                        const name = params.name;
                        const value = params.data.datas;
                        const text = `{fline|${value}}\n{tline|${name}}`;
                        return text;
                    },
                    color: '#fff',
                    rich: {
                        fline: {
                            padding: [0, 24, 2, 24],
                            color: '#fff',
                            textShadowColor: '#030615',
                            textShadowBlur: '0',
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                            fontSize: 13,
                            fontWeight: 500,
                            align: 'center'
                        },
                        tline: {
                            padding: [2, 24, 0, 24],
                            color: '#ABF8FF',
                            fontSize: 12,
                            align: 'center'
                        },
                    }
                },
                itemStyle: {
                    color: '#00FFF6',
                },
                symbol: textBg,
                symbolSize: [100, 50],
                symbolOffset: [0, -60],
                z: 999,
                data: mapDate,
            },
        ],
    }

    echart.setOption(option)
    return echart
}

export { useEcharts }





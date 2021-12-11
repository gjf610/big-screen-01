import React, { useEffect } from "react";
import * as echarts from 'echarts';
import ReactECharts from "echarts-for-react";
import { createEchartsOptions } from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart6 = () => {
    const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' };
    // @ts-ignore
    echarts.registerMap('CN', china);
    const options = createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
            {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    { name: '甘肃省', value: 1 },
                ],
                label: { show: false, color: 'white' },
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['甘肃省'],
                    borderColor: '#01A7F7',
                    emphasis: {
                        label: { color: 'white' },
                        areaColor: '#5470C6',
                    },
                }
            },
            {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    { name: '四川省', value: 100 },
                ],
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['四川省'],
                    borderColor: 'yellow',
                    emphasis: {
                        label: { color: 'white' },
                        areaColor: '#5470C6',
                    },
                }
            },
            {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    { name: '青海省', value: 100 },
                ],
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['青海省'],
                    borderColor: '#01A7F7',
                    emphasis: {
                        label: { color: 'white' },
                        areaColor: '#5470C6',
                    },
                }
            },

        ]
    })
    useEffect(() => {

    }, []);
    return (
        <div className="bordered 籍贯分布">
            <h2>全市犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <ReactECharts option={options} className="chart" />
                <div className="legend bordered">
                    <span className="icon" style={{ background: colors['甘肃省'] }} />山丹籍
                    <span className="icon" style={{ background: colors['四川省'] }} />边城籍
                    <span className="icon" style={{ background: colors['青海省'] }} />措温布籍
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    )
}
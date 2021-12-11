import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';
type dataOption = {
    value: number;
    name: string;
}[]
export const Chart12: React.FC = () => {
    const data: dataOption = [
        { value: 0.08, name: '东岗路' },
        { value: 0.06, name: '段家滩' },
        { value: 0.11, name: '雁北' },
        { value: 0.09, name: '五泉山' },
        { value: 0.12, name: '中山路' },
        { value: 0.06, name: '庆阳路' },
        { value: 0.08, name: '武都路' },
        { value: 0.08, name: '酒泉路' },
        { value: 0.08, name: '天水路' },
    ];
    const options = createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        legend: {
            orient: 'vertical',
            top: 'center',
            left: 'left',
            textStyle: { color: 'white' },
            itemWidth: px(10),
            itemHeight: px(10),
            formatter(name: string) {
                const value = data.find(i => i.name === name)?.value * 100 + '%';
                return name + ' ' + value;
            }
        },
        series: [
            {
                center: ['60%', '50%'],
                type: 'pie',
                radius: '80%',
                label: { show: false },
                labelLine: { show: false },
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
    useEffect(() => {

    }, [])
    return (
        <div className="chart12">
            <div className="chart">
                <ReactECharts option={options} className="main" style={{ height: 'inherit' }} />
            </div>
        </div>

    )
}
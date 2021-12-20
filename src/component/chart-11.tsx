import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart11: React.FC = () => {
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const options = createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
            {
                startAngle: -20,
                type: 'pie',
                radius: ['25%', "90%"],
                avoidLabelOverlap: false,
                roseType: 'area',
                itemStyle: {
                    shadowBlur: px(200),
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                label: {
                    show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(20) },
                    distanceToLabelLine: 0,
                    formatter(item: { value: number; }) {
                        return item.value * 100 + '%';
                    }
                },
                labelLine: { show: true, length: 0 },
                data: [
                    { value: 0.36, name: '刑事案件' },
                    { value: 0.20, name: '民事案件' },
                    { value: 0.18, name: '经济案件' },
                    { value: 0.24, name: '其他案件' },
                ]
            }
        ]
    })
    useEffect(() => {

    }, [])
    return (
        <div className="chart11">
            <div className="chart">
                <ReactECharts className="main" option={options} style={{ height: 'inherit' }} />
            </div>
            <div className="legend">
                <span style={{ background: colors[0] }} />刑事
                <span style={{ background: colors[1] }} />民事
                <span style={{ background: colors[2] }} />经济
                <span style={{ background: colors[3] }} />其他
            </div>
        </div>
    )
}
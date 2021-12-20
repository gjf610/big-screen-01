import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart7: React.FC = () => {
    const options = createEchartsOptions({
        color: ['#8D70F8', '#33A4FA'],
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['75%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(20) },
                    formatter(item: { value: number; }) {
                        return item.value * 100 + '%';
                    }
                },
                labelLine: { show: false },
                itemStyle: {
                    borderColor: '#0F113A',
                    borderWidth: px(4)
                },
                data: [
                    { value: 0.2, name: '女' },
                    { value: 0.8, name: '男' },
                ]
            }
        ]
    })

    useEffect(() => {

    }, []);
    return (
        <div className="年龄段-图1">
            <div className="chart">
                <ReactECharts option={options} className="main" style={{ height: 'inherit' }} />
                <div className="text">性别</div>
            </div>
            <div className="legend">
                <span className="male" />男
                <span className="female" />女
            </div>
        </div>
    )
}
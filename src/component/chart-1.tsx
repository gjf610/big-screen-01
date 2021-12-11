import React, { useEffect, useState } from "react";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
type dataCount = {
    name: string,
    value: number
}
type DataBar = dataCount[]
import Bar from "./Base";
export const Chart1: React.FC = () => {
    const data: DataBar = [
        { name: '城关区', value: 10 },
        { name: '西固区', value: 36 },
        { name: '安宁区', value: 41 },
        { name: '红古区', value: 15 },
        { name: '永登县', value: 26 },
        { name: '皋兰县', value: 37 },
        { name: '榆中县', value: 18 },
        { name: '七里河区', value: 20 },
        { name: '兰州新区', value: 29 },
    ];

    const getData = (data) => {
        return createEchartsOptions({
            xAxis: {
                data: data.map(i => i.name),
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val: string) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                data: data.map(i => i.value)
            }]
        })
    }

    const [options, setOptions] = useState(getData(data))
    useEffect(() => {

    }, []);
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <Bar options={options} />
        </div>
    )
}

import React, { useEffect, useState } from "react";
import * as echarts from 'echarts'
import { createEchartsOptions } from "../shared/create-echarts-options";
type dataTime = {
    name: string,
    2011: number,
    2012: number
}
type DataDate = dataTime[]
import Bar from "./Base";

export const Chart2: React.FC = () => {
    const data: DataDate = [
        { name: '城关区公安局', 2011: 2, 2012: 7 },
        { name: '七里河区公安局', 2011: 5, 2012: 3 },
        { name: '西固区公安局', 2011: 2, 2012: 3 },
        { name: '安宁区公安局', 2011: 0, 2012: 5 },
        { name: '红古区公安局', 2011: 4, 2012: 3 },
        { name: '永登县公安局', 2011: 2, 2012: 8 },
        { name: '皋兰县公安局', 2011: 5, 2012: 3 },
        { name: '榆中县公安局', 2011: 9, 2012: 7 },
        { name: '新区公安局', 2011: 2, 2012: 6 },
    ];
    const getData = (data: DataDate) => {
        return createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: { show: false },
                axisLabel: { show: false }
            },
            yAxis: {
                axisTick: { show: false },
                type: 'category',
                data: data.map(i => i.name),
                axisLabel: {
                    formatter(val: string) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: data.map(i => i[2011]),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: data.map(i => i[2012]),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        })
    }
    const [options, setOptions] = useState(getData(data))


    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '城关区公安局', 2011: 2, 2012: Math.random() * 10 },
                { name: '七里河区公安局', 2011: 5, 2012: 3 },
                { name: '西固区公安局', 2011: 2, 2012: 3 },
                { name: '安宁区公安局', 2011: 0, 2012: 5 },
                { name: '红古区公安局', 2011: 4, 2012: 3 },
                { name: '永登县公安局', 2011: 2, 2012: 8 },
                { name: '皋兰县公安局', 2011: 5, 2012: 3 },
                { name: '榆中县公安局', 2011: 9, 2012: 7 },
                { name: '新区公安局', 2011: 2, 2012: 3 },
            ];
            setOptions(getData(newData))
            console.log('newData')
        }, 5000);

    }, [])
    return (
        <div className="bordered 破获排名">
            <h2>案发破获排名</h2>
            <Bar options={options} />
            <div className="legend">
                <span className="first" /> 破案排名1
                <span className="second" /> 破案排名2
            </div>
        </div>
    )
}
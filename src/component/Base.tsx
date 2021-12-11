import React from "react";
import ReactECharts from "echarts-for-react";

type EChartsOption = echarts.EChartsOption;

const Bar: React.FC<EChartsOption> = (props) => {
    return (
        <ReactECharts option={props.options} className="chart" />
    )
}

export default Bar
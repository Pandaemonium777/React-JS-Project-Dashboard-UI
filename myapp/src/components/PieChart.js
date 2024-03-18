import React from "react";
import { Chart } from "react-google-charts";


export const data = [
    ["product", "Market percentage"],
    ["Basic Tees", 55],
    ["Custom Short Pants", 31],
    ["Super Hoodies", 14]
];

export const options = {
title: "Top Products",
};

const PieChart = () => {
return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"20vw"}
    height={"200px"}
    />
);
}

export default PieChart
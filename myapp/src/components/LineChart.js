import { Chart } from "react-google-charts";
export const data = [
    ["User", "Guest", "Expenses"],
    ["Week1", 1000, 400],
    ["Week2", 1170, 460],
    ["Week3", 660, 1120],
    ["Week4", 1030, 540],
  ];
export const options = {
  title: "Activities",
};

const LineChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width={"60vw"}
      height={"200px"}
    />
  )
}
export default LineChart
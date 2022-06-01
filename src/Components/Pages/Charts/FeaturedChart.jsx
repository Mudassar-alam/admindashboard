import React, { useState } from "react";
import './chart.scss';
import Chart from "react-apexcharts";

function FeaturedChart(props){

    const [state,setState] = useState(
        {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ['Aug','Sempt','Oct', 'Nov','Dec','Jan','Feb', 'Mar', 'Apr']
              }
            },
            series: [
              {
                name: "Orders",
                data: [30, 20, 45, 30, 75, 26, 65, 80]
              },
              {
                name: "Sales",
                data: [35, 20, 40, 60, 60, 30, 70, 90]
              }
            ]
          }
    )

    return(
        <>
            <div className="Featdchart">
            <div className="title"><h3>{props.name}</h3></div>
            <div className="apexchart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="600"
              height={props.height}
            />
            </div>
            </div>
        </>
    )
}
export default FeaturedChart;
import React from 'react' ;
import { BarChart } from "react-chartkick";
import "chart.js";

const Chart1 = () => {
	return (
		<div>
			<BarChart
	          data={[
	            ["Alienware", 44],
	            ["XPS", 23],
	            ["Voltro", 16],
	            ["Umm..wut", 17],
	          ]}
	          style={{ width: "20%", margin: "10% 0" }}
        />
		</div>
		);
}

export default Chart1;
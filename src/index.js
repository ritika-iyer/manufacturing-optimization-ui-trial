import React from "react";
import ReactDOM from "react-dom";
import Ap from "./Ap";
/*import Faker from 'faker';
import CommentDetail from './CommentDetail';*/

import ApprovalCard from "./ApprovalCard";
import { LineChart, PieChart, ColumnChart, BarChart } from "react-chartkick";
import "chart.js";
import BasicTable from "./Table";

const App = () => {
  return (
    <div>
      {/*<ApprovalCard />*/}
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Bahnschrift Regular" }}>
          Line Allocation for each Product Family
        </h1>
        {/*<PieChart
          data={[
            ["Alienware", 44],
            ["XPS", 23],
            ["Voltro", 16],
            ["Umm..uh..what was it again?", 17],
          ]}
        />*/}
      </div>
      {/*<Ap />*/}

      <div style={{ width: "40%", margin: "5% 10%" }}>
        <div className="row" style={{ backgroundColor: "aliceblue" }}>
          <div className="col l6" style={{ float: "left" }}>
            Given time requirement per step:
            <BasicTable />{" "}
          </div>
          <div
            className="col l6"
            style={{ float: "right", margin: "-51.5%", marginLeft: "75%" }}
          >
            Allocation :
            <BasicTable />{" "}
          </div>
        </div>
        <br />
        <br />

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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

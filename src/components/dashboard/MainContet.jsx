import "../../asset/css/dashboard.css";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Cell,
} from "recharts";

function MainContent(props) {
  const g_data = [
    {
      name: "Aug 1",
      value: 15,
      color: colorDecider(15),
    },
    {
      name: "Aug 2",
      value: 43,
      color: colorDecider(43),
    },
    {
      name: "Aug 3",
      value: 69,
      color: colorDecider(69),
    },
    {
      name: "Aug 4",
      value: 98,
      color: colorDecider(98),
    },
    {
      name: "Aug 5",
      value: 45,
      color: colorDecider(45),
    },
    {
      name: "Aug 6",
      value: 72,
      color: colorDecider(72),
    },
    {
      name: "Aug 7",
      value: 78,
      color: colorDecider(78),
    },
    {
      name: "Aug 8",
      value: 90,
      color: colorDecider(90),
    },
    {
      name: "Aug 9",
      value: 67,
      color: colorDecider(67),
    },
    {
      name: "Aug 10",
      value: 55,
      color: colorDecider(55),
    },
  ];

  function colorDecider(val) {
    if (val <= 20) {
      return "#EE6F57";
    } else if (val > 20 && val <= 60) {
      return "#FFC444";
    } else if (val > 60 && val <= 80) {
      return "#45A6FF";
    } else {
      return "#A2C244";
    }
  }
  return (
    <div className="main-contnet">
      <div className="vr-setting">
        <div className="col-sm-12 pacman col-md-12 col-12 box box-1 d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <div>
              <img
                className="pacman-icon"
                src={require("../../asset/images/packman.png")}
                alt="abc"
              ></img>
            </div>
            <div className="packman-deatis">
              <span>All Users</span>
              <p className="pill-shape"> 246</p>
            </div>
          </div>
        </div>
        <div className=" col-sm-12  col-md-12 col-12 box box-2 d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <div>
              <img
                className="pacman-icon"
                src={require("../../asset/images/packman.png")}
                alt="abc"
              ></img>
            </div>
            <div className="packman-deatis">
              <span>All Users</span>
              <p className="pill-shape"> 246</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12  col-md-12 col-12 box box-3 d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <div>
              <img
                className="pacman-icon"
                src={require("../../asset/images/packman.png")}
                alt="abc"
              ></img>
            </div>
            <div className="packman-deatis">
              <span>All Users</span>
              <p className="pill-shape"> 246</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-graph d-flex justify-content-start">
        {console.log("window.innerHeight", window.innerHeight)}
        <ResponsiveContainer width={"95%"} height={"80%"} aspect={4}>
          <ComposedChart data={g_data}>
            <XAxis
              dataKey="name"
              interval={"preserveStartEnd"}
              padding={{ left: 15 }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis tickCount={6} axisLine={false} tickLine={false} />
            <defs>
              {g_data.map((data, index) => (
                <linearGradient
                  id={`colorUv${index}`}
                  x1="0"
                  y1="100%"
                  x2="0"
                  y2="0"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="white" />
                  <stop offset="1" stopColor={data.color} />
                </linearGradient>
              ))}
            </defs>
            <Tooltip />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            ></CartesianGrid>
            <Bar
              dataKey="value"
              barSize={20}
              fill="#413ea0"
              minPointSize={10}
              radius={10}
            >
              {g_data.map((entry, index) => (
                <Cell fill={`url(#colorUv${index})`} />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MainContent;

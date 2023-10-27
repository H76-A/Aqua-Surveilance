import { Line } from "react-chartjs-2";
import { chart as chartjs } from "chart.js/auto";
import "./LineChart.css";

// Real Time Firebase
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../Firebase/Config"

export default function LineChart() {
  const [flow, setFlow] = useState(null);
  useEffect(() => {
    const waterFlow = ref(database, "Aqua/Flow");
    onValue(waterFlow, (snapshot) => {
      setFlow(snapshot.val());
    });
  }, [flow]);

  //  const nameOfMonth = new Date().toLocaleString(
  //   'default', {month: 'long'}
  // );
  const data = {
    labels: [
      "Jan",
      "feb",
      "March",
      "Aprail",
      "May",
      "Jun",
      "Julay",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "",
        data: [5, 10, 11, 16, 18, 25, 10, 4,23,11,8, flow],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div className="LineChart">
      <span>USAGE </span>
      <Line data={data} />
    </div>
  );
}


import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MDBCardText } from "mdb-react-ui-kit";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart Bar Chart",
    },
  },
};

const labels = ["Term 1", "Term 2", "Term 3", "Term 4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Marks obtained by Student in Terms",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgb(59,113,202)",
    },
  ],
};

export default function Graph() {
  return (
    <div>
      <MDBCardText className="mb-4"></MDBCardText>
      <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
        English
      </MDBCardText>
    </div>
  );
}

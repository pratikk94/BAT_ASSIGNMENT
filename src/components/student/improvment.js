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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(59,113,202)",
    },
  ],
};

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ ChartData }) => {
    return (
        <>
            <Bar
                data={ChartData}
                options={{
                    title: {
                        display: true,
                        text: "Category",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    }
                }}

            />
        </>
    )
}

export default Chart
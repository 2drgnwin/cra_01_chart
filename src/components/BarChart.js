import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const BarChart = ({ chartData }) => {
  return (
    <div className="">
      <h2 className="text-center">Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

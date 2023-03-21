import { useState } from 'react';
import { Data } from './utils/Data';
import { BarChart } from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
// import './styles.css';

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: 'Users Gained ',
        data: Data.map((data) => data.userGain),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  console.log(chartData);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BarChart chartData={chartData} />
          </div>

          <div className="col-6">
            <LineChart chartData={chartData} />
          </div>

          <div className="col-6">
            <PieChart chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

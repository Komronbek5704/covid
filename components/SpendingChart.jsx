import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const spendingData2023 = [200, 300, 400, 500, 600, 700, 800];
const spendingData2024 = [250, 350, 450, 550, 650, 750, 850];

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '2023 Spending',
      data: spendingData2023,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: '2024 Spending',
      data: spendingData2024,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const SpendingChart = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold text-center mb-4">Monthly Spending Comparison</h2>
    <Line data={data} options={options} />
  </div>
);

export default SpendingChart;
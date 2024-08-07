import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'chart.js/auto';

const CovidChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Cases',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Total Deaths',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  });

  useEffect(() => {
    const fetchCovidData = async () => {
      try {
        const response = await axios.get('https://covid-19-data.p.rapidapi.com/countries', {
          headers: {
            'X-RapidAPI-Key': 'c640355033msh5e65a61c3d1f510p1b5d4ajsnac7769a5d3ea',
            'X-RapidAPI-Host': 'covid-19-data.p.rapidapi.com',
          },
        });

        const countries = response.data;
        const labels = countries.map(country => country.name);
        const totalCases = countries.map(country => country.cases);
        const totalDeaths = countries.map(country => country.deaths);

        setData({
          labels,
          datasets: [
            {
              label: 'Total Cases',
              data: totalCases,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
              label: 'Total Deaths',
              data: totalDeaths,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching COVID-19 data', error);
      }
    };

    fetchCovidData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Countries',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">COVID-19 Statistics</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default CovidChart;
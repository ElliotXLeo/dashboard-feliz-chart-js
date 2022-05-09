import { getColorsData, handleDashboardFeatures } from "../utils/utils.js";

export const features = (dataApi, characteristic) => {
  Chart.defaults.borderColor = '#444';
  const dashboardFeaturesChart = document.getElementById('dashboardFeaturesChart');
  const data = {
    labels: dataApi.map(elemment => elemment.name),
    datasets: [{
      label: 'Altura (m)',
      data: dataApi.map(elemment => elemment[characteristic]),
      borderColor: getColorsData(),
      backgroundColor: getColorsData(40)
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        ticks: {
          display: false
        }
      }
    }
  }

  const chart = new Chart(dashboardFeaturesChart, {
    type: 'radar',
    data,
    options
  });

  handleDashboardFeatures(dataApi, chart);
};

export default features;
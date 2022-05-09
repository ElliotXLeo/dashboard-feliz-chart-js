import { getColorsData } from "../utils/utils.js";

export const models = (dataApi) => {
  // const uniqueModels = [...new Set(dataApi.map(element => element.model))];
  const uniqueModels = dataApi.reduce((previous, current) => {
    const exist = previous.find(element => element === current.model);
    if (exist === undefined) {
      previous.push(current.model);
    }
    return previous;
  }, []);

  const amountsModels = uniqueModels.map(model => dataApi.filter(element => element.model === model).length);

  const dashboardModelsChart = document.getElementById('dashboardModelsChart');
  const data = {
    labels: uniqueModels,
    datasets: [{
      data: amountsModels,
      borderColor: getColorsData(),
      backgroundColor: getColorsData(40)
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'left'
      }
    }
  }

  new Chart(dashboardModelsChart, {
    type: 'doughnut',
    data,
    options
  });
}

export default models;
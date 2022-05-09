export const getColorsData = (transparency) => {
  const colors = ['#7448c2', '#61dafb', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffd700', '#ff0000', '#d6ff00', '#0038ff', '#dc143c', '#888888'];
  return colors.map(element => transparency ? element + transparency : element);
};

export const fetchApi = async (...urls) => {
  const promises = urls.map(async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
  return Promise.all(promises);
};

export const getYearsFromRange = (data, years) => {
  const dataByYears = years.map((rangeYears) => {
    const [from, to] = rangeYears.split('-');
    return data.filter(element => element.year >= from && element.year <= to).length;
  });
  return dataByYears;
};

export const handleDashboardFeatures = (dataApi, dashboardFeaturesChart) => {
  const dashboardFeaturesSelectInfo = document.getElementById('dashboardFeaturesSelectInfo');
  const handleChange = (e) => {
    const characteristic = e.target.value;
    const data = dataApi.map(elemment => elemment[characteristic]);
    chartUpdate(dashboardFeaturesChart, data, characteristic);
  };
  dashboardFeaturesSelectInfo.addEventListener('change', handleChange);
};

const chartUpdate = (chart, data, label) => {
  // const chart = Chart.getChart(chartId);
  chart.data.datasets[0].data = data;
  chart.data.datasets[0].label = label;
  chart.update();
};


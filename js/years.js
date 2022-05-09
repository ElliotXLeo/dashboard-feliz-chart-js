import { getColorsData, getYearsFromRange } from "../utils/utils.js";

export const years = (dataApi) => {
  const years = ['1998-2000', '2001-2003', '2004-2006', '2007-2009', '2013-2015', '2016-2018', '2019-2021'];

  const dashboardConstructionsYearChart = document.getElementById('dashboardConstructionsYearChart');
  const data = {
    labels: years,
    datasets: [{
      data: getYearsFromRange(dataApi, years),
      borderColor: getColorsData(),
      pointBorderWidth: 5,
      backgroundColor: getColorsData(40),
      fill: true,
      tension: 0.5
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

  new Chart(dashboardConstructionsYearChart, {
    type: 'line',
    data,
    options
  });
};

export default years;
'use strict';

import models from "./models.js";

const documentReady = async () => {
  const inicio = performance.now();

  // const fetchApi = async () => {
  const fetchApi = async (...urls) => {
    // const response1 = await fetch('https://coasters-api.herokuapp.com');
    // const response2 = await fetch('https://coasters-api.herokuapp.com/country/Spain');
    // const allData = await response1.json();
    // const data2 = await response2.json();

    // const [response1, response2] = await Promise.all([fetch('https://coasters-api.herokuapp.com'), fetch('https://coasters-api.herokuapp.com/country/Spain')]);
    // const allData = await response1.json();
    // const data2 = await response2.json();

    // const promises = urls.map(url => fetch(url).then(response => response.json()))
    // return Promise.all(promises);

    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const data = Promise.all(promises);
    return data;

    // console.log(allData);
    // console.log(data2);
    // models(allData);
    // const fin = performance.now();
    // console.log(`Tiempo de ejecución de consultarApi1: ${fin - inicio}ms`);
  };
  // fetchApi();

  // fetchApi('https://coasters-api.herokuapp.com', 'https://coasters-api.herokuapp.com/country/Spain').then(([allData, data2]) => {
  //   console.log(allData);
  //   console.log(data2);
  //   const fin = performance.now();
  //   console.log(`Tiempo de ejecución de consultarApi1: ${fin - inicio}ms`);
  //   models(allData);
  // });

  const [allData, data2] = await fetchApi('https://coasters-api.herokuapp.com', 'https://coasters-api.herokuapp.com/country/Spain');
  console.log(allData);
  console.log(data2);
  const fin = performance.now();
  console.log(`Tiempo de ejecución de consultarApi1: ${fin - inicio}ms`);
  models(allData);
}

document.addEventListener('DOMContentLoaded', documentReady);
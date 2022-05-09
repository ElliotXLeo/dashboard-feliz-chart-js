'use strict';

import { fetchApi } from "../utils/utils.js";
import features from "./features.js";
import header from "./header.js";
import loader from "./loader.js";
import models from "./models.js";
import years from "./years.js";

const documentReady = async () => {
  loader();
  header();
  const [allData, spainData] = await fetchApi('https://coasters-api.herokuapp.com', 'https://coasters-api.herokuapp.com/country/Spain');
  models(allData);
  features(spainData, 'height');
  years(allData);
};

document.addEventListener('DOMContentLoaded', documentReady);
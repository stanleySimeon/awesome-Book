import { DateTime } from 'luxon';
import { navigations } from './modules/navigation.js';
import BookCollection from './modules/collection.js';

const date = document.getElementById('date');

const displayDate = (date) => {
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};

displayDate(date);
navigations();
BookCollection();
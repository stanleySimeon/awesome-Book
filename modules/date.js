import { DateTime } from 'luxon/src/luxon.js';

const displayCurrentDate = (date) => {
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};

export default displayCurrentDate;
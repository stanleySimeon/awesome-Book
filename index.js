import { DateTime } from './node_modules/luxon/src/luxon.js';
import { navigations } from './modules/navigation.js';
import BookCollection from './modules/collection.js';

const date = document.getElementById('date');
date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

navigations();
BookCollection();
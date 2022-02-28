import { navigations } from './modules/navigation.js';
import BookCollection from './modules/collection.js';
import displayDate from './modules/date.js';

const date = document.getElementById('date');

displayDate(date);
navigations();
BookCollection();
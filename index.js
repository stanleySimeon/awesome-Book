import { navigations } from './modules/navigation.js';
import BookCollection from './modules/collection.js';
import displayCurrentDate from './date.js';

const date = document.getElementById('date');

displayCurrentDate(date);
navigations();
BookCollection();
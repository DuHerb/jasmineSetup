import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { someFunction } from './jasmine.js';
import './styles.css';

$(document).ready(function() {
  // someFunction("input from jasmine.js");
  $('#output').text("Jasmine main.js connected");
});
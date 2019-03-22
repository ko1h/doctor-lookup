import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/styles.css';
import { FindDoctor } from './business.js';


$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    const sickInput = $("#sick").val();
    // $('#issue').val("");

    console.log(sickInput);
    // Promise.then(function(response) {
    //   let body = JSON.parse(response);
    //   $('.area').text('Here are doctors in ${city} is ${body.main.humidity}%');
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // });
  });
});

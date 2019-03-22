import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
// import './styles.scss';
import { FindDoctor } from './business-logic.js';


$(document).ready(function() {
  $('#doctorLocation').submit(function() {
    event.preventDefault();
    const issueInput = $('#issue').val();
    $('#issue').val("");
    console.log('#issue');

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.area').text('Here are doctors in ${city} is ${body.main.humidity}%');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

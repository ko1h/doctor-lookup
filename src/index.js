import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/styles.css';
import { FindDoctor } from './business.js';


$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    const sickInput = $("#sick").val();
    console.log(sickInput);

    const findDoctorInfo = new FindDoctor();
    console.log(findDoctorInfo);
    let doctorInfoOutput = findDoctorInfo.doctorInfo(sickInput);
    console.log(doctorInfoOutput);


    doctorInfoOutput.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

      $('.area').text('Here are doctors in portland that specialize in ${body.main}%');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

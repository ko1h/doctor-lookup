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
    const doctorInput = $("#doctor").val();

    const findDoctorInfo = new FindDoctor();
    console.log(findDoctorInfo);
    let doctorInfoOutput = findDoctorInfo.doctorInfo(sickInput);
    console.log(doctorInfoOutput);


    doctorInfoOutput.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      let firstName = (`${body.data[0].profile}`);

      let info = firstName;

      $('#results').text(info);
    });
  });
});

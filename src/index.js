import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/styles.css';
import { FindDoctor } from './business.js';


$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();
    const sickInput = $("#sick").val();

    const doctorInput = $("#doctor").val();
    console.log("doctorInput");

    const findDoctorInfo = new FindDoctor();
    let doctorInfoOutput = findDoctorInfo.doctorInfo(sickInput, doctorInput);


    doctorInfoOutput.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if(body.data.length < 1) {
      $("#showErrors").text(`There was an error processing your request. Please try a different sympton:`)
      } else {

      let firstName = [];
      let lastName = [];
      let street = [];
      let city = [];
      let state = [];
      let zip = [];
      let phoneNumber = [];
      var info = [];

      for(let i = 0; i < body.data.length; i++) {
        firstName = body.data[i].profile.first_name;
        lastName = body.data[i].profile.last_name;

        street =body.data[i].practices[0].visit_address.street;
        city =body.data[i].practices[0].visit_address.city;
        state =body.data[i].practices[0].visit_address.state;
        zip =body.data[i].practices[0].visit_address.zip;
        phoneNumber =body.data[i].practices[0].phones[0].number;


       info.push('<li>'+ firstName + " " + lastName  +'</li>'+ '<p>'+ street + '<br>' + city + " " + state + " " + zip + '<br>' + "Phone number: "+phoneNumber +'</p>')
       console.log("this is info" + info);
      }


        $('#nameResults').html(info);
      }
      },
      function(error){
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });

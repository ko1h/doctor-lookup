import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { FindDoctor } from './business.js';


$(document).ready(function() {
  $('#doctorLocation').submite(function() {
    event.preventDefault();
    const issueInput = $('#issue').val();
    $('#issue').val("");

  });
});

$(document).ready(function() {
  $('#doctorLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}45.5122%2C-122.6587%2C100user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(typeof response);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.area').text(`Here is a doctor near you ${response.meta.humidity}%`);
    }
  });
});

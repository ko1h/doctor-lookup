export class FindDoctor {

<<<<<<< HEAD
  doctorInfo(sickInput,doctorInput) {

=======
  doctorInfo(sickInput) {
    
>>>>>>> 1b357a91ff29f6f430636b01bfae39540b849f03
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      let apiKey = process.env.exports.apiKey;
<<<<<<< HEAD
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${doctorInput}&query=${ sickInput }location=45.5122%2C-122.6587%2C100user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

=======
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${sickInput}&location=or-portland&sort=best-match-asc&skip=0&limit=50&user_key=${process.env.exports.apiKey}`;
>>>>>>> 1b357a91ff29f6f430636b01bfae39540b849f03
      request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       }
       request.open("GET", url, true);
       request.send();
       });
     }
   }

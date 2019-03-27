export class FindDoctor {

  doctorInfo(sickInput) {
    
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      let apiKey = process.env.exports.apiKey;
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${sickInput}&location=or-portland&sort=best-match-asc&skip=0&limit=50&user_key=${process.env.exports.apiKey}`;
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

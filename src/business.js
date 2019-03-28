export class FindDoctor {


  doctorInfo(sickInput,doctorInput) {


    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      let apiKey = process.env.exports.apiKey;

      const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${doctorInput}&query=${sickInput}&location=or-portland&sort=best-match-asc&skip=0&limit=20&user_key=${process.env.exports.apiKey}`;

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

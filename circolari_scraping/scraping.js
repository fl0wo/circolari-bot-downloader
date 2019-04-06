const superagent = require('superagent');

(async function(){
  const response = await superagent.get('https://www.itiszuccante.gov.it/categoria/circolari?page=1')
  console.log(response.text)
})();
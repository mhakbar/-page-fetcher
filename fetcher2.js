const request = require('request');
const args = (process.argv.slice(2));
const fs = require('fs');

let webpage = args[0];
let path = args[1];

console.log(webpage);
console.log(path);

let content = "I hope this works";

request(`${webpage}`, function (error, response, body) {

  if (error) {
    console.error('ERROR', error)
  } else {
    fs.writeFileSync(`${path}`, content, err => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(`written successfully and download to: ${path}` );
      }

  });

}
});


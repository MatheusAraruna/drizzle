const OAuth = require('oauth');
const header = {"X-Yahoo-App-Id": "Eqy35l7k"};
const request = new 
OAuth.OAuth(null,
            null,
            'dj0yJmk9cGJ3M0RIMlo0ajFOJmQ9WVdrOVJYRjVNelZzTjJzbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJj',
            '8bf821db584e89342cf1dd1ec8a4cea7a68742de',
            '1.0',
            null,
            'HMAC-SHA1',
            null,
            header);

async function RequestClimate(city){
    const promise = new Promise((resolve,reject)=>{
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json`,
        null,
        null,
        (err, data, result) => {
            if (err) {
                console.warn(err);
            } else {
            if(data){
                resolve(data)
            }else{
                }
            }
        }
        ); 
    })
    return promise
}

export default RequestClimate;
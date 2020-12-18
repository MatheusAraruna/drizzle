//By default the api returns the temperature in fahrenheit, the function only changes to celcius
function parseToCelcius(num){
    return Math.round((num - 32)/1.8)
}
export default parseToCelcius
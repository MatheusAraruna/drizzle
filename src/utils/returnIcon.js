import {
    WiTornado,
    WiDayThunderstorm,
    WiHurricane,
    WiThunderstorm,
    WiRainMix,
    WiSnow,
    WiRaindrops,
    WiRain,
    WiSnowflakeCold,
    WiSnowWind,
    WiHail,
    WiSleet,
    WiDust,
    WiFog,
    WiSmoke,
    WiLightning,
    WiWindy,
    WiCloudy,
    WiDayCloudy,
    WiNightAltCloudy,
    WiDaySunny,
    WiMoonset,
    WiHot,
    WiShowers,
    WiAlien
} from 'weather-icons-react';
function returnIconWheater(code) { 
    switch(code){
        case 0:
            return  <WiTornado />
        case 1:
            return  <WiDayThunderstorm />
        case 2:
            return  <WiHurricane />
        case 3:
        case 4:
            return  <WiThunderstorm /> 
        case 5:
        case 6:
            return  <WiRainMix />
        case 7:
            return  <WiSnow />
        case 8:
        case 9:
            return  <WiRaindrops />
        case 10: 
        case 11:
        case 12:
            return  <WiRain />  
        case 13:
            return  <WiSnowflakeCold />
        case 14:
            return  <WiSnow />
        case 15:
            return  <WiSnowWind />
        case 16:
            return  <WiSnow />
        case 17:
            return  <WiHail />
        case 18:
            return  <WiSleet />
        case 19:
            return  <WiDust />
        case 20:
        case 21:
            return  <WiFog /> 
        case 22:
            return  <WiSmoke />
        case 23:
            return  <WiLightning />
        case 24:
            return  <WiWindy />
        case 25:
            return  <WiSnowflakeCold />
        case 26:
            return  <WiCloudy />
        case 27:
            return  <WiNightAltCloudy />
        case 28:
            return  <WiDayCloudy />
        case 29:
            return  <WiNightAltCloudy />
        case 30:
            return  <WiDayCloudy />
        case 31:
            return  <WiMoonset />
        case 32:
            return  <WiDaySunny />
        case 33:
            return  <WiMoonset />
        case 34:
            return  <WiDaySunny />
        case 35:
            return  <WiRainMix />
        case 36:
            return  <WiHot />
        case 37:
        case 38:
            return  <WiThunderstorm />
        case 39:
            return  <WiShowers />
        case 40:
        case 41:
        case 42:
            return  <WiSnow />
        case 43:
            return  <WiSnowWind />
        case 44:
            return  <WiAlien />
        case 45:
            return  <WiShowers />
        case 46:
            return  <WiSnow />
        case 47:
            return  <WiThunderstorm />
        default:
           return   <WiAlien />
    }
}
export default returnIconWheater;
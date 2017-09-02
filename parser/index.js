"use strict";
const colors=require("colors");
let getFeel = temp =>{
  if (temp < 5){
    return "Shivering cold";
  }
  else if (temp < 15){
    return "pretty cold";
  }
  else if (temp < 25){
    return "moderately cold";
  }
  else if (temp < 32){
    return "quite warm";
  }
  else if (temp <40){
    return "very hot";
  }
  else{
    return "super hot";
  }
}
let currentWeather=response =>{
  if (response.query.results){
    let resp=response.query.results.channel;
    let location=`${resp.location.city}, ${resp.location.country}`;
    let {text,temp}=resp.item.condition;

    return `Right now, it is ${text.toLowerCase().red.bold} in ${location.red.bold}, it is ${getFeel(Number(temp)).red.bold} at
     ${temp.red.bold} degress Celsius`;
  }
}


module.exports={
  currentWeather
}

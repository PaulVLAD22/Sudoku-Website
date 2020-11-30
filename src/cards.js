import {app_id,app_key} from "./config.js";
import $ from 'jquery';


$.ajax({
      url: "http://api.weatherunlocked.com/api/forecast/46.7,23.9?app_id="+app_id+"&app_key="+app_key,
      type: "GET",
      async:false,
      success: function (parsedResponse) {
        array_days = parsedResponse['Days'];

      },
      error: function (error) {

          console.log(error);
      }
});

var array_days;



var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var today_index = new Date().getDay();

export const wx_code_to_className ={};

wx_code_to_className[0]='sun';

for (let i =1;i<95;i++){
   if(i<60){
     wx_code_to_className[i]='clouds';
   }
   else if (i<70){
     wx_code_to_className[i]='rain';
   }
   else{
    wx_code_to_className[i]='snow';
   }
}


export const cards = [
  { id :1,
    data : array_days[0],
    day : weekday[today_index]
  },
  { id :2,
     data : array_days[1],
      day : weekday[today_index+1]
  },
  {
    id :3,
     data : array_days[2],
      day : weekday[today_index+2]
  }

  ]
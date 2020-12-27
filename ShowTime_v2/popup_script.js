// regions {variables and functions}

var timeId = "time";
var dateId = "date";
var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan", "Feb","Mar", "Apr","May", "Jun", "Aug","Sep","Oct","Nov","Dec"];

var consoleGreeting = "Hello World - from popup_script.js";

function setTimeAndDate(timeElement, dateElement)
{  
	var date = new Date();
   var minutes =  (date.getMinutes() < 10 ? '0': '' ) + date.getMinutes() ;
   var seconds =  (date.getSeconds() < 10 ? '0': "") + date.getSeconds(); 
   var time = date.getHours() + ":" + minutes + ":" + seconds;
   // In "date.getMonth", 0 indicates the first month of the year
   // In "date.getDay", O represents Sunday
   var date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
   timeElement.innerHTML = time;
   dateElement.innerHTML = date;

}

function updateTime()
{
    setInterval(function()
    {
        var  timeElement = document.getElementById(timeId);
        var  dateElement = document.getElementById(dateId);
        setTimeAndDate(timeElement, dateElement);
    },1000)
    
    
}
//end-region

// region {calls}
console.log(consoleGreeting);
document.addEventListener("DOMContentLoaded",function(dcle){
    
   //updateTime();
   window.onload = updateTime;
    

});
// end.region
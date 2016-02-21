//author @todoslosdays
//Javascript for the bus transportation
//Gets the users location
$.get("http://ipinfo.io", function(response) {
	$("#ip").html(response.ip);
	$("#address").html(response.city + ", "response.region);},
	"jsonp");

//checks to see if the bus system is running
function timeChecker(){

	var x = "";

	var time = new Date().getHours();

	if (time > 20.50) {

		x = "The Powelton/Spring Garden Route is closed at this time. "

	}

	if(time > 22.50){

		x = "The Queen Lane Route (East Falls Loop)  and The Powelton/Spring Garden Route are both closed at this time."

	}
	if(time > 23.00){

		x = "The Dragon Route (Center City Loop), The Queen Lane Route (East Falls Loop) and The Powelton/Spring Garden Rout are all closed at this time. "

	}
}
//Finds the location of the bus

var autoBus;
var busNumber;
var userLocation;
var distance;
var arrivalTime;

$.getUserLocation(userLocation);
console.log("Your location is " + userLocation);

$.getLocation(autoBus);
console.log("The location of the bus nearest you is " + autoBus);

$.getBusNumber(busNumber);
console.log("The number of the bus is " + busNumber);

$.getDistance(distance);
console.log("The distance between you and the bus is " + distance);

arrivalTime = distance * 5;

console.log("The arrival time of the bus is about " + arrivalTime);

//HELPS CROWD SOURCE DATA AT BUS STOPS TO HELP WITH BUS ANALYTICS
var signal;


function(callForBus){
	$("busStop").html(callForBus.signal);//collects total amount of signals from each bus stop, therefore generating traffic analytics sorted by time of day
} 



// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCy1pzttTHkggjrWT_Vityky8xIc--Nt4g",
    authDomain: "traintime-4b383.firebaseapp.com",
    databaseURL: "https://traintime-4b383.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
//Create Variable to reference database
var database = firebase.database();

database.ref().on("child_added", function(snapshot) {
	//Update table
	var template;

	// var currentTime = new Date(Date.now());
	// var currentHours = currentTime.getHours();
	// var currentMinutes = currentTime.getMinutes();
	
	// var thenTime = new Date(Date.parse(snapshot.val().date));
	// var thenHours = thenTime.getHours();
	// var thenMins = thenTime.getMinutes();
	
	// var tfrequency =  
	// var tarrival =  frecuency - currentTime;  

	// $('.clockpicker').clockpicker();

	template += "<tr>" + 
		"<th>" + snapshot.val().name + "</th>" + 
		"<th>" + snapshot.val().destination + "</th>" + 
		"<th>" + snapshot.val().frequency + "</th>" +
		// "<th>" + arrival + "</th>" + 
		// "<th>" + away + "</th>" + 
		"</tr>";

	$("#table_body").append(template);
}, function(errorObject) {
	console.log("the read failed: " + errorObject.code);
});

//Whenever user clicks submit
$("#submit").on("click", function(event){

	var newTrain = {
		name: $("#train_name").val().trim(),
		destination: $("#destination").val().trim(),
		firstTTime: $("#firstTTime").val().trim(),
		frequency: parseFloat($("#frequency").val().trim())
	};

	// NewTrain array.push(newTrain);

	database.ref().push(newTrain);

	// Return False to allow "enter"
	return false;
});


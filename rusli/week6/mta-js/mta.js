// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
var mta = {
	lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

	lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],

	line3: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var findLine = function(stop){
	for (var i in mta)
		if (lines[i].indexOf(stop) > -1){
			return i;
}


var stopdistance = function(stopA, stopB,line){
	var distance = Math.abs(lines[line].indexOf(stopA) - lines[lines].indexOf(stopB));
}

// for 
// var answer = mta[i]

var stations = function (startStation, endStation){
	var lineA = findLine(stopA);


	// Find the line for startStation.
	// startLine = 'N'; // Fix this

	// // Find the INDEX of the startStation in its line
	// startIndex = 1;

	// // Find the line for endStation.
	// endLine = 'N'; // Fix this

	// // Find the INDEX of the endStation in its line
	// endIndex = 5;

	if (startLine === endLine){
		var answer = Math.abs(mta.startIndex - mta.endIndex);
		console.log(answer)
	}
}


stations('34th', '8th');


// get the distance between stop a and stop b 
// find the lines for the stop a and stop b 
// if they are not on the same line, get the distance between stop a and union square and stop b and union square 
// add and return distance


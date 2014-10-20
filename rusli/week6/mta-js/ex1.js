var mta = {
	nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	lLine: ['8th', '6th', 'Union Square', '3rd', '1st'],
	sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var findLine = function (stop)
	for (var i in mta) {
	if (lines[i].index(stop) > -1) {
//if the stop is in the line.
	return i;
	}
}
};

var stopsDistance (stopA, stopB, line) {
var distance = Math.abs(lines[line].indexOf(stopA) - lines[line].indexOf(StopB));
return distance;
};


var distanceBetweenStops = function (stopA, stopB) {
var lineA = findLine(stopA);
var lineB = findLine(StopB);

if (lineA == lineB) {
var distance = stopsDistance(stopA, stopB, lineA);
} else {

var distanceFromA = stopsDistance(stopA, 'Union Square', LineA);
var distanceFromB = stopsDistance(stopB, 'Union Square', LineB);
var distance = distanceFromA + distanceFromB;
}
return distance;
};

distanceBetweenStops('Times Square', '33rd');

// Get the distance between stop A and stop B.
// Find the lines for stop A and stop B.
// If on the same line, get the distance between A and B.
// If not on the same line, get the distance between A and Union Square and B and Union Square.
// Add and return that distance.
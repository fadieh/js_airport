function Airport() {

	this.planes = [];
	this.landedPlanes = [];

};

function Plane() {
	this.type = "Plane"
	this.landed = false
	this.baggageContained = []
	this.flightNumber = ''
};

function Luggage() {
	this.weight = 0
};

Airport.prototype.land = function(plane) {
	if (this.landedPlanes != this.plane)
	this.planes.push(plane)
	plane.landed = true
	return plane
};

Airport.prototype.takeOff = function(plane) {
	this.planes.splice(plane)
};

Airport.prototype.isFull = function() {
	if (this.planes.length < 40)
	{ return false }
	else { return true }
};

Airport.prototype.numberOfPlanesLanded = function() {
	return this.planes.length;
};

Airport.prototype.whichPlanesHaveLanded = function() {
	for (var i in this.planes) {
		console.log(this.planes[i]);
		this.landedPlanes.push(this.planes[i].type);
	}
	return this.landedPlanes;
};

Plane.prototype.acceptLuggage = function(luggage) {
	if (luggage.weight < 20)
	this.baggageContained.push(luggage)
	else
	console.log(luggage)
};

function Airport() {

	this.planes = [];
	this.landedPlanes = []

};

function Plane() {
	this.type = "Plane"
};

Airport.prototype.land = function(plane) {
	this.planes.push(plane)
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


function Airport() {

	this.planes = [];

};

function Plane() {


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
		{
		return false
		}
		else 
		{
		return true
		}
};
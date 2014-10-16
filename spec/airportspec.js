describe('Our Javascript airport can do the following:', function(){

	it('can have planes', function(){
		airport = new Airport
		expect(airport.planes).toEqual([])
	});

	it('can allow planes to land', function(){
		plane = new Plane
		expect(airport.land(plane)).toEqual(plane)
	});

	it('should know how many planes it has', function(){
		plane = new Plane
		airport = new Airport
		expect(airport.planes.length).toEqual(0)
		airport.land(plane)
		expect(airport.planes.length).toEqual(1)
	});

});


// has a plane after it has landed
// should know how many planes it has
// allow planes to take off
// should know that the plane has taken off - let us know if the plane is or isn't in the airport.
// 

// isLanded instead of Landed? in javascript
// splice method - returning an array with oneplane.
// what does _ mean again - ask
// 
describe('Our Javascript airport can do the following:', function(){

	it('can have planes', function(){
		airport = new Airport
		expect(airport.planes).toEqual([])
	});

});

// to do
//
// allow planes to land
// has a plane after it has landed
// should know how many planes it has
// allow planes to take off
// should know that the plane has taken off - let us know if the plane is or isn't in the airport.
// 

// isLanded instead of Landed? in javascript
// splice method - returning an array with oneplane.
// what does _ mean again - ask
// 
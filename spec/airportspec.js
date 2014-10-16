describe('Our Javascript airport can do the following:', function(){

	beforeEach(function() {
		plane = new Plane
		airport = new Airport
	})

	fillUp = function(airport){
		for(var i = 0; i < 40; i++) {
			airport.land(new Plane);
		}
	}

	it('can have planes', function(){
		expect(airport.planes).toEqual([])
	});

	it('can allow planes to land', function(){
		expect(airport.land(plane)).toEqual(plane)
	});

	it('should know how many planes it has', function(){
		expect(airport.planes.length).toEqual(0)
		airport.land(plane)
		expect(airport.planes.length).toEqual(1)
	});

	it ('has a plane after it has landed', function(){
		airport.land(plane)
		expect(airport.planes).toEqual([plane])
	});

	it ('should allow planes to take off', function(){
		airport.land(plane)
		expect(airport.planes).toEqual([plane])
		airport.takeOff(plane)
		expect(airport.planes).toEqual([])
	});

	it ('should only let a plane take off if its present', function(){
		airfad = new Plane
		airport.land(airfad)
		expect(airport.takeOff(plane)).toEqual(undefined)
	});

	it ('should report if its full', function(){
		fillUp(airport)
		expect(airport.isFull()).toBe(true);
	});

});


// to do
// should report if it s full
// should report if its not full
// tell us how many planes have landed
// does not allow the same plane to land twice
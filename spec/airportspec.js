describe('Our Javascript airport can do the following:', function(){

	beforeEach(function() {
		plane = new Plane
		airport = new Airport
		luggage = new Luggage
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

	it ('should report if its not full', function(){
		expect(airport.isFull()).toBe(false);
	});

	it ('should tell us how many planes have landed', function(){
		airport.land(plane);
		expect(airport.numberOfPlanesLanded()).toEqual(1);
	});

	it ('should tell us which planes have landed', function(){
		airport.land(plane);
		expect(airport.whichPlanesHaveLanded()).toEqual(["Plane"]);
	});

	it ('plane should know if its landed', function(){
		airport.land(plane)
		expect(plane.landed).toEqual(true)
	});

	it ('plane should know if its not landed', function(){
		expect(plane.landed).toEqual(false)
	})

	it ('should not allow the same plane to land twice', function(){
		airport.land(plane);
		airport.land(plane);
		expect(airport.planes.length).toEqual(1);
	});

	it ('plane can accept luggage', function(){
		plane.acceptLuggage(luggage);
		expect(plane.baggageContained.length).toEqual(1)
	});

	it ('plane can only accept luggage below 20kg', function(){
		luggage.weight = 21
		plane.acceptLuggage(luggage)
		expect(plane.baggageContained.length).toEqual(0)
	});

	it ('airport has a name', function(){
		airport.name = 'Gatwick'
		expect(airport.name).toEqual('Gatwick')
	});

	it ('should recognise a flight number', function(){
		plane.flightNumber = 'MK194'
		expect(plane.flightNumber).toEqual('MK194')
	});

	it ('should generate a new flight number when it departs', function(){
		plane.flightNumber = 'MK194'
		airport.takeOff(plane)
		expect(plane.flightNumber).notToEqual('MK194')
	});

	it('should let us know if a plane has landed', function(){
	});

	it('let us know if a plane has not landed', function(){
		// if plane is docked at airport?
	});



});

class Lodash {
	compact(array) {
		return array.filter(val => !!val)
	}
	
	groupBy(array, prop) {
		// Arguments are array and function. Expect to get an object.
		// Keys are to be something that function returns
		return array.reduce((acc, i) => {
			// Reduce takes: 1) callback, 2) initial state of accumulator (empty object)
			// Callback takes: 1) accumulator 'acc', 2) current value 'i' to iterate.

			// If 'prop' is a function, run function with argument 'i'
			// else run method 'prop' for item 'i'
			const key = typeof prop === 'function' ? prop(i) : i[prop]; 
			// If there is no such key in accumulator, 
			// then create the key and assign an empty array to it.
			if (!acc[key]) {
				acc[key] = []; // Now the accumulator has the key with empty array.
			}
			acc[key].push(i); // Put current item to the key of accumulator
			return acc; // Return accumulator after all iterations.

		}, {});

	}
}

module.exports = Lodash;

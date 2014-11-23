'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	min = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-nanmin', function tests() {

	it( 'should export a function', function test() {
		expect( min ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				min( value );
			};
		}
	});

	it( 'should return the minimum value', function test() {
		var data, expected;

		data = [ null, 4, 2, NaN, 5, 3, true, undefined, 8, 2 ];
		expected = 2;

		assert.strictEqual( min( data ), expected );
	});

	it( 'should return null if an input array does not contain any numeric values', function test() {
		var data;

		data = [ null, true, [], NaN ];

		assert.isNull( min( data ) );

		assert.isNull( min( [] ) );
	});

});

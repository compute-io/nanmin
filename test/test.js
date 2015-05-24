/* global require, describe, it */
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


	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			true,
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				min( [ 1, 2, 3 ], value );
			};
		}
	});

	it( 'should return the minimum value', function test() {
		var data, expected;

		data = [ null, 4, 2, NaN, 5, 3, true, undefined, 8, 2 ];
		expected = 2;

		assert.strictEqual( min( data ), expected );
	});

	it( 'should return the maximum value using an accessor function', function test() {
		var data, expected, actual;

		data = [
			[1,null],
			[1,4],
			[2,2],
			[2,NaN],
			[3,5],
			[4,3],
			[3, true],
			[3, undefined],
			[5,8],
			[6,2]
		];
		expected = 2;
		actual = min( data, getValue );

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});


	it( 'should return null if an input array does not contain any numeric values', function test() {
		var data;

		data = [ null, true, [], NaN ];

		assert.isNull( min( data ) );

		assert.isNull( min( [] ) );
	});

});

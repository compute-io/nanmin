'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number' );

// NANMIN //

/**
* FUNCTION: nanmin( arr[, accessor] )
*	Computes the minimum value of an array ignoring any non-numeric values.
*
* @param {Number[]|Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} min value or null
*/
function nanmin( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'nanmin()::invalid input argument. Must provide an array. Value: `' + arr + '`.'  );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'nanmin()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	var len = arr.length,
		min = null,
		val,
		i;

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ], i);
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( min === null || val < min ) {
				min = val;
			}
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( min === null || val < min ) {
				min = val;
			}
		}
	}
	return min;
} // end FUNCTION nanmin()


// EXPORTS //

module.exports = nanmin;

/**
*
*	COMPUTE: nanmin
*
*
*	DESCRIPTION:
*		- Computes the minimum value of an array ignoring non-numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: nanmin( arr )
*	Computes the minimum value of an array ignoring any non-numeric values.
*
* @param {Array} arr - array of values
* @returns {Number} min value
*/
function nanmin( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'nanmin()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		min = null,
		val;

	for ( var i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( typeof val !== 'number' || val !== val ) {
			continue;
		}
		if ( min === null || val < min ) {
			min = val;
		}
	}
	return min;
} // end FUNCTION nanmin()


// EXPORTS //

module.exports = nanmin;

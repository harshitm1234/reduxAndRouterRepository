var array = require("lodash/array");

/**
 * Create Pagination Chunks
 * @param {*} arr 
 */
const arrChunks = (arr) => {
	return array.chunk(arr, 15);
};

export default arrChunks;

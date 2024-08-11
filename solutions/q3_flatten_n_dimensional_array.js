/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	let flattenedArray=[];
	if(!Array.isArray(arr)) {
		return null;
	}
	else {
	for(let item of arr) {
		if(Array.isArray(item)) {
			flattenedArray.push(...flatten(item));
		}
		else {
			flattenedArray.push(item);
		}
	}

	return flattenedArray;
}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

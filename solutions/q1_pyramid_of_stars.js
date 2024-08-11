/* Write a program to build a `Pyramid of stars` of given height */


function buildPyramid(height) {
    if (typeof height !== 'number' || height <= 0) {
        return '';
    }
    let pyramid = '';
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat((height+1)-i);
        const stars = '* '.repeat(i).trimEnd();
        pyramid += `${spaces}${stars}  \n`;
    }
    return pyramid;
}


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

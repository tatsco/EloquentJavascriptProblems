/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function triangleLoop (num) {
  let amperStr = '';
  for (let counter = 0; counter < num; counter++) {
    amperStr += "#";
    console.log(amperStr)
  }
}

triangleLoop(7)


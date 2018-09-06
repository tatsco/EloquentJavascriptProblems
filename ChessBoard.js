/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that
 it works for any size, outputting a grid of the given width and height.
 */

function chessBoard(num) {
    let board = '';
    for (let height = 1; height <= num; height++) {
      for (let width = 1; width <= num; width++) {
        if ((height + width) % 2 !== 0) {
          board += "#";
        } else if ((height + width) % 2 === 0) {
          board += " ";
        }
      }
      board += "\n"
    }
    console.log(board);
  }
  
  chessBoard(8)
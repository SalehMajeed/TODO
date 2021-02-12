function valid({ board, row, column, testing_value }) {
	for (let i = 0; i < 9; i++) {
		const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
		const n = 3 * Math.floor(column / 3) + (i % 3);
		if (board[row][i] == testing_value || board[i][column] == testing_value || board[m][n] == testing_value) {
			return false;
		}
	}
	return true;
}
function sudoku(board) {
	// const track = {};
	// const empty = [];
	// const non_exist = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	// // only for traverse
	// for (let row = 0; row < 3; row++) {
	// 	for (let column = 0; column < 3; column++) {
	// 		if (arr[row][column] != '.') {
	// 			if (non_exist.includes(arr[row][column]) == true) {
	// 				const index = non_exist.indexOf(arr[row][column]);
	// 				non_exist.splice(index, 1);
	// 			}
	// 		} else {
	// 			empty.push([row, column]);
	// 		}
	// 	}
	// }
	// for (const val of empty) {
	// 	console.log(arr[val[0]][val[1]]);
	// }
	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			if (board[row][column] == '.') {
				for (let testing_value = 1; testing_value <= 9; testing_value++) {
					if (valid({ board, row, column, testing_value })) {
						board[row][column] = `${testing_value}`;
						if (sudoku(board)) {
							return true;
						} else {
							board[row][column] = `.`;
						}
					}
				}
				return false;
			}
		}
	}
	return true;
}

const data = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
sudoku(data);
console.log(data);

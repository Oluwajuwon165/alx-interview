#!/usr/bin/python3
import sys

def is_safe(board, row, col):
    # Check if a queen can be placed at board[row][col]
    for i in range(row):
        if board[i] == col or board[i] - i == col - row\
        or board[i] + i == col + row:
            return False
    return True

def solve_nqueens(board, row, n):
    # Base case: all queens are placed
    if row == n:
        print([[i, board[i]] for i in range(n)])
        return

    # Try placing the queen in each column of the current row
    for col in range(n):
        if is_safe(board, row, col):
            board[row] = col
            solve_nqueens(board, row + 1, n)

if __name__ == '__main__':
    # Validate and parse command-line arguments
    if len(sys.argv) != 2:
        print("Usage: nqueens N")
        sys.exit(1)

    try:
        n = int(sys.argv[1])
    except ValueError:
        print("N must be a number")
        sys.exit(1)

    if n < 4:
        print("N must be at least 4")
        sys.exit(1)

    # Initialize the board and solve the problem
    board = [0] * n
    solve_nqueens(board, 0, n)

#!/usr/bin/python3
"""
Method that calculates the fewest number of operations needed to result
in exactly n H characters in the file.
"""


def minOperations(n):
    """
    Calculates the fewest number of operations needed to result
    in exactly n H characters in the file.

    Args:
        n (int): The number of H's to be achieved.

    Returns:
        int: The minimum number of operations needed to achieve n H's.
    """
    if n <= 1:
        return 0

    operations = 0
    i = 2
    while i <= n:
        if n % i == 0:
            n //= i
            operations += i
        else:
            i += 1

    return operations

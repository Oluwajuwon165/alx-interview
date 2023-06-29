#!/usr/bin/python3

def isWinner(x, nums):
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True

    if not nums or x <= 0:
        return None

    wins = {'Maria': 0, 'Ben': 0}

    for n in nums:
        prime_count = sum(1 for num in range(1, n + 1) if is_prime(num))
        if prime_count % 2 == 0:
            wins['Ben'] += 1
        else:
            wins['Maria'] += 1

    if wins['Maria'] > wins['Ben']:
        return 'Maria'
    elif wins['Maria'] < wins['Ben']:
        return 'Ben'
    else:
        return None

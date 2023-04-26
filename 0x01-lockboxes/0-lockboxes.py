#!/usr/bin/python3

def canUnlockAll(boxes):
    """
    Determines if all the boxes can be opened.
    """
    n = len(boxes)
    keys = [False] * n
    keys[0] = True # the first box is unlocked by default
    stack = [0] # start with the first box
    while stack:
        box = stack.pop()
        for key in boxes[box]:
            if key >= 0 and key < n and not keys[key]:
                keys[key] = True
                stack.append(key)
    return all(keys)

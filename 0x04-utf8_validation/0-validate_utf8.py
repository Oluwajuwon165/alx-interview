#!/usr/bin/python3
"""
Requirements:
- Allowed editors: vi, vim, emacs
- All files will be interpreted/compiled on
Ubuntu 14.04 LTS using Python 3.4.3
- All files should end with a new line
- The first line of all files should be
exactly #!/usr/bin/python3
- A README.md file, at the root of the folder
of the project, is mandatory
- Your code should use the PEP 8 style (version 1.7.x)
- All your files must be executable
"""


def validUTF8(data):
    """
    Determines if a given data set represents a valid UTF-8 encoding.

    Args:
        data (list): List of integers representing the data set

    Returns:
        bool: True if data is a valid UTF-8 encoding, else False
    """

    # Implementation of the validUTF8 method

# Test code


data = [65]
print(validUTF8(data))

data = [80, 121, 116, 104, 111, 110, 32, 105, 115, 32, 99, 111, 111, 108, 33]
print(validUTF8(data))

data = [229, 65, 127, 256]
print(validUTF8(data))

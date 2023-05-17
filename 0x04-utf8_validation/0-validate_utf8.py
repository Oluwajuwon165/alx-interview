#!/usr/bin/python3
"""
UTF-8 Validation
"""


def validUTF8(data):
    # Number of bytes in the current UTF-8 character
    num_bytes = 0

    # Iterate over each integer in the data set
    for num in data:
        # Get the 8 least significant bits of the integer
        binary = format(num, '08b')

        # If it's the start of a new character
        if num_bytes == 0:
            # Count the number of leading 1s to determine the number of bytes
            for bit in binary:
                if bit == '0':
                    break
                num_bytes += 1

            # Handle invalid number of bytes
            if num_bytes == 0:
                continue

            '''For characters with a single byte, no
            need to check continuation bytes'''
            if num_bytes == 1 or num_bytes > 4:
                return False

        else:
            # Check if the current byte is a valid continuation byte
            if not (binary[0] == '1' and binary[1] == '0'):
                return False

        # Decrement the count of remaining bytes
        num_bytes -= 1

    # All bytes have been validated
    return num_bytes == 0

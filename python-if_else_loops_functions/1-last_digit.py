#!/usr/bin/python3

import random

number = random.randint(-10000, 10000)

lastNumber = abs(number) % 10

if number < 0:
    lastNumber = -lastNumber

if lastNumber > 5 : 
    strIs = "is greater than 5"
elif lastNumber == 0 :
    strIs = "is 0"
else : 
    strIs = "is less than 6 and not 0"

print(f"Last digit of {number} is {lastNumber} and {strIs}")

#!/usr/bin/python3

def print_last_digit(number):
   
    lastNumber = abs(number) % 10

    if number < 0:
        lastNumber = -lastNumber

    return lastNumber


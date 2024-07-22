#!/usr/bin/python3
""" Ce module définit une classe Square qui représente un carré."""


class Square:
    """Class that defines a square."""
    def __init__(self, size=0):
        """Initialize the square with an option"""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    @property
    def size(self):
        """ Get the size of the square."""
        return self.__size

    def area(self):
        """ Computes the area of the square.""" 
        return self.__size ** 2

#!/usr/bin/python3
""" Ce module définit une classe Square qui représente un carré."""


class Square:
    """Class that defines a square."""
    def __init__(self, size=0,position=(0, 0)):
        """Initialize the square with an option"""
        self.size = size
        self.position=position

    @property
    def size(self):
        """ Get the size of the square."""
        return self.__size
    
    
    @size.setter
    def size(self, value):
        """Sets the size of the square."""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Computes the area of the square"""
        return self.__size ** 2

    @property
    def position(self):
        """ The position of the square """
        return self.__position

    @position.setter
    def position(self, value):
        """ Set the position of the square """
        if (not isinstance(value, tuple) or len(value) != 2 
        or not all(isinstance(num, int) for num in value) 
        or not all(num >= 0 for num in value)):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def my_print(self):
        """ Prints the square with the X character """
        if self.__size == 0:
            print("")
            return

        for _ in range(self.__position[1]):
            print("")

        for _ in range(self.__size):
            print(" " * self.__position[0] + "#" * self.__size)

# sample.py
class Calculator:
    def __init__(self, value=0):
        self.value = value
    def add(self, num):
        self.value += num
        return self.value
    def multiply(self, num):
        self.value *= num
        return self.value

class User:
    def __init__(self, name):
        self.name = name
    def login(self, password):
        if password == "1234":
            return True
        return False

def greet(name):
    return f"Hello, {name}!"
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

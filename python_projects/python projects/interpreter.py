# a simple calculator that supports basic arithmetic +,-,*,/
# note: the program expects the user to add a space between each variable. for example the user should type 1 + 1 not 1+1

def main():
    expression = input()
    x, y, z = expression.split(" ")
    x = int(x)
    z = int(z)

    if y == "+":       # line 9 to 18: identify the expresion, calculate, and print the result
        print("{:.1f}".format(x + z))
    elif y == "-":
        print("{:.1f}".format(x - z))
    elif y == "/":
        print("{:.1f}".format(x / z))
    elif y == "*":
        print("{:.1f}".format(x * z))
    else:
        print("this is not an expression")

main()

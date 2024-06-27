# This program prompts the use for a name of a variable in camel case and it outputs the name of the variable in snake case
# Assume that the user prompts a variable in camel case
# ex: snake case: fisrst_name, camel case: firstName

def main():
    camel_case = input("camelCase: ") # ask the use for camel case variable input
    snake_case = convert(camel_case) # calls the convert function that was defined below
    print("snake_case:", snake_case) # print the result in snake case

def convert(input):     #define a function to convert from camel case to snake case
    output = ""         # this output variable is created so that the program modifies each letter according to criteria and adds the letter to the snake case output
    for c in input:
        if c .isupper():
            output +=  "_"  # Add an underscore before upper case letter
            output += c.lower() # make it lower case
        else:
            output += c
    return output

main()

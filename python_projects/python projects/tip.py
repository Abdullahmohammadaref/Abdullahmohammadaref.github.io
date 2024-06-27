# a tip calculator based on the meal cost

def main(): # this function call the other funtions for the cost of the meal and the percentage the user is willing to tip. then it does the calculations and print the ammount that the user should tip
    dollars = dollars_to_float(input("How much was the meal? "))
    percent = percent_to_float(input("What percentage would you like to tip? "))
    tip = dollars * percent
    print(f"Leave ${tip:.2f}")


def dollars_to_float(d): # remove unecessary elements
    d = d.strip('$')
    d = float(d)
    return d

def percent_to_float(p): # remove unesessary elements
    p = p.strip('%')
    p = float(p) / 100
    return p

main()

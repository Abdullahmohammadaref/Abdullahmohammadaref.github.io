def calculate_percentage(x, y):       # this function calculated the percentage and returns the value
    percentage = round(100 * x / y)
    if percentage <= 1:
        return "E"
    elif percentage >= 99:
        return "F"
    else:
        return F"{percentage}%"

def main():                               # this function prints the value
    x, y = get_int("Fraction: ")
    print(calculate_percentage(x, y))

if __name__ == "__main__":
    main()

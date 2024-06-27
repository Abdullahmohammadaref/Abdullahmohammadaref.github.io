# converts from (MM/DD/YYYY) or a date like this: August 9, 2024 to (YYYY-MM-DD) date fromat to make it so that the date can be ordered on computer programs
#


month_list = [               # create a list to specify the months of the year to the program
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

def main():          # calls the result made from the convert_date function and prints it.
        year, month, day = convert_date("Date:")
        print(f"{year:04}-{month:02}-{day:02}")

def convert_date(prompt):     # this function
    while True:  # this loop will keep asking the user to input the date untill all conditions are met
        try:
            date_input = input(prompt)    #inputing the date
            date_parts = date_input.strip().split()   #Splits the date parts into a list

            if len(date_parts) == 3:   # if the list have 3 parts then the format is like this August 9, 2024

                month, day, year = date_parts   # seperate each oart of the list into its own variable
                if len(day) < 2:                # makes sure that the user typed a number before the comma
                    raise ValueError
                else:
                    day = day.strip("0").strip(",")  # remove the uneccesary comma and zero

                    if month in month_list and int(day) in range(1, 32) and int(year) >= 1:   # makes sure that the user didnot enter something wrong like more tht 12 months
                        month = month_list.index(month) + 1        # converts the month from literals to a number
                        return int(year), int(month), int(day)

                    else:

                        raise ValueError

            elif len(date_parts) == 1:     # if the date is in this format: MM/DD/YYYY

                month, day, year = date_input.split("/")   # indicate that / is splitting factor

                if int(month) in range(1, 13) and int(day) in range(1, 32) and int(year) >= 1:   # makes sure that the user didnot enter something wrong like more tht 12 months

                    return int(year), int(month), int(day)
            else:

                raise ValueError

        except ValueError:

            continue

main()

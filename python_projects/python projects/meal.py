#Suppose that you’re in a country where it’s customary to eat breakfast between 7:00 and 8:00, lunch between 12:00 and 13:00, and dinner between 18:00 and 19:00.
#program that prompts the user for a time and outputs whether it’s breakfast time, lunch time, or dinner time.
#If it’s not time for a meal, don’t output anything at all.
#Assume that the user’s input will be formatted in 24-hour time as #:## or ##:##.
#And assume that each meal’s time range is inclusive. For instance, whether it’s 7:00, 7:01, 7:59, or 8:00, or anytime in between.


def main(): #Ask th user for time and tell weather it is brakfast dinner or lunch time
    time = input("What time is it? ")
    x = convert(time)
    if 7.0 <= x <= 8.0:
        print("Breakfast time")
    elif 12.0 <= x <= 13.0:
        print("Lunch time")
    elif 18.0 <= x <= 19.0:
        print("Dinner time")



def convert(time):   # split the hours and minutes from the user response and calculates the time to a decimal
    hours, minutes = time.split(":")
    x =  float(hours) + (float(minutes)/60)
    return x

if __name__ == "__main__":
    main()

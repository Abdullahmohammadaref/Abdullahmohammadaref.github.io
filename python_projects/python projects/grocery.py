# this program creates a grocery list and shows how many of each item are on the list


grocery_list = {} # creating the list
while True:     # line  5 to 12: this loop is asking the user for items and adding them to the list
    try:
        item = input().lower()
    except EOFError:
        break

    if item:
        grocery_list[item] = grocery_list.get(item, 0) + 1

sorted_items = sorted(grocery_list.items(), key=lambda x: x[0])  # sort the items alphabeticaly

for item, count in sorted_items:     # line 15 and 16: this loop prints the items with the number ammount of each item on the left
    print("{} {}".format(count, item.upper()))

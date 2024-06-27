# this program ask the user for items and it adds their price 

menue_list = {   # creates a list that specify the items and their price
    "Baja Taco": 4.25,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}
def get_menu(prompt):     # this loop keeps asking the user to input product and irt keeps addding the price to the total untill an eofe error is called
    total = 0
    while True:
        try:
            item = input(prompt).strip().title()
        except EOFError:  # if the user want to stop inputing items he will have to call an eofe error using ctrl d or ctrl z. depends on what works
            break
        else:
            if item in menue_list: # chech if the item is in the list
                total  = total + float(menue_list[item]) # if the item is in the list it will only take the price and add it to the total
                print(f"Total: ${total:.2f}")

get_menu("Item: ")

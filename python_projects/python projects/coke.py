# this program replicates a vending machin where you can keep inserting either 5, 10, or 25 cents untill the price of a coke bottle (50 cents) is met
# every time a coin is inserter it will show the ammount left to be inserted
# if more than 50 cents are entered the program will show the extra ammount that the vending machin will return

amount_due = int(50) # setting the price of a coke bottle
insert_coin = int(0)  # value of the counes inserted
change_owed = int(0)  # change_owed by the machine if the user overpays
while amount_due> 0:  # this loop will keep asking the user to input coins untill the the price of 50 cents is reached
    print("Amount Due:",amount_due)
    insert_coin = int(input("Insert Coin: "))
    if insert_coin == 5 or insert_coin == 10 or insert_coin == 25:
        amount_due = amount_due - insert_coin
    if  amount_due <= 0:
        print("Change Owed:",abs(amount_due)) # if the ammount is overpay it will show the change_owed withought the negative sign

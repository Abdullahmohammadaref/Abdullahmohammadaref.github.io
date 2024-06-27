# this is a randome number guessing game where the user can choose the to guess between 1 and any number

from random import choice  #  imports the function choice from randome

while True:           # from line 5 to 11: it asks the user for a number of levels and reprompt if it is not an intiger grater than 0
          try:
                    level = int(input("level: "))
                    if level > 0:
                              break
          except:
                    pass

levels = []      # line 13 to 15: creates a list that will be filled with numberes from 1 to n
for i in range(1, level+1):
          levels.append(i)

randome_number = choice(levels)   # chooses a randome numner from the list that we created and filled

while True:               # line 19 to 31: outputs weather the guess was too high or too low or correct and repormpt if the user doesnt guess the number
          try:
                    guess = int(input("guess: "))
                    if guess > 0:
                              if guess > randome_number:
                                        print("Too large!")
                              elif guess < randome_number:
                                        print("Too small!")
                              else:
                                        print("Just right!")
                                        break
          except:
                    pass

# this program prompts the user for a command line input, and it out puts it as an ascii art form called Frank, Ian, and Glen’s letters (figlet)
# example:
# _ _ _          _   _     _
#| (_) | _____  | |_| |__ (_)___
#| | | |/ / _ \ | __| '_ \| / __|
#| | |   <  __/ | |_| | | | \__ \
#|_|_|_|\_\___|  \__|_| |_|_|___/


#zero or two command-line arguments:
#Zero if the user would like to output text in a random font.
#Two if the user would like to output text in a specific font, in which case the first of the two should be -f or --font, and the second of the two should be the name of the font.
#Prompts the user for a str of text.
#Outputs that text in the desired font.
#If the user provides two command-line arguments and the first is not -f or --font or the second is not the name of a font, the program should exit via sys.exit with an error message.

import sys     # call the sys function
import random   # call the randome function
from pyfiglet import Figlet # call the figlet function from the pyfiglet module

def get_random_font():   # define a function that generates a randome font
    fonts = Figlet().getFonts()
    return random.choice(fonts)

def get_font(font_name):    # define a function that gets a desired font from the user
    try:
        return Figlet(font=font_name)
    except ValueError:
        sys.exit("Invalid usage")  # if the inputed font name doesnt exist then this error message will appear

def main():         # this function uses the font and calls the figlet function to generate an output
    if len(sys.argv) == 1:
        font = get_random_font()
    elif len(sys.argv) == 3 and (sys.argv[1] == "-f" or sys.argv[1] == "--font"):
        font = get_font(sys.argv[2])
    else:
        sys.exit("Invalid usage")

    text = input("Input: ")
    print(font.renderText(text))

if __name__ == "__main__":
    main()

# this program converts text to relevant emojies
# it is assumes that the user will input a text that have a relatable emoji

from emoji import emojize     # imports the function emojize from the module emoji (https://pypi.org/project/emoji/)
x = str(input("input: "))     # ask the user to input the text
if emojize(x, language='alias')!= x:     # checks if the text inputed by the user have a relevant emoji
    print("output:", emojize(x, language='alias'))   # prints the relevant emoji
else:
    print("no emoji identified")    # prints this error message if no emoji is found

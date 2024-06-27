# Little Professor, was  a “calculator” that would generate ten different math problems for David to solve. For instance, if the toy were to display 4 + 0 = , the user would (hopefully) answer with 4. If the toy were to display 4 + 1 = , the user would (hopefully) answer with 5. If the user were to answer incorrectly, the toy would display EEE. And after three incorrect answers for the same problem, the toy would simply display the correct answer (e.g., 4 + 0 = 4 or 4 + 1 = 5).
# toy explination: https://www.youtube.com/watch?v=ZuJwzH9BIgs
import random

def get_level():   # this function ask the user to input a level between 1,2 and 3.

          while True:
                    try:
                        level = int(input("level: "))
                        if level in [1, 2, 3]:
                               return level
                    except:
                        pass

def generate_integer(level):  #this function call the level from the prevous function and set level 1 to integers from 0 to 9, level 3 to intigers from 10 to 99, level 3 to intigers from 100 to 999
          if level == 1:
                    integer = random.randint(0, 9)
                    return integer
          elif level == 2:
                    integer = random.randint(10, 99)
                    return integer
          elif level == 3:
                    integer = random.randint(100, 999)
                    return integer
def main():     # this function asks the 10 questions and shows the reults of the answers
    level = get_level()
    score = 0
    iterations = 0
    while True:
            iterations = iterations + 1
            if iterations == 11:
                    break
            errors = 0
            x = generate_integer(level)
            y = generate_integer(level)
            while True:
                        try:
                                if errors == 3:
                                        print(x, "+", y, "=", x + y)
                                        break
                                z = int(input(f"{x} + {y} = "))
                                if z == x + y:
                                            score = score + 1
                                            break
                                else:
                                        raise ValueError
                        except ValueError:
                                print("EEE")
                                errors = errors + 1
                                pass
    print("score: ",score)

if __name__ == "__main__":
    main()

a = input("Enter the first number: ")
action = input("Choose an action (add/subtract/divide/multiply/expotent): ")
b = input("Enter the second number: ")

if action == "add":
    equals = int(a) + int(b)
elif action == "subtract":
    equals = int(a) - int(b)
elif action == "divide":
    equals = int(a) / int(b)
elif action == "multiply":
    equals = int(a) * int(b)
elif action == "expotent":
    equals = int(a) ** int(b)
elif action is not "add" or "subtract" or "divide" or "multiply" or "expotent":
    print("Incorrect action!")
print("Your output:", equals)

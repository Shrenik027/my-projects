
start = int(input("Enter the start of the range: "))
end = int(input("Enter the end of the range: "))
print("Even numbers in reverse order:")
for i in range(end, start-1, -1):
    if i % 2 == 0:
        print(i, end=" ")

print("\n")  
print("Odd numbers in standard way:")
for i in range(start, end+1):
    if i % 2 != 0:
        print(i, end=" ")

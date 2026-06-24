x=int(input("num1="))
y=int(input("num2="))
z=int(input("num3="))

if(x>y):
    print("greater",x)
elif(x>z):
    print("greater",x)
elif(y>z):
    print("greater",y)
elif(y>x):
    print("greater",y)
else:
    print("greater",z)        

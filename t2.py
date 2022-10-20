t=int(input())
while(t>0):
 x=input()
 x=x.split()
#  print(x)
 a=int(x[0])
 b=int(x[1])
#  print(a,b)
 if(a>b):
     print("NEW PHONE")
 elif(a==b):
     print("ANY")
 else:
     print("REPAIR")
 t-=1
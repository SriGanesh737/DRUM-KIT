def myfunc(arr):
    arr=set(arr)
    return 1 if (len(arr)==5) else 0


t = input()
t = int(t)
while (t):

    n = int(input())
    a=[]
    key=0
    for i in range(0,n):
        a.append(input().split())
    for i in range(n):
        for j in range(i+1,n):
            if(int(a[i][0])+int(a[j][0])>=5):
                l1=a[i][1:len(a[i])]
                l2=a[j][1:len(a[j])]
                l1.extend(l2)
                key=myfunc(l1)
            if(key==1):
                break
        if (key == 1):
            break
    if(key==1):
         print("YES")
    else:
        print("NO")
    t -= 1

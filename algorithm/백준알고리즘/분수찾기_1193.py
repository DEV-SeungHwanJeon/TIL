# <1193. 분수찾기>

x = int(input())

for t in range(1,x+1):
    x -= t
    if x < 0:
        x += t
        break

num_list = []
for i in range(1,t+1):
    num_list += [i/(t+1-i)]

if 
print(t,x)
print(num_list)

# 1/1 1
# 1/2 2
# 2/1 3
# 1/3 4
# 2/2 5
# 3/1 6
# 1/4 7
# 2/3 8
# 3/2 9
# 4/1 10
# 1/5 11
# 2/4 12
# 3/3 13
# 4/2 14
# 5/1 15
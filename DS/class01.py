'''/////////////////////////////////28/04/2020'''

#peak finder
'''
IP = [2,5,3,7,5,1,2,3,4,6,3,7]
OP = []

for i in range(len(IP)):
    if IP[0] < IP[1] and i == 0:
        OP.append(IP[0])
    elif IP[len(IP)-1] > IP[len(IP)-2] and i==len(IP)-1:
        OP.append(IP[len(IP)-1])
    elif IP[i-1] < IP[i] and IP[i-2] < IP[i]:
        OP.append(IP[i])

print(OP)
'''

'''
ip = [2,4,5,7,9,13,15,4,2,1]


def peakfinder(start,end,arr):
    mid = start + (end - start)//2
    if arr[mid] > arr[mid -1] and arr[mid] > arr[mid+1]:
        return arr[mid]
    elif arr[mid] > arr[mid -1] and arr[mid] < arr[mid+1]:
        return peakfinder(mid,end,arr)
    elif arr[mid] < arr[mid -1] and arr[mid] > arr[mid+1]:
        return peakfinder(start,mid,arr)

print(peakfinder(0,len(ip)-1,ip))
'''


#next greatest number generator
'''
ip = [2,4,7,5,9,13,15,4,2,1,3]
op =  4 7 9 9 13 15 -1 -1 3 3 -1
print('->'.join([str(x) for x in ip]))
stack = []

for i in ip:
    if len(stack) == 0:
        stack.append(i)
    else:
        while len(stack) != 0 and stack[len(stack)-1] < i and i != ip[len(ip)-1]:
            print(str(i) + "->",end='')
            stack.pop()
        stack.append(i)
    if i== ip[len(ip)-1]:
        for i in stack:
            if stack[len(stack)-1] < i:
                print("-1->",end="")
            elif stack[len(stack)-1] == i:
                print("-1")
            else:
                print(str(stack[len(stack)-1]) + "->",end='')


# queue using 2 stack
'''
'''
stack1 = [1,2,4,5]
stack2 = []

def enqueue(x):
    if len(stack1) != 0:
        while len(stack1) != 0:
            stack2.append(stack1.pop())
    stack1.append(x)
    while len(stack2) != 0:
        stack1.append(stack2.pop())
    return stack1,stack2

def dequeue():
    if len(stack1) != 0:
        return stack1.pop()

dequeue()
'''
'''
print(stack1)
'''
'''
class queue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
        self.queue = self.stack1
    def enqueue(self,x):
        while len(self.stack1) != 0:
            self.stack2.append(self.stack1.pop())
        self.stack1.append(x)
        while len(self.stack2) != 0:
            self.stack1.append(self.stack2.pop())
        return self.stack1
    def dequeue(self):
        if len(self.stack1) != 0:
            self.stack1.pop()
        return self.stack1

q = queue()

q.enqueue(4)
print(q.queue)
q.enqueue(5)
print(q.queue)
q.enqueue(3)
print(q.queue)
q.dequeue()
print(q.queue)
'''

#sort using stack using recursion
'''
IP = [7,2,3,-1,5,8]
OP = [8,7,5,3,2,-1]
def insert(temp,arr):
    if len(arr) == 0 or temp <= arr[-1]:
        arr.append(temp)
        return arr
    last = arr[-1]
    arr.pop()
    insert(temp,arr)
    arr.append(last)
    return arr

def sort(arr):
    if len(arr) == 0:
        return
    temp = arr[-1]
    arr.pop()
    sort(arr)
    arr = insert(temp,arr)
    return arr
print(sort(IP))
'''
'''
prob1:
     10
    /  \
   5    15
  / \   /  \
 3   6  13 16
  \     /
   11  10
o/p:
 10
 5 15
 3 6 13 16

class node:
    def __init__(self,data):
        self.value = data
        self.right = None
        self.left = None

root = node(10)
root.left = node(5)
root.right = node(15)
root.left.left = node(3)
root.left.right = node(6)
root.right.left = node(13)
root.right.right = node(16)

queue = []
def que(data):
    queue.append(data)
    return queue
def deq():
    if len(queue)==0:
        return
    stack = []
    while len(queue) > 0:
            stack.append(queue.pop())
    stack.pop()
    while len(stack) > 0:
        queue.append(stack.pop())
    return queue

def bfs(root):
    que(root)
    currentNode = root
    counter = 1
    power = 0
    while len(queue) > 0:
        while currentNode == None and len(queue) > 1:
            deq()
            currentNode = queue[0]
        if currentNode == None:
            break
        que(currentNode.left)
        que(currentNode.right)
        if pow(2,power) == counter:
            print(currentNode.value)
            power += 1
            counter = 0
        else:
            print(currentNode.value,end=" ")
        deq()
        currentNode = queue[0]
        counter += 1

# bfs(root)
Prob2:
Find the hight of a tree: number of nodes in longest branch
     10
    /  \
   5    15

  / \   /  \
 3   6  13 16
o/p: 2

def height(root,maxHeight,currentHeight):
    if root == None:
        return currentHeight-1
    heightLeft = height(root.left,maxHeight,currentHeight+1)
    # print(heightLeft,"left",root.value)
    heightRight = height(root.right,maxHeight,currentHeight+1)
    # print(heightRight,"right",root.value)
    if heightRight >= heightLeft and heightRight > maxHeight:
        maxHeight = heightRight
    # elif heightLeft >= heightRight and heightLeft > maxHeight:
        maxHeight = heightLeft
    return maxHeight

print(height(root,1,1))
'''
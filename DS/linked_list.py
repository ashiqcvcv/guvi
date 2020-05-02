# arr to linked list conversion

arr = [8,7,5,3,2,-1]

class node:
    def __init__(self,val):
        self.value = val
        self.next = None

class linked_list:
    def __init__(self):
        self.head = None

    def insertBeginning(self,newNode):
        newNode = node(newNode)
        newNode.next = self.head
        self.head = newNode

    def insertEnd(self,newNode):
        newNode = node(newNode)
        if self.head == None:
            self.head = newNode
        else:
            lastNode = self.head
            while True:
                if lastNode.next is None:
                    lastNode.next = newNode
                    break
                lastNode = lastNode.next

    def insertAt(self,position,newNode):
        if position == 0:
            return self.insertBeginning(newNode)
        newNode = node(newNode)
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentNode == None:
                print("node index out of range")
                break
            if currentPosition == position - 1:
                newNode.next = currentNode.next
                currentNode.next = newNode
                break
            currentPosition += 1
            currentNode = currentNode.next

    def print(self):
        if self.head is None:
            print("list is empty")
        else:
            currentNode = self.head
            while True:
                if currentNode == None:
                    break
                print(currentNode.value)
                currentNode = currentNode.next

    def deleteBeginning(self):
        if self.head == None:
            print("no value present")
            return
        self.head = self.head.next

    def deleteAt(self,position):
        if self.head == None:
            print("list is empty")
            return
        elif position == 0:
            return deleteBeginning()
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentNode == None:
                print("index out of range")
                break
            if currentPosition == position:
                previousNode.next = currentNode.next
                break
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1

    def deleteEnd(self):
        if self.head == 0:
            print("list is empty")
            return
        currentNode = self.head
        currentPosition = 1
        length = self.listLength() - 1
        while True:
            if currentNode == None:
                return
            elif currentPosition == length:
                currentNode.next = None
            currentNode = currentNode.next
            currentPosition += 1

    def listLength(self):
        currentNode = self.head
        length = 0
        while True:
            if currentNode == None:
                return length
            currentNode = currentNode.next
            length += 1

    def midValue(self):
        if self.head == None:
            print("list is empty")
            return
        p1 = self.head
        p2 = self.head.next
        while True:
            if p2 is None:
                return p1.value
            p1 = p1.next
            p2 = p2.next.next

    def reverse(self):
        if self.head == None or self.head.next == None:
            print("array is empty")
            return
    #    v1-v2next v2-v3next v3-v4next
        previousNode = None
        currentNode = self.head
        nextNode = self.head.next
        while currentNode != None:
            currentNode.next = previousNode
            previousNode = currentNode
            currentNode = nextNode
            if currentNode != None:
                nextNode = currentNode.next
        self.head = previousNode



linkedArray = linked_list()
for i in arr:
    linkedArray.insertEnd(i)

linkedArray.print()
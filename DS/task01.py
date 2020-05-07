'''
3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Note:
The solution set must not contain duplicate triplets.
Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
'''
nums = [-1, 0, 1, 2, -1, -4]
stack = []
length = len(nums)
out = []

def isabsent(out,array):
	for element in out:
		numleft = 0
		for j in range(len(array)):
			if element[j] < 0:
				numleft += element[j]
			elif element[j] > 0:
				numleft -= element[j]
			if array[j] < 0:
				numleft -= array[j]
			elif array[j] > 0:
				numleft += array[j]
		if numleft == 0:
			return False
	return True

def summ(current,sumtotal,stack):
	if len(stack) == 3:
		if sumtotal == 0 and isabsent(out,stack):
			out.append(stack.copy())
		return
	if current == length:
		return
	stack.append(nums[current])
	summ(current+1,sumtotal+nums[current],stack)
	stack.pop()
	current += 1
	summ(current,sumtotal,stack)
	return 

start = 0
# summ(0,0,stack)
# print(out)

##################################################################################################################################
'''
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
Example 1:
Input:
[
[1,1,1],
[1,0,1],
[1,1,1]
]
Output:
[
[1,0,1],
[0,0,0],
[1,0,1]
]

'''
matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]


def zerospread(matrix):
	row = []
	column = []
	for i in range(len(matrix)):
		for j in range(len(matrix[i])):
			if matrix[i][j] == 0:
				row.append(i)
				column.append(j)
	for i in row:
		for j in range(len(matrix[i])):
			matrix[i][j] = 0
	for j in column:
		for i in range(len(matrix)):
			matrix[i][j] = 0
	return matrix
# print(zerospread(matrix))

##################################################################################################################################

'''
Group Anagrams
Given an array of strings, group anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
["ate","eat","tea"],
["nat","tan"],
["bat"]
]
'''

def comp(string1,string2):
    if len(string1) == len(string2):
        summ = 0
        for i in range(len(string1)):
            summ += ord(string1[i])
            summ -= ord(string2[i])
        return True if summ == 0 else False

def dequeue(array,index):
    stack = []
    length = len(array) - 1
    while len(array) > 0:
        if length == index:
            array.pop()
            while len(stack) > 0:
                array.append(stack.pop())
            return array
        else:
            stack.append(array.pop())
        length -= 1

def anagramFind(array):
    out = []
    temp = []
    temp.append(array[0])
    dequeue(array,0)
    i = 0
    while len(array) > 0:
        if i == len(array):
            out.append(temp)
            temp = [array[0]]
            dequeue(array,0)
            i = -1
        elif comp(array[i],temp[0]):
            temp.append(array[i])
            dequeue(array,i)
            i -= 1
        i += 1
    out.append(temp)
    return out

def lexo(array):
	i,j = 0,0
	k,l = 1,0 
	while i < len(array)-2:
		if k == len(array):
			i += 1
			k = i+1
		while ord(array[i][j]) == ord(array[k][l]):
			j += 1
			l += 1
		if ord(array[i][j]) > ord(array[k][l]):
			array[i],array[k] = array[k],array[i]
			j = 0
			l = 0
		k += 1
	return array

array = ["eat", "tea", "tan", "ate", "nat", "bat"]
# out = anagramFind(array)
# for i in out:
	# i = lexo(i)
# print(out)

###################################################################################################################################
# Linked List problems
class node:
	def __init__(self,value):
		self.value = value
		self.next = None
'''
Add Two Numbers
You are given two non-empty linked lists representing two non-negative
digits are stored in reverse order and each of their nodes contain a single digit. Add the integers. The
two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0
itself.
Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
'''
list1 = node(2)
list1.next = node(4)
list1.next.next = node(3)
list2 = node(5)
list2.next = node(6)
list2.next.next = node(4)

def addNode(list1,list2):
		temp = 0
		outNode = node(0)
		out = outNode
		while True:
			if list1 == None and list2 == None:
				return out
			elif list1 != None and list2 != None:
				outNode.value = (list1.value+list2.value+temp)%10
				temp = (list1.value+list2.value+temp)//10
			elif list1 != None:
				outNode.value = (list1.value+temp)%10
				temp = (list1.value+temp)//10
			elif list2 != None:
				outNode.value = (list2.value+temp)%10
				temp = (list2.value+temp)//10
			list1 = list1.next
			list2 = list2.next
			if list1 != None or list2 != None:
				outNode.next = node(0)
				outNode = outNode.next

def printNode(head):
	counter = 1
	while True:
		if head == None:
			return
		if counter == 1:
			print(head.value,end="")
		else:
			print(" -> ",head.value,end="")
		head = head.next
		counter += 1


# out = addNode(list1,list2)
# printNode(out)

###################################################################################################################################
'''
Write a program to find the node at which the intersection of two singly linked lists
begins.
'''

sll2 = node(3)
sll2.next = node(2)
sll2.next.next = node(4)
sll1 = node(0)
sll1.next = node(9)
sll1.next.next = node(1)
sll1.next.next.next = sll2.next

def node(head):
	nodes = []
	currentNode = head
	while True:
		if currentNode == None:
			return nodes
		nodes.append(currentNode)
		currentNode = currentNode.next

def intersection(head1,head2):
	nodeList1 = node(head1)
	nodeList2 = node(head2)
	start1 = len(nodeList1)
	start2 = len(nodeList2)
	while start1 > 0 and start2 > 0:
		if nodeList1[start1-1] != nodeList2[start2-1]:
			return nodeList2[start2].value
		start1 -= 1
		start2 -= 1

# print(intersection(sll1,sll2))

###################################################################################################################################
'''
Find Peak Element
A peak element is an element that is greater than its neighbors.
Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its
index.
The array may contain multiple peaks, in that case return the index to any one of the
peaks is fine.
'''

def peakfinder(start,end,arr):
    mid = start + (end - start)//2
    if arr[mid] > arr[mid -1] and arr[mid] > arr[mid+1]:
        return arr[mid]
    elif arr[mid] > arr[mid -1] and arr[mid] < arr[mid+1]:
        return peakfinder(mid,end,arr)
    elif arr[mid] < arr[mid -1] and arr[mid] > arr[mid+1]:
        return peakfinder(start,mid,arr)

nums = [1,2,3,1]
# print(peakfinder(0,len(nums)-1,nums))

###################################################################################################################################

'''
Merge Intervals
Given a collection of intervals, merge all overlapping intervals.
Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
'''
def isinterval(intrvl1,intrvl2):
	if intrvl1[0] <= intrvl2[0] and intrvl2[0] <= intrvl1[1]:
		return True
	elif intrvl1[0] <= intrvl2[1] and intrvl2[1] <= intrvl1[1]:
		return True
	else:
		return False
def merge(intrvl1,intrvl2):
	if intrvl1[0] <= intrvl2[0] and intrvl2[0] <= intrvl1[1]:
		return [intrvl1[0],intrvl2[1]]
	elif intrvl1[0] <= intrvl2[1] and intrvl2[1] <= intrvl1[1]:
		return [intrvl2[0],intrvl1[1]]
def mergeinterval(array):
	out = []
	def remove(index):
		stack = []
		current = len(array)
		while current > index:
			stack.append(array.pop())
			current -= 1
		ret = stack.pop()
		while len(stack) > 0:
			array.append(stack.pop())
		return ret
	temp = 0
	pointer = 0
	while len(array) > 0:
		if temp == 0:
			temp = remove(0)
		if pointer == len(array):
			out.append(temp)
			temp = remove(0)
			pointer = 0
		if len(array) != 0 and isinterval(temp,array[pointer]):
			temp = merge(temp,array[pointer])
			remove(pointer)
		pointer += 1

	if len(array) == 0:
		out.append(temp)
	return out



# ip = [[1,3],[2,6],[8,10],[15,18]]
# print(mergeinterval(ip))
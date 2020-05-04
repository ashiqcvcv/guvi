class node:
	def __init__(self,key):
		self.left = None
		self.right = None
		self.value = key

'''
 	 10 -> root
    /  \
   5    15
  / \   /  \
 3   6  13 16
 '''
 #creating a tree from arr

head = node(10)
head.left = node(5)
head.left.left = node(3)
head.left.right = node(6)
head.right = node(15)
head.right.left = node(13)
head.right.right = node(16)

class tree:
 	def __init__(self,root):
 		self.root = root

 	def bfs(self):
 		if self.root == None:
 			return
 		queue = []
 		def que(data):
 			queue.append(data)
 			return queue
 		def deq():
 			queue.pop(0)
 			return
 		currentNode = self.root
 		que(currentNode)
 		while len(queue) > 0:
 			while currentNode == None and len(queue) > 1:
 				deq()
 				currentNode = queue[0]
 			if currentNode == None:
 				return
 			que(currentNode.left)
 			que(currentNode.right)
 			print(currentNode.value)
 			deq()
 			currentNode = queue[0]

 	def inorder(self):
 		if self.root == None:
 			return
 		currentRoot = self.root
 		def orderIn(currentRoot):
 			if currentRoot != None:
 				orderIn(currentRoot.left)
 				print(currentRoot.value)
 				orderIn(currentRoot.right)
 		orderIn(currentRoot)

 	def preorder(self):
 		if self.root == None:
 			return
 		currentRoot = self.root
 		def orderIn(currentRoot):
 			if currentRoot != None:
 				print(currentRoot.value)
 				orderIn(currentRoot.left)
 				orderIn(currentRoot.right)
 		orderIn(currentRoot)

 	def postorder(self):
 		if self.root == None:
 			return
 		currentRoot = self.root
 		def orderIn(currentRoot):
 			if currentRoot != None:
 				orderIn(currentRoot.left)
 				orderIn(currentRoot.right)
 				print(currentRoot.value)
 		orderIn(currentRoot)

 	def maxHeight(self):
 		def height(root,maxHeight,currentHeight):
 			if root == None:
 				return currentHeight-1
 			heightLeft = height(root.left,maxHeight,currentHeight+1)
 			heightRight = height(root.right,maxHeight,currentHeight+1)
 			if heightRight >= heightLeft and heightRight > maxHeight:
 				maxHeight = heightRight
 			elif heightLeft > heightRight and heightLeft > maxHeight:
 				maxHeight = heightLeft
 			return maxHeight
 		print(height(self.root,1,1))

 	def insertion(self,insertRoot,insertElement,position):
 		root = self.root
 		if root == None:
				root = node(insertRoot)
				if position == 'l':
					root.left = node(insertElement)
				return
 		def recursion(root):
 			if root == None:
 				return
 			if root.value == insertRoot:
 				if position == 'l':
 					root.left = node(insertElement)
 				elif position == 'r':
 					root.right = node(insertElement)
 				return
 			else:
 				recursion(root.left)
 				recursion(root.right)
 			return
 		recursion(root)

 	def deletion(self,deleteRoot):
 		if self.root == None:
 			return
 		currentRoot = self.root
 		def recursion(currentRoot):
 			if currentRoot.left == None or currentRoot.right == None:
 				return
 			if currentRoot.left.value == deleteRoot:
 				currentRoot.left = None
 				return
 			elif currentRoot.right.value == deleteRoot:
 				currentRoot.right = None
 				return
 			recursion(currentRoot.left)
 			recursion(currentRoot.right)
 			return
 		recursion(currentRoot)

complete = tree(head)
complete.insertion(6,1000,'l')
complete.insertion(6,2000,'r')
complete.deletion(13)
complete.bfs()

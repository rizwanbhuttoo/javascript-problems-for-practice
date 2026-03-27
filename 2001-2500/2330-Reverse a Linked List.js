// https://edabit.com/challenge/EthHvCiRXs8uzoGZJ

/*
Reverse a Linked List

A linked list is a special type of data structure where a given item in the list - called a node - has one or two pointers to other nodes in the list. The linked list is either:

Singly-Linked: Each node points to the next node in the list only, but not back to the previous node.
Doubly-Linked: Each node points to both the next node and the previous node.

For example, consider the singly-linked list represented by the array [1, 2, 3, 4]

 1 --> 2--> 3 --> 4

Note that from node 3, for example, you can follow its pointer to node 4, but you cannot travel from node 3 back to node 2!

 ... 2 <-x- 3

Because there is no pointer from node 3 to node 2, 3 is "unaware" of its previous node (node 2).

Reverse a linked list.

To get the Super Mega Awesome Challenge prize (not really), you must also do the following:

Reverse the list in place. For you CS types, that means O(1) auxiliary space. For you non-CS types, imagine that you do not have much extra space to store another "copy" of your linked list.

Use a prototype method added to the included LinkedList class. If you do include a prototype method, note that this will take precedence over any "non-prototype" methods!

Note that not doing these will still pass the challenge: these just earn extra coolness points!

Finally, please note that you MUST return the reversed linked list at the end of the function (however you do it!)

Examples
[1, 2, 3, 4] ➞ [4, 3, 2, 1]

[8, 6, 7, 5, 3, 0, 9] ➞ [9, 0, 3, 5, 7, 6, 8]

["a", "b", "c", "e"] ➞ ["e" ,"c", "b", "a"]
Tips
Your initial linked list will be created with new LinkedList(arr), where arr is a list of items such as [1,2,3,4].
The linked list has three helper methods
insertHead(v): Inserts a new node with value v at the head of the list.
insertTail(v): Inserts a new node with value v at the tail of the list.
print(): Traverses the list (head to tail), pushes each value into an array, returns the array.
It also has two default properties:
head: the current head of the list. Default null.
tail: the default tail of the list. Default null. Note that if the list is exactly one node long, the tail will equal the head!
Generally speaking, if you're doing the reversing in place, you'll need to figure out a way to "reverse" those one-way pointers.
*/

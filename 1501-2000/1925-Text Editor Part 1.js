// https://edabit.com/challenge/DAkbqtDsK7uRzKPrg

/*
Text Editor Part 1

We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.

We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:

An insert operation contains the text to be inserted and the position to insert it at.
A delete operation contains the position to delete from and the length of the text to delete.

Write a function that takes a list of operations, either insert or delete, and returns the combined text.

Examples
[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"

[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"
Notes

Keep in mind that each operation will have data that assumes the previous operations were already processed.
*/

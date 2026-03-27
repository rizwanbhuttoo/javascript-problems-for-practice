// https://edabit.com/challenge/9gtnTRq5iksMCKWRZ

/*
RNA Reverse Complement

Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:

original -> complement
"AAA" -> "UUU"
"UUU" -> "AAA"
"GGG" -> "CCC"
"CCC" -> "GGG"
"GGAACC" -> "CCUUGG"

Your function should find the complement on the right AND also reverse the resulting string.

Examples
reverseComplement("GUGU") ➞ "ACAC"

reverseComplement("UCUCG") ➞ "CGAGA"

reverseComplement("CAGGU") ➞ "ACCUG"
Notes

Assume all input seqeuences are valid.
*/

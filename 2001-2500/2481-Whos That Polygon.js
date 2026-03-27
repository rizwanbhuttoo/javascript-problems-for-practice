// https://edabit.com/challenge/8ezPNZZpLTzCHotmw

/*
Who's That Polygon?

Every polygon has an official name. Individual polygons are named according to the number of sides, combining a Greek-derived numerical prefix with the suffix -gon, e.g. pentagon, dodecagon.

Write a function that takes an integer n as argument and returns the official name of a n-sided polygon.

The following prefixes table is used to construct the name of a polygon.

	Ones		Tens		Hundreds
1	hena-, hen-	10	deca-	100	hecta-
2	di-, do-	20	icosi-, icosa-	200	dohecta-
3	tri-, tria-	30	triaconta-	300	triahecta-
4	tetra-	40	tetraconta-	400	tetrahecta-
5	penta-	50	pentaconta-	500	pentahecta-
6	hexa-	60	hexaconta-	600	hexahecta-
7	hepta-	70	heptaconta-	700	heptahecta-
8	octa-	80	octaconta-	800	octahecta-
9	ennea-	90	enneaconta-	900	enneahecta-

For polygons with 3 through 9 sides, simply add "-gon" to the ones prefixes. For 10 through 99 sides, you return the tens prefix followed by the ones prefix and then by "-gon". For 100 through 999 sides, you start from the hundreds prefix, then add the tens prefix and finally the ones prefix followed by "-gon".

For polygons with more than 999 sides, the following prefixes are used similarly to how "conta-" and "hecta-" are used for tens and hundreds places respectively:

Place	Prefix
10	conta-
100	hecta-
1000	chilia-
10,000	myria-
100,000	decamyria-
200,000	icosamyria-
300,000	triacontamyria-
1,000,000	mega-
1,000,000,000	giga-
1,000,000,000,000	tera-

And finally, the 10¹⁰⁰-gon is called googolgon and the ∞-gon (with a countable infinite number of sides) is called apeirogon.

Examples
polygonName(3) ➞ "triangle"
// exception of: tri-gon

polygonName(4) ➞ "quadrilateral"
// exception of: tetra-gon

polygonName(5) ➞ "pentagon"
// penta-gon

polygonName(7) ➞ "heptagon"
// hepta-gon

polygonName(19) ➞ "enneadecagon"
// ennea-deca-gon

polygonName(36) ➞ "triacontahexagon"
// triaconta-hexa-gon

polygonName(428) ➞ "tetrahectaicosioctagon"
// tetrahecta-icosi-octa-gon

polygonName(12345) ➞ "myriadichiliatriahectatetracontapentagon"
// myria-dichilia-triahecta-tetraconta-penta-gon
Notes
The triangle, quadrilateral and nonagon are exceptions, although the regular forms trigon, tetragon, and enneagon are sometimes encountered as well.
Check Tests to spot other exceptions.
*/

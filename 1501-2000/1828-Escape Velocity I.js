// https://edabit.com/challenge/8JhxAZv9XSuW6QeGo

/*
Escape Velocity I

Escape velocity is the minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body, that is, to achieve an infinite distance from it. Escape velocity is a function of the mass of the body and distance to the center of mass of the body.

Objective

Create a function that takes a planet as an argument and returns its escape velocity expressed in m/s, km/h and km/s.

Data

In the following table you will find for each planet its mass relative to Earth and its radius relative to Earth:

Planet	Mass	Radius
Mercury	0.0558	0.383
Venus	0.815	0.95
Earth	1	1
Mars	0.107	0.532
Jupiter	318	11.2
Saturn	95.1	9.41
Uranus	14.5	4.06
Neptune	17.2	3.88

Consider:

Earth mass = 5.976e24 kg
Earth equatorial radius = 6378 km
Gravitational Constant G = 6.67e-11 N*m²/kg²
Examples
escapeVelocity("Earth") ➞ "The escape velocity in m/s is: 11179.98. The escape velocity in km/h is: 40247.93. The escape velocity in km/s is: 11.18."

escapeVelocity("Venus") ➞ "The escape velocity in m/s is: 10355.19. The escape velocity in km/h is: 37278.68. The escape velocity in km/s is: 10.36."

escapeVelocity("Mars") ➞ "The escape velocity in m/s is: 5013.92. The escape velocity in km/h is: 18050.11. The escape velocity in km/s is: 5.01."
Notes
Round to the nearest hundred the escape velocity in m/s. Using the rounded escape velocity in m/s calculate the escape velocity in km/h and round that number to the nearest hundred. Finally, using the rounded escape velocity in m/s, calculate the escape velocity in km/s and round that number to the nearest hundred.
Pay special attention to units.
See part #2 of this series: Escape Velocity II.
*/

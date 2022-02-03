---
layout: post-slider-toc
title: Von Karman Effect
image: /images/ansys-simulation/vonKarman/vonKarman2.gif
description: The simulation of fluid flow over cylinder was done to visualize the von Karman .
date:  2021-08-18
image_sliders:
  - vonKarman
categories:
  - cfd 
  - simulation
tags:
 - CFD
---

## Visualization of Von Karman Effect

{% include slider.html selector="vonKarman" %}

<div>
<object data="{{ site.url }}{{ site.baseurl }}/images/ansys-simulation/vonKarman/vonKarman.gif" width="100%" height="100%" type="image/gif"></object>
</div>


<img src="/media/cc0-images/grapefruit-slice-332-332.jpg" alt="Grapefruit slice atop a pile of other slices">

## Von-Karman Effect
In fluid dynamics, Von karman effect is a common vortex effect in which there is a repeating pattern of swirling vortices which are caused by the process called vortex shedding. These vortices are responsible for unsteady fluid flow separation around blunt bodies.

## Calculation of the Reynolds Number

$$ Density ~ of~  air (\rho ) = 1.225 ~ kg/m^3 $$ 
$$ \\ Kinematic ~ viscosity ~ of~  air (\mu)  = 1.4607^{-5} ~ m^2/s$$
$$ \\ Characteristic ~ length  = L =Diameter ~ of ~ Cylinder  = 200 ~ mm$$
$$ \\ Reynolds ~ Number  = Re = \frac{\rho \times V \times L}{\mu} \approx 16773 \times v$$

Here, The velocity used in the simulation was $$ 0.156 m/s $$ which results in the Reynolds number $$\approx 2617$$.
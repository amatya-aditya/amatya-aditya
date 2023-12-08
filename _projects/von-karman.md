---
layout: post-slider-toc
title: Von Kármán vortex
image: /images/ansys-simulation/vonKarman/vonKarman2.gif
video: /images/ansys-simulation/vonKarman/vonKarman-2.mp4
description: The fluid flow over cylinder was observed at different Reynolds number ranging from 5 to 3.5e6. The effect of Reynolds number was analyzed to observe the behavior of von karman street over different flow regimes.
date:  2021-08-18
color: red
location: 2n+1
image_sliders:
  - vonKarman
categories:
  - mini-projects
  - cfd 
  - simulation
tags:
 - CFD
 - Simulation

code:
 - 2L1
---

During this project, the fluid flow over cylinder was observed at different Reynolds number ranging from 5 to 3.5e6. The effect of Reynolds number was analysed to observe the behavior of von karman street over different flow regimes.

## Visualization of Von Karman Effect

{% include slider.html selector="vonKarman" %}

<div>
<object data="{{ site.url }}{{ site.baseurl }}/images/ansys-simulation/vonKarman/vonKarman.gif" width="100%" height="100%" type="image/gif"></object>
</div>


## Von-Karman Effect
In fluid dynamics, Von karman effect is a common vortex effect in which there is a repeating pattern of swirling vortices which are caused by the process called vortex shedding. These vortices are responsible for unsteady fluid flow separation around blunt bodies.

## Calculation of the Reynolds Number

$$ Density ~ of~  air (\rho ) = 1.225 ~ kg/m^3 $$ 
$$ \\ Kinematic ~ viscosity ~ of~  air (\mu)  = 1.4607^{-5} ~ m^2/s$$
$$ \\ Characteristic ~ length  = L =Diameter ~ of ~ Cylinder  = 200 ~ mm$$
$$ \\ Reynolds ~ Number  = Re = \frac{\rho \times V \times L}{\mu} \approx 16773 \times v$$

Here, The velocity used in the simulation was $$ 0.156 m/s $$ which results in the Reynolds number $$\approx 2617$$.


<h3> Undergoing Project: Details coming soon</h3>
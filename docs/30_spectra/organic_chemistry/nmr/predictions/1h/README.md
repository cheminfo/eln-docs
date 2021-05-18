---
description: Predict 1D proton NMR spectra
---

# 1H prediction

Draw a chemical structure to predict and click Calculate spectrum to calculate and display the simulated 1H NMR spectra. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away.

The simulated spectrum is shown in the lower module; the upper modules display the chemical structure with hydrogen exploded and the List of signals. These three modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding row in the chemical shift list and the corresponding atoms in the structure, hovering over an atom will highlight the corresponding peak and chemical shift, etc.

You may adjust some parameters of the simulation: Frequency \(400 MHz by default\), ppm interval \(From 0 To 11 ppm by default\) and the Number of points to be calculated \(8000 by default\). You may also superimpose an experimental spectrum from the database over the prediction, or Drop or paste a JCamp to superimpose a locally stored experimental spectrum.

Structure drawing is powered by [JSME](http://peter-ertl.com/jsme/). 1H chemical shifts and coupling constants are predicted using [Spinus](http://www2.chemie.uni-erlangen.de/services/spinus/). Simulation from predicted parameters uses the method described in [DOI:10.1016/j.jmr.2010.12.008](http://www.sciencedirect.com/science/article/pii/S1090780710004003).  



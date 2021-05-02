---
description: Predict 2D COSY NMR spectra
---

# COSY prediction

Draw a chemical structure to predict and click Calculate to calculate and display its COSY. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away.

The simulated COSY and the 1H projection are shown to the right, while the upper-mid module displays the chemical structure with hydrogen exploded. These two modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding corresponding atoms in the structure and hovering over an atom will highlight the corresponding peaks in the spectrum.

You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction.

Structure drawing is powered by [JSME](http://peter-ertl.com/jsme/). 1H chemical shifts and coupling constants are predicted using [Spinus](http://www2.chemie.uni-erlangen.de/services/spinus/). Simulation from predicted parameters uses the method described in [DOI:10.1016/j.jmr.2010.12.008](http://www.sciencedirect.com/science/article/pii/S1090780710004003). COSY correlations are calculated based on atom-to-atom paths in the molecule: a correlation is shown in the COSY whenever two hydrogens are joined by a path traversing no less than Minimal number of bonds and no more than Maximal number of bonds. You may adjust these Simulation parameters in the module right next to the Calculate button.  



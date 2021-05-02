---
description: Predict 1D 13C NMR spectra
---

# 13C prediction

Draw a chemical structure to predict and click Calculate spectrum to calculate and display the simulated 13C NMR spectra. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away.

The simulated spectrum is shown in the lower module; the upper-mid module displays the chemical structure with hydrogen exploded, and the upper right module displays the list of chemical shifts. These three modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding row in the chemical shift list and the corresponding atoms in the structure, hovering over an atom will highlight the corresponding peak and chemical shift, etc.

You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction.

Structure drawing is powered by [JSME](http://peter-ertl.com/jsme/). NMR prediction is done with [NMRshiftDB](http://nmrshiftdb.nmr.uni-koeln.de/).  



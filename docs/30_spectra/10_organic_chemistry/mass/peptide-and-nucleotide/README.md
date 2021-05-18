# Analyze high resolution mass spectra for peptides and nucleotides

## Introduction

This tool allows analyzing complex mass spectra of polynucleotide or protein/peptide that may involve digestion, adducts, residue modification, etc.

Please use a recent version of Google Chrome !!!

## Importing experimental data

This tool can be either used in a LIMS or stand-alone. In the stand-alone mode you should either drag/drop your experimental spectrum as a tab-delimited text file or copy and paste it (CTRL-V) while moving you mouse over the drop zone.

![Paste](images/paste.png)

The list of available spectra will be displayed in the table, and you may click on one of them to display it.

![list spectra](images/list-spectra.png)

## Parameters

### Ionizations

All the results are shown for the neutral molecule, and it is therefore necessary to specify the ionization method. The methods may be entered as a comma separated list of all the allowed ionizations.

You may as well specify multiple charges. Here are some examples of allowed patterns:

- H+ (addition a proton)
- H+, Na+, K+ (either a proton, sodium cation or potassium cation)
- H+, (H+)2, (H+)3 (addition of one, two or three protons)
- (H+)-1, (H+)-2, (H+)-3 (removal of one, two or three protons)

It is also allowed to enter a range

- (H+)1-10 (addition of one to 10 protons)
- (H+)-1--10 (removal of one to 10 protons)

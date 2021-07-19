---
slug: /uuid/fbdbb5810ac56421b0a8509e627060cf
---

# Isotherm analysis
The adhesion of atoms, ions or molecules can be described through adsorption isotherms. If the molecule to be adsorbed (i.e. adsorbate) is a gas, its amount is plotted against its pressure, if it consists of a liquid phase solute, it is plotted as a function of the concentration. In both cases, the process occurs at a constant temperature and it corresponds to a surface phenomenom.

There exist two types of adsorption:
  - Physisorption: characteristic of weak Van der Waals and electrostatic interactions;
  - Chemisorption: characteristic of covalent bonds, meaning it involves a chemical reaction.

[Isotherms] (https://en.wikipedia.org/wiki/Adsorption#Single-molecule_explanation)

This module allows visualizing and processing (single-component) isotherms.

## Upload

Files can be uploaded either by drag-and-drop to the field on the left-hand-side or automatically from the instrument.
The files will appear in field 2. Note that you can only upload files to samples to which you have write access.

We currently support the file types (which are also automatically detected):

- `xls` files produces by Belsorp instruments
- `txt` files produced by IGA instruments
- `txt` files produced by micrometrics instruments
- `csv` files produced by micrometrics instruments

If multiple desorption/adsorption cycles are stored in one file they will also be converted to one `JCAMP` file by our parsers.

If you need support for other file formats, open an issue on the [GitHub repository](https://github.com/cheminfo/isotherm-analysis) or post a question in the [user forum](https://groups.google.com/g/cheminfo).

## Visualization

In the chart you can draw a rectangle to zoom and double click to reset. You can move the graphs by pressing `SHIFT ⇧` while dragging them.

If there are multiple experiments or columns in a file, you can select the ones which are shown using the dropdown selectors on the right.

---
slug: /uuid/b60d4cd22af351b3996cb3321f169a0e
---

# EasyCont Userguide

Mass spectra are often contaminated by chemicals, plasticizers, etc…
This tool allows to check possible contaminants in a MS spectrum based on a list defined in a Google spreadsheet dynamically loaded and that can be modified at any time.
Using the “Custom” tool, the User can even create its’ own Google spreadsheet of compounds to screen for. The mass spectra can be post-calibrated and an offset or shift in Da applied to the spectra.

## Pasting the experimental data

It is required to paste experimental data. The data should be in a tab-delimited format and you should simply copy / paste the data in the "Drop or paste zone".

If the spectrum is loaded correctly it will immediately appear in the central window.

If not the format is not supported !!! Please ensure that it is a tab-delimited file. It should paste correctly in a excel document for example.

## Parameters

Shift: An offset in Da can be applied to the spectra in case of a high mass error and in case post-calibration is required

OPTIONS:

Width top / bottom
The similarity algorithm will consider each peak to be a trapezoid with a defined widthTop and widthBottom (in Dalton). A good value would be:
widthTop: 2 x FWHM
widthBottom: 4 x FWHM

As the top and bottom width values depend on the m/z, the user can manually enter an equation in the “Define with calculation” part.

Using the Auto Width button, the user can automatically pick up the peak width of its experimental mass spectra and use it to process.

Common Zone

FULL: the matching is done on the whole defined zone, and similarity scores are calculated by taking into account the contamination ions in this zone if present (which happens often in complex spectra)

REDUCED : the matching is done on a zone restricted to the theoretical isotopomers (bottom width) and similarity scores are calculated by removing the contamination ions in this zone so higher than using the FULL mode.

Zone

This is the zone that should be considered to evaluate the similarity. This zone is based on the calculated experimental monoisotopic mass for the considered molecular formula. Depending the elements a good value is
low : -0.5
high : 4.5
It is better to use half Dalton in order to prevent any "border" effect
The system takes into account the charge. So for a doubly charged molecule, the range will be divided by 2

Example for a compound containing 3 Ru: the zone should be set to -13.5-7.5

Ionization mode
The user can filter by polarity and ionization type (ESI or MALDI)

PROCESSING

PROCESS: click on process to match your experimental spectra to the EasyCont database of usual contaminants

CUSTOM: click on custom to check the Google spreadsheet used and create your own Google spreadsheet of compounds to screen:
Login to your Google Drive account
Create your google Spreadsheet using the same format as the “contaminants ESI mass impurities” or create a copy of it, rename and modify this copy by entering your own compounds

Share and click on “get shareable link” with anyone can view or with defined users

https://docs.google.com/spreadsheets/d/1w7oHN-lAR_p1oIV7ZKOO_UjlTPYHMu5srV4tH-LMc4g/edit?usp=sharing

Copy the yellow part of the link (see above) in EasyCont, under the column “Google spreadsheet UUID”, label your database, add some references if needed

Select the google spreadsheet to active it, and go back to home page to process your data.

AUTO WIDTH: Use this function for a fine tuning of the peak width parameters: this auto width allows to automatically detect in your experimental spectra all the peak widths and find the correlation (formula) between peak width and m/z. The result is automatically displayed in the “Define with calculation” window, then process your spectra as usual.

APPLY SHIFT: The user can manually define a shift in Da in the shift window and apply it using this button.

AUTO SHIFT: When a first process is done and similarities calculated, all the best matches (similarities > 80%) are taken and the median value of their mass error calculated. This value is displayed in Da in the “shift” window, then PROCESS again to apply this shift and calculate new similarity scores.

RESULTS

The Table “list of possible molecular formula” shows the results with similarities, relative peak height (in % compared to the highest peak) and mass error in ppm.

The user can filter by similarities, mass error or peak height.
For example enter > 0.25 to select only peak > 25% of the highest peak

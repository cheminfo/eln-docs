---
slug: /uuid/3fc7caa33b9b3eb50bb48920f4788725
---

import CustomColumn from "../../includes/custumColumns/README.md";
import Preprocessing from "../../includes/preprocessing/README.md";
import Upload from '../includes/upload/README.md';
import Manipulate from '../includes/manipulate/README.md';
import Auto from '../includes/autopick/README.md';
import Manual from '../includes/peakpick/README.md';
import Visu from '../includes/showhide/README.md';

# Infrared spectra

<iframe
  src="https://player.vimeo.com/video/593679396?h=7f72cb35ee"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>>

## Introduction

[Infrared spectroscopy (IR)](https://en.wikipedia.org/wiki/Infrared_spectroscopy) is a spectroscopic technique dealing with the infrared region of the electromagnetic spectrum (wavelengths between 700 nm and 1 mm). It is widely used to characterize and study chemicals. The IR spectrum can be visualized in a graph of infrared light absorbance or transmittance (%) with respect to the frequency or wavelength given in wavenumber (cm⁻¹). Infrared spectroscopy exploits the fact that molecules absorb specific frequencies of light characteristic of their structure. The absorption occurs at the resonant frequency which corresponds to the vibrational frequency of the molecule, associated to a particular normal mode of motion and bond type.

![spectrum](image_spectrum.gif)

## Analyze

### Upload and visualize spectra

In this view there are different ways to **upload an IR spectrum** in either a [JCAMP](http://jcamp-dx.org/) or a text file format.

<Upload/>

Once the spectrum is uploaded you can visualize it by clicking on its name and **manipulate it**.

<Manipulate/>

:::tip Switch between absorbance and transmittance

When loading an IR spectrum, the application is aware if it was acquired in transmittance or absorbance mode. If you want to switch between the two modes, you may click on the toggle icon shown below.

The application will remember your preferred mode for the next time.

![Switch](switch.png)

:::

:::caution
Don't forget to `Save data` before leaving the page!
:::

### Peak picking

It is possible to **manually peak picking** on an infrared spectrum by holding down the `ALT` key, and then left-clicking on the peaks of interest.

<Manual/>

The application will systematically look for the strongest signal close to the wavelength that has been clicked.

The peak will then be displayed under **IR peaks**.

![pickpeak](pickpeak.png)

Alternatively, the system allows to perform **peak picking automatically** within a certain range and signal-to-noise ratio.

<Auto/>

The signal strength is given automatically. The categorization `S`, `m` and `w` is done automatically based on the highest and lowest selected peak. `S`for strong, `m` for medium and `w`for weak.

In the table below the spectra, you can see the results of the peak picking. You can assign to each peak a name and you can delete unwanted peaks.

All peak wavenumbers and intensities are reported in a compact format ready for publication.

![add peaklist](peaklist.png)

<Preprocessing/>

For instance, centering the mean and dividing by the standard deviation is a common practice in the IR spectra. This can be performed by successively applying the `Center Mean` and the `Divide by SD` filters. Filters are added in the order that we set them.

## Compare

You can compare multiple IR spectra by first opening up an IR spectrum, and then clicking `Compare` on top of the IR spectrum.

After which, under **List of selected entries**, you can choose the other molecule which has the spectrum that you would like to compare. Then choose the IR spectrum you would like to be plotted under **List of IR spectra**. (check animation below)

![add compare](compare.gif)

The spectra will then be both displayed on top of each other. You can also freely **hide selected graphs and change the color** by clicking the color bar.

<Visu/>

<CustomColumn/>

# Mass spectra deconvolution

This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps.

The workflow is the following:

- make a peak picking (centroid) of the mass spectrum
- generate all the theoretical isotopic distribution of all entities to look for
- align the theoretical and experimental peaks
- calculate a non-negative matrix factorization
- create a report

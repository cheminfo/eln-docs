# Create and edit a sample

You will see several modules covering the canvas and a few buttons. The buttons are there to Save your sample, to display this Help, and to generate a Report. The modules allow you to edit your sample’s data, to upload your spectra, and to display your spectra and other non-editable sample attributes.

- Sample code: The sample’s unique identifier, defined at creation \(i.e. CAS number\). Non-editable.

- Creation date: The sample’s creation date. Non-editable.

- Modif. date: The date of the last modification to the sample’s data. Non-editable.

- Description: A brief description of the sample. Editable.

- Structure editor: Edit the structure associated with the sample. Powered by [JSME](http://peter-ertl.com/jsme/). If you are using ChemDraw you may ‘copy as -&gt; molfile’, go over the structure editor and press `CTRL` + V.

- Physical: Read and edit the physical constants associated with the sample: boiling point \(bp\), melting point \(mp\), density and refractive index \(nd\).

- MF and mw: Molecular formula and molecular weight associated with the sample. Editable.

- Attachments: A list of all files attached \(e.g. jcamp files\).

- Drop/Paste your NMR/MS/IR spectra: Drag and drop your spectra data to upload it. Creates a new entry in the NMR/MS/IR table. Only Jcamp format is acceptable for NMR. MS and IR spectra may be uploaded in other file formats such as PDF, but Jcamp is recommended.

- NMR: Displays the list of NMR spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on either the Jcamp or FID column to download the Fourier-transformed or untransformed data respectively. Clicking on a row displays the corresponding spectrum in the Selected spectrum module in the lower right.

- MS: Displays the list of mass spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module in the lower right.

- IR: Displays the list of infrared spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module to the lower right.

- Selected spectrum: Displays the currently selected spectrum. Click, hold, and select an area to zoom on it. Double click to zoom back out. \(By default zoom is active only on the x-axis; to activate zoom on both the x and y-axis, which may be useful when working with 2D spectra, access the module’s advanced configuration by right-clicking on it and choosing Parameters on the dropdown menu\).

:::tip Axial chirality
The editor can also deal with axial chirality. More information can be [found here](includes/binap/README.md).
:::

:::tip Explode peptidic or nucleic sequences
The editor can explode peptidic or nucleic sequences. More information can be [found here](includes/explodeSequences/README.md).
:::

:::tip Coordinate covalent bond
It can be useful to denote to have special bond types between metal and ligands in metal complexes. Our editor can deal with that. More information can be [found here](includes/metal/README.md).
:::

:::tip Groups
Often it is more convenient to denote protective groups with Boc or amino acides with their three-letter code. Our editor understands this. More information can be [found here](includes/mfGroups/README.md).
:::

:::tip Editing the molecular formula (salts, isotopes)
You can also directly edit the molecular formula, for example to indicate salts.
More information can be [found here](includes/mfInfo/README.md). 
This can also be useful to indicate isotopes, which is described [here](includes/mfIsotopes/README.md).
As described [here](includes/mfParenthesis/README.md) you can also use parenthesis in your molecular formula.
:::


:::tip Dealing with modified peptide or nucleotide sequence
You might need to deal with modifications at the terminal positions of your peptides. Our [editor gives you the tools to do so](includes/modifiedSequences/README.md).
:::


:::tip Printing reports and barcodes
It can be handy to print out an overview table of all information about a sample, including a barcode. 
Our [system allows you to do so](includes/printReport/README.md).
:::

:::tip Modifying access rights
You might need to give some colleague access to your sample, for example, to upload a characterization. 
Our [system allows you to do so](includes/rights/README.md).
:::


:::tip Structure history
Our editor remembers the last 20 structures and allows you to start a new molecule drawing from a previous one.
Find more info [here](includes/structureTemplate/README.md).
:::
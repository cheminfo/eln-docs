# GC / LC - MS visualization

This application allows to visualize and integrate GC / LC with or with MS.

## Loading files

Files can be uploaded either as a JCAMP, NetCDF or mzData formats. The files can be drag and dropped or selected clicking in the same drop module. The files are listed in the list below the drop zone and you should click on one of them in order to visualize the chromatogram.

## MF and ionization

You can specify the molecular formula

### Chromatogram visualization

When the desired file is clicked, the corresponding chromatogram is displayed, according to the following options:

- Serie to work with: visualize and do the peak selection using the total ion chromatogram \(tic\) or the base peak chromatogram \(bpc\).

![](https://lh3.googleusercontent.com/m2h7kaCEYniEaGmBWIb27BGSW3svOZGmoIOQnAPQpfJKQ9taBMViYNtyoCepHyeSuS2EKj8XQHqM0oogFTsatyGsQ0Yt1SkQhIusKYJJtXbiD_PChwgiX2U1DZCvYFTxAKbsLOcb)

### Peak picking in the chromatogram

#### Automatic peak picking

The automatic peak picking task is done using some parameters that allows to filter and improve the results. This peak picking is based on the analysis of the first and second derivative of the chromatogram, therefore the beginning of the peak is where there’s an inflection point. The parameters are the following:

![](https://lh4.googleusercontent.com/Qllnx1sIa1jPo_rAWD9gJlsJ5MO5VwNjTvvjJK0ebtQsevhF7fn5ueRe9LFluZjaGYV9LEMsapM2rs3IwOnvtqPKU-6Ux36UQ0yH9-KJ0uV3KL5loG6yZjVPRSV9_wf4esbRu01n)

- Minimal relative height: the minimal ratio between the height of the current peak and the heighest peak..
- Minimum retention time: the minimal retention time for the integration.
- Maximal retention time: the maximal retention time for integration

#### Manual peak picking

All the previous peaks can be modified : First select the corresponding line in the list of peaks and then you should ALT + Click one at the beginning of the peak and once and the end of the peak in the chromatogram. This is also truth for new peaks. This peaks can be created using the button below the peaks table or clicking on the plus icon over the table.

Note: the automatic peak picking is going to replace the current peak selection, therefore is recommended to use it before the manual peak selection

### Theoretical calculation of isotopic distribution

In order to calculate the theoretical masses you need to define the ionization method. Many ionizations may be defined and they should be comma separated. You may also define multiple charges.

![](https://lh6.googleusercontent.com/maqWk3vtxvGSjUVsc_bRowmfoUg0hXoRTN7apqtmt8AljmSkDPnoM8SEkRM8tuAg19_cNoKR0BDYR8D1-uXpeUmdDqIFISkkH70PnhdU4I1uOH51ENzhjEn3cPGdCrvJToNGzNYu)

You may as well define many molecular formula by separating them by a dot.

![](https://lh3.googleusercontent.com/sTvEo8mg8DIf5Bgh38vQ51FrgJ4aefD-NfBN5YmWyqOb8xGq83tihP7z6uEGAEayrjm8TnfMwiI1kdoO2hVpZeqNJ_S6OWUl4qWUWPVEk2s1da800EQYOt6fSzJcR6rDOq0kx7Bz)

All the possible masses are calculated and display as a virtual green spectrum and as a list of masses.

![](https://lh4.googleusercontent.com/R3i42Ayr7NoSP1c3h-NHzjiTuiOdzxMmuzW15a4FvQdprryfbUGE0MPPvwOImvz96wnexEipN2gaQzrzLCnH7I-ALOiKRd2iESA21YIcI6Kj8o9sMrddcMAMAU9s5KYgXU_j8v-N)

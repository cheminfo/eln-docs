# MF supported syntax

* Commas refer to an “OR” choice.
* To refer to MF ranges, use hyphens:
  * Na0-100 → screens out the contribution of zero to 100 atoms of Na
* To refer to Molecular Formula differences, add negative numbers:
  * Na-1 NH4 → calculates the difference in mass between Na and NH4
  * *Be creative!* Use negative atom counts to simulate the presence of altered monomer units, oxidized end-groups, terminated chains, chain transfer reactions, etc…

A few examples of supported MF syntax:
* H-1Cl (to refer to a chlorination reaction where the molecule lost an H to gain a Cl)
* H-2 (loss of 2 hydrogens)
* CH3CH2Cl (you may repeat many times the same element)
* C0-8 H0-8 (you may define ranges of elements)
* RuClH(CO)(PPh3)3 (you can use parenthesis and groups like `Ph`)
* C5(PhBu(EtCHBr)2)3 (you can use as many parentheses as you like)
* CDCl3 (you can use `D` for `[2H]`)
* [13C]Cl4 (isotopes are specified in square brackets)
* C{80,20} (non-natural isotopic abundance can be specified using curly brackets, here 80% <sup>12</sup>C and 20% <sup>13</sup>C)

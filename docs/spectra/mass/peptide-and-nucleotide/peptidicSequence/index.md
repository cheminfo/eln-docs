# Nucleic and peptidic sequence

There are various possibilities to enter a peptidic sequence

## One letter code

`AAAHHHCCCKK`

A sequence may be entered as a one letter code. By default the system will add on the N-terminal side an hydrogen
`H` and on the C-terminal side a `OH`.

N or C terminal modifications should be entered in parenthesis. For example if you have an amide function on
the C-terminal you should enter `AAAHHHCCCKK(NH2)`.

It is also possible to have side chain modifications by adding the modification after the one letter amino acid.

Examples:

- `AAAC(S-1Se)GGG`: the sulfur of a cysteine is replace by a selenium (`S-1`, we remove a sulfur, `Se` we add a selenium)
- `AAA(H-1Cl)GGG`: we replace the hydrogen of an alanine by a chlorine
- `AAAS(PO3H)`: we have a phosphorylated serine

## Three letter code

Sequence may be entered as a 3 letter code. In this case lowercase / uppercase has to be respected and N and C terminal groups must be specified.

Examples:

- `HAlaGlyProOH`
- `MeAla(Se)GlyNH2`
- `(CH3)Ala(Se)GlyNH2`
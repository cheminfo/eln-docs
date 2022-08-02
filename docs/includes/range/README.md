
:::info Range of atoms and groups

<details>
    <summary>
    Possible synthax to use for range specification of atoms and groups.
    </summary>
    <div>

It is possible to specify the range of atoms and groups in a powerful way. 

First, you can specify the range of atoms using the synathax : `<atom letter><minimum>-<maximum>`.

For example, if we know that there are between 0 and 50 carbon atom and between 0 and 100 hydrogen atom, we can type : `C0-50 H0-100`

>
Note that the space represent a `AND` operator.

You can also use group specification with the same synthax than the atom : `<group abbreviation or molecular formula><minimum>-<maximum>`.

For instance, if we know that there are between 0 and 2 (CH2CH2) groups, we can write : `(CH2CH2)0-2`

Moreover, in order to be more intuitive for a chemist, we can also write known abbreviation like `Me`, `Bu`, `Boc`...

The icon on the top of the panel show the list of the possible groups abbreviations. 

You can also specify isotopes, such as `[13C]0-10` for example.


</div>

</details>


:::
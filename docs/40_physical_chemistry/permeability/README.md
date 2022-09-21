---
slug: /uuid/4a102e353b879a3c7d1f8ea01c97fc60
---

import CustomColumn from "../../includes/custumColumns/README.md";
import MultiValGraph from "../../includes/multi_value_graph/README.md";
import Preprocessing from "../../includes/preprocessing/README.md";

# Permeability

## Theoretical background

Permeability is a phenomenon where molecules diffuse through a solid. This phenomenon can be modeled by Fick's law of diffusion.

### Fick's law of diffusion

The flux (or flow of mass) is proportional to the gradient of the concentration. In one dimension, Fick's first law of diffusion if given by,

$$
J = -D \frac{\partial \phi}{\partial x}
$$
Where $J$ is the flux, $D$ is the mass diffusivity, and $\phi$ is the concentration of gas. The above equation can be approximated by the relation

$$
J = -D \frac{(C_2 - C_1)}{\delta}
$$

Where $C$ is the concentration at the edge and $\delta$ is the thickness of the membrane.

## Upload spectrum

You can upload a spectrum either as `JCAMP` or `TXT` format.

## Spectra analysis

In the graph view, it is possible to superimpose multiple y variables, in order to have a more global view of the different variables.

<MultiValGraph/>

You can also apply mathematical processing to the curves via the preprocessing panel.

<Preprocessing/>

<CustomColumn/>

## References 

1. [Permeability](https://en.wikipedia.org/wiki/Permeation)
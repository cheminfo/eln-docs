---
slug: /uuid/10b6a7229db7dd815afcc75e77c2d6cd
---

In infrared spectroscopy, broadband infrared light is typically passed through a sample and the transmitted light is dispersed and its spectral intensity recorded.The absorption lines reveal the excited vibrational transitions.

# IR spectra prediction
## Theoretical background

### Selection rules
From theoretical spectroscopy one can derive that an electronic transition between some initial state $i$ and final state $f$ is allowed if the transition moment is not zero: 

$$
|\mathbf{\mu}_{if}| = \left| \int \psi_{\mu_f}^* \mathbf{\mu} \psi_{\mu_i} \mathrm{d}V \right|
$$

If we assume that the Born-Oppenheimer approximation holds, we can separate the wave functions $\psi$ into an electronic and nuclear part and analyze them separately: 

$$
\psi_\mu(\mathbf{r}) = \psi_e (\mathbf{r}_e, \mathbf{r}_N) \cdot \psi_N (\mathbf{r}_N)
$$

If we focus, for simplicity, on diatomic molecules we can decompose the nuclear motion into an oscillation (harmonic oscillator) and rotation (rigid rotator) part: 

$$
\psi_N(\mathbf{r}_N) = \psi_v(q) \cdot \psi_{J, m_J} (\theta, \phi)
$$
with $q$ being the internuclear distance. 

For vibrational transitions we can analyze only the contributions from the oscillation part, for which the wave function can be written as 

$$
\psi_v(q) = A_v \cdot H_v(\alpha q) \exp\left(-\frac{-(\alpha q)^2}{2}\right)
$$

where the $H_v$ are Hermite polynomials. 

For the vibrational transition, we can now evaluate 

$$
\mathbf{\mu}_{if} = \int \psi^*_{V_f} (q) \mathbf{\mu} \psi_{V_i}(q) \, \mathrm{d}V
$$

For the diatomic case, we can simplify to one dimension by setting $q$ to $x$ and $\mathrm{d}V$ to $\mathrm{d}x$.

The first way this integral can vanish is if $\mathbf{\mu}$ is zero. This would mean we do not "see" this transition --- it is forbidden. 

For small changes, we can approximate $\mathbf{\mu}(x)$ using a first-order Taylor expansion.

### IR spectra

### Calculating forces

### Finite displacements

### Degrees of freedoms and imaginary frequencies

### Differences between theory and experiment 

#### Line width

In real spectra, a range of other effects that we neglect in the simulations need to be considers: 
- Rotational bands: 
- Doppler effect: 
- Lifetime: 

#### Environment effects
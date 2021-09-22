---
slug: /uuid/10b6a7229db7dd815afcc75e77c2d6cd
---

In infrared spectroscopy, broadband infrared light is typically passed through a sample and the transmitted light is dispersed and its spectral intensity recorded.The absorption lines reveal the excited vibrational transitions.

# IR spectra prediction
## Theoretical background

### Selection rules

#### Gross selection rule
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

For small changes, we can approximate $\mathbf{\mu}(x)$ using a Taylor expansion

$$
\mu(x) = \mu_0 + \left(\frac{\mathrm{d}\mu}{\mathrm{d}x} \right)_{x=x_0}x + \dots
$$

If we plug in the first term, we find that the transition dipole moment is zero because the Hermite polynomials $H_v$ are orthogonal (for $v_i \neq v_f$): 

$$
\mathbf{\mu}_{if} = \mu_0 \int_{-\infty}^{\infty} \psi^*_{V_f} (x)  \psi_{V_i}(x) \, \mathrm{d}x = 0
$$

For the remaining terms we can write in general

$$
\mathbf{\mu}_{if} = \frac{1}{n!} \left(\frac{\mathrm{d}^n\mu}{\mathrm{d}x} \right)_{x=x_0}\int_{-\infty}^{\infty} x^n \psi^*_{V_f} (x)  \psi_{V_i}(x) \, \mathrm{d}x = 0
$$

which will be zero if 

$$
\left(\frac{\mathrm{d}^n\mu}{\mathrm{d}x} \right)_{x=x_0} = 0
$$ 

That is, a molecule must have _a dipole moment that changes with displacement to show an IR transition_. 

#### Specific selection rule

If one analyzes 

$$
\mathbf{\mu}_{if} = \frac{1}{n!} \left(\frac{\mathrm{d}^n\mu}{\mathrm{d}x} \right)_{x=x_0}\int_{-\infty}^{\infty} x^n \psi^*_{V_f} (x)  \psi_{V_i}(x) \, \mathrm{d}x = 0
$$

in the harmonic approximation one finds that only transitions between neighboring levels are allowed $\Delta \nu = \pm 1$. 
Real bonds, however, are not perfectly harmonic. For this reason, also higher order transitions might be allowed -- those are called overtones and are of lower intensity.

### IR spectra

### Finite differences
If we assume our vibrations are harmonic, we can do a good job by approximating the potential around some (local) minimum using a Taylor approximation

$$
V=V_{0}+\sum_{i=1}^{3 N}\left(\frac{\partial V}{\partial q_{i}}\right)_{0} q_{i}+\frac{1}{2} \sum_{i=1}^{3 N}\left(\frac{\partial^{2} V}{\partial q_{i} \partial q_{j}}\right)_{0} q_{i} q_{j}+\cdots
$$

From Newton's equations of motion we know 

$$
\ddot{q}_{j}+\sum_{i=1}^{3 N} f_{i j} q_{i} = 0
$$

This is a differential equation (of the harmonic osicallator), which is solved, for example, by 

$$
q_{i}=a_{i} \cos (\sqrt{\lambda} t+\phi)
$$

If we substitute this potential solution back in our differential equation we find an eigenvalue problem 

$$
\sum_{i=1}^{3 N}\left(f_{i j}-\delta_{i j} \lambda\right) a_{i}=0 \quad j=1,2, \cdots, 3 N
$$

What does this mean? The eigenvectors $\mathbf{a}_k$ are the normal modes that describe the motion of the atoms for the mode with eigenvalue $\lambda_k$. It is important to realize that according to $a_{i} \cos (\sqrt{\lambda} t+\phi)$ all atoms move with the same phase and frequency -- but different amplitudes. 

What do we now need to do in practice to get to these eigenvalues and eigenvectors? 

1. We need to find an equilibrium geometry. For this, we perform a conformer search and then perform a geometry optimization. 
2. We need to construct the matrix $\mathbf{F}$ of second derivatives. For this, we use finite differences of the form 

$$
\frac{\partial^{2} E_{e}}{\partial x_{\alpha} \partial y_{\beta}} \approx\left[\left.\left(\frac{\partial E_{e}}{\partial y_{\beta}}\right)\right|_{x_{\alpha}=x_{\alpha 0}+\Delta x_{\alpha}}-\left.\left(\frac{\partial E_{e}}{\partial y_{\beta}}\right)\right|_{x_{\alpha}=x_{\alpha 0}-\Delta x_{\alpha}}\right] / 2 \Delta x_{\alpha}
$$
that is, we displace the atoms and then calculate the difference in forces/energies to numerically estimate the second derivative. 

If we have  this matrix, we can solve the eigenvalue problem and get the normal modes with their frequencies. z




### Degrees of freedoms and imaginary frequencies

### Differences between theory and experiment 

#### Line width

In real spectra, a range of other effects that we neglect in the simulations need to be considers: 
- Rotational bands: 
- Doppler effect: 
- Lifetime: 

#### Environment effects


## References

1. Malte Oppermann: Lecture notes for "Electronic spectroscopy", 2015. 
2. [Porezag, D. & Pederson, M. R. Infrared intensities and Raman-scattering activities within density-functional theory. Phys. Rev. B 54, 7830–7836 (1996).](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.54.7830)
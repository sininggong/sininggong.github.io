---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research develops efficient, structure-preserving numerical methods for partial differential equations, with applications in quantum transport, plasma physics, electromagnetism, and elasticity. I combine numerical analysis with implementation, with particular attention to conservation, stability, and compatibility.

<nav class="research-index" aria-label="Research topics"><a href="#low-rank">Low-rank methods</a><a href="#particle">Particle-in-cell</a><a href="#kernel">Kernel methods</a><a href="#learning">Machine learning</a><a href="#finite-elements">Finite elements</a><a href="#software">Software</a></nav>

<span id="quantum"></span>
<h2 id="low-rank">Low-Rank Methods and the Curse of Dimensionality</h2>

High-dimensional partial differential equations face the curse of dimensionality: the cost of a full-grid representation grows rapidly with the number of dimensions. My work develops low-rank methods that exploit solution structure to reduce storage and computational costs while preserving physical invariants.

The Wigner–Poisson system, which models quantum electron dynamics in phase space, is one application. Resolving three spatial and three velocity dimensions on a full grid requires N⁶ values for N points per coordinate. The nonlocal Wigner potential adds further computational cost.

With Christlieb, Qiu, and Zheng, I developed sampling-based adaptive-rank methods from 1D1V to 3D3V. A hierarchical Tucker representation avoids assembling the full high-dimensional tensor. Symmetry-aware sampling and compression preserve the Fourier–Hermitian structure needed for a real-valued inverse transform, while a global moment correction enforces mass, momentum, and energy conservation. The numerical experiments demonstrate long-time 3D3V simulations in regimes with exploitable low-rank structure. The required ranks depend on the solution and tolerance.

<div class="research-figures">
<figure><a href="{{ '/images/research/wigner-phase-space.png' | relative_url }}"><img src="{{ '/images/research/wigner-phase-space.png' | relative_url }}" alt="Wigner distribution showing quantum phase-space oscillations in a 1D1V two-stream instability at H equals 1 and time 45" loading="lazy"></a><figcaption>1D1V two-stream instability at H = 1 and T = 45.</figcaption></figure>
<figure><a href="{{ '/images/research/adaptive-rank-cost.png' | relative_url }}"><img src="{{ '/images/research/adaptive-rank-cost.png' | relative_url }}" alt="Running time versus mesh size comparing adaptive-rank and full-rank Wigner–Poisson solvers" loading="lazy"></a><figcaption>Adaptive-rank and full-rank running times. The tested adaptive-rank cases show approximately linear growth with mesh size.</figcaption></figure>
</div>

In related work with Padilla-Gomez and collaborators, I study quantum KEEN waves and conservative adaptive-rank formulations. A locally conservative density–momentum solve, Fermi–Dirac-type reconstruction, and global energy correction combine macroscopic conservation with adaptive kinetic representations.

**Related papers and code:**

- [A Sampling-Based Adaptive-Rank Approach to the Wigner–Poisson System](https://doi.org/10.1137/25M1776019), *SIAM Journal on Scientific Computing*, 2026. [Code](https://github.com/sgong11/WignerPoissonAdaptiveRank). Awarded the SIAM Reproducibility Badge for available code and data.
- [A Structure-preserving Adaptive-Rank Approach to the High-Dimensional Wigner–Poisson System](https://arxiv.org/abs/2606.15067), submitted to *SIAM Journal on Scientific Computing*.
- [A Conservative Adaptive Rank Method for the Wigner–Poisson System](https://arxiv.org/abs/2606.20234), submitted to *Journal of Scientific Computing*.
- [Quantum Kinetic Modeling of KEEN Waves in a Warm-Dense Regime](https://doi.org/10.1063/5.0308425), *Physics of Plasmas*, 2026.

<h2 id="particle">Energy-Conserving Particle-in-Cell Methods</h2>

With Christlieb and Chacón, I developed nonrelativistic and relativistic Vlasov–Maxwell particle-in-cell formulations based on electromagnetic potentials and generalized momentum. Consistent particle pushes, current deposition, and field-to-particle interpolation make the particle work agree with the discrete field-energy balance.

The methods retain Gauss's law and the Lorenz gauge and conserve energy to the accuracy of the coupled solve. The relativistic formulation uses an adapted Higuera–Cary pusher. Two-stream and Weibel/filamentation tests examine conservation and field constraints. For the relativistic method, the attainable residuals depend on nonlinear-solver tolerance, orbit quadrature, and roundoff.

<div class="research-figures">
<figure><a href="{{ '/images/research/relativistic-particles.png' | relative_url }}"><img src="{{ '/images/research/relativistic-particles.png' | relative_url }}" alt="Particle phase-space distribution from a relativistic two-stream instability simulation" loading="lazy"></a><figcaption>Relativistic two-stream instability: particle phase space.</figcaption></figure>
<figure><a href="{{ '/images/research/pic-conservation.png' | relative_url }}"><img src="{{ '/images/research/pic-conservation.png' | relative_url }}" alt="Gauss-law, Lorenz-gauge, orbit-chain-rule, and work residuals over time for two time-step sizes" loading="lazy"></a><figcaption>Constraint and work residuals for time steps 0.1 and 0.3.</figcaption></figure>
</div>

<p class="resource-links"><a class="resource-link" href="https://arxiv.org/abs/2606.15035">Part I: Nonrelativistic</a><a class="resource-link" href="https://arxiv.org/abs/2609.36383">Part II: Relativistic</a><a class="resource-link" href="https://github.com/sgong11/Unstaggered_PIC">C++ code</a></p>

Both manuscripts are submitted to *SIAM Journal on Scientific Computing*.

<h2 id="kernel">Kernel-Based Operators and Time Integration</h2>

The method of lines transpose (MOLT) discretizes time first, then uses integral representations to solve the resulting boundary-value problems. With Christlieb and Yang, I derived boundary corrections for first- and second-derivative kernel approximations that prevent order reduction under general boundary conditions. The analysis and numerical experiments address transport, wave, diffusion, and convection–diffusion equations.

<div class="research-figures research-figures--single">
<figure><a href="{{ '/images/research/kernel-rotation.png' | relative_url }}"><img src="{{ '/images/research/kernel-rotation.png' | relative_url }}" alt="Transport benchmark for a kernel-based method with boundary treatment" loading="lazy"></a><figcaption>Kernel-based transport with boundary treatment.</figcaption></figure>
</div>

<p class="resource-links"><a class="resource-link" href="https://doi.org/10.1007/s10915-025-03083-w">Boundary-corrections paper</a><a class="resource-link" href="https://github.com/sgong11/MOLt_boundary">Notebooks</a><a class="resource-link" href="https://app.icerm.brown.edu/assets/516/9435/9435_5405_Gong_072420251030_Slides.pdf">ICERM slides (PDF)</a></p>

With Christlieb, Gottlieb, and Grant, I am also developing a fully implicit two-derivative additive Runge–Kutta method with strong-stability-preserving and asymptotic-preserving properties under stated operator and downwinding assumptions. This manuscript is in preparation.

<h2 id="learning">Mathematically Constrained Machine Learning</h2>

With Christlieb, Huang, Krupansky, and Zhou, I am developing hyperbolic machine-learning moment closures for the Vlasov–Poisson–BGK equations. A neural network predicts characteristic-speed offsets, and a fixed mathematical map converts them into closure coefficients. Distinct real characteristic speeds retain hyperbolicity for positive density and temperature.

<figure class="research-figure-wide"><a href="{{ '/images/research/hyperbolic-closure.png' | relative_url }}"><img src="{{ '/images/research/hyperbolic-closure.png' | relative_url }}" alt="Closure pipeline: local state, fully connected neural network, shifted eigenvalues, fixed polynomial and Hermite transforms, and closure coefficients" loading="lazy"></a><figcaption>Mathematical structure built into a learned kinetic closure. Diagram from my 2026 research statement.</figcaption></figure>

Encouraging separation of characteristic speeds during training improves robustness in the tested 1D1V cases. The manuscript, *Hyperbolic Machine Learning Moment Closures for the Vlasov–Poisson–BGK Equations*, is submitted to *Journal of Scientific Computing*.

Using low-rank and particle solvers to generate training and validation data, and extending constrained learned models to higher dimensions, are future directions.

<h2 id="finite-elements">Compatible Finite Elements and Spline Methods</h2>

My Ph.D. work examined how approximation spaces retain the differential identities of electromagnetism and elasticity. With Boffi, Guzmán, and Neilan, I established convergence of quadratic and higher-order Lagrange elements for the 3D Maxwell eigenvalue problem on Worsey–Farin refinements. Compatible de Rham sequences and Fortin-like operators explain why these nodal elements succeed on the refined meshes.

With Gopalakrishnan, Guzmán, and Neilan, I constructed a 3D discrete elasticity exact sequence with strongly symmetric stresses and no vertex or edge degrees of freedom in the stress space, providing a route to hybridized solvers. Related work proves shape regularity of Worsey–Farin refinements.

<div class="research-figures">
<figure><a href="{{ '/images/WFmesh.png' | relative_url }}"><img src="{{ '/images/WFmesh.png' | relative_url }}" alt="Worsey–Farin refinement of a tetrahedral mesh" loading="lazy"></a><figcaption>Worsey–Farin refinement used in compatible finite element constructions.</figcaption></figure>
<figure><a href="{{ '/images/research/elasticity-elements.png' | relative_url }}"><img src="{{ '/images/research/elasticity-elements.png' | relative_url }}" alt="Degrees of freedom for an elasticity element, with normal-normal, normal-tangential, and face moments" loading="lazy"></a><figcaption>Degrees of freedom in the elasticity construction.</figcaption></figure>
</div>

**Related papers:**

- [Convergence of Lagrange Finite Element Methods for Maxwell Eigenvalue Problem in 3D](https://doi.org/10.1093/imanum/drad053), *IMA Journal of Numerical Analysis*, 2024 (online 2023).
- [Discrete Elasticity Exact Sequences on Worsey–Farin Splits](https://doi.org/10.1051/m2an/2023084), *ESAIM: M2AN*, 2023.
- [A Note on the Shape Regularity of Worsey–Farin Splits](https://doi.org/10.1007/s10915-023-02159-9), *Journal of Scientific Computing*, 2023.

<h2 id="software">Research Software</h2>

- **[WignerPoissonAdaptiveRank](https://github.com/sgong11/WignerPoissonAdaptiveRank):** MATLAB implementations of full-rank and adaptive-rank Wigner–Poisson solvers supporting the published paper.
- **[MOLt_boundary](https://github.com/sgong11/MOLt_boundary):** Jupyter notebooks for general boundary operators in the MOLT framework.
- **[Unstaggered_PIC](https://github.com/sgong11/Unstaggered_PIC):** C++17 reference implementations of energy-conserving generalized-momentum PIC methods.

Figures above are from my research papers and approved application materials. Click a figure to view it at full size.

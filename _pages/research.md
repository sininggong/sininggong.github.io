---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

My research develops structure-preserving and efficient numerical methods for partial differential equations, with applications in kinetic theory, plasma physics, quantum dynamics, electromagnetics, and elasticity. I am particularly interested in numerical schemes that combine rigorous analysis with practical high-performance implementation.

---

## Adaptive-Rank Methods for Wigner–Poisson Systems

<div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap; margin-bottom: 20px;">

  <div style="flex: 1 1 300px; max-width: 48%; text-align: center;">
    <img src="/images/WPTSI.png" alt="Two-stream instability simulation for the Wigner–Poisson system" style="width: 100%; height: auto;">
    <p style="font-size: 0.9em; color: #666;">
      Adaptive-rank simulation for the Wigner–Poisson system.
    </p>
  </div>

  <div style="flex: 1 1 300px; max-width: 48%; text-align: center;">
    <img src="/images/KEEN.png" alt="Quantum kinetic modeling of KEEN waves" style="width: 100%; height: auto;">
    <p style="font-size: 0.9em; color: #666;">
      Quantum kinetic modeling of KEEN waves in a warm-dense regime.
    </p>
  </div>

</div>

The Wigner–Poisson system is a phase-space model for quantum transport and plasma-related applications. Direct simulation is computationally expensive because of the high-dimensional phase space and the nonlocal Wigner potential term.

My recent work develops structure-preserving adaptive-rank methods for Wigner–Poisson systems. The goal is to reduce memory and computational cost while preserving key physical and numerical structures. This direction includes improved full-rank solvers, adaptive-rank ACA–SVD-based methods, conservation corrections, and extensions toward higher-dimensional simulations.

My work on quantum kinetic modeling of KEEN waves includes long-time, full-rank Wigner–Poisson simulations implemented in C++, as well as graduate-student mentoring.

**Related topics:** Wigner–Poisson system, quantum kinetic models, adaptive-rank approximation, low-rank solvers, conservation, high-dimensional phase-space computation.

**Related papers:**

- A. Christlieb, S. Gong, J.-M. Qiu, and N. Zheng. *[A Sampling-Based Adaptive Rank Approach to the Wigner–Poisson System](https://doi.org/10.1137/25M1776019)*. SIAM Journal on Scientific Computing, 48(4), B698–B723, 2026.
- F. A. Padilla-Gomez, S. Gong, M. S. Murillo, F. R. Graziani, and A. J. Christlieb. *[Quantum Kinetic Modeling of KEEN Waves in a Warm-Dense Regime](https://arxiv.org/abs/2510.23690)*. Physics of Plasmas, 33(4), 043902, 2026.
- A. Christlieb, S. Gong, J.-M. Qiu, and N. Zheng. *A Structure-Preserving Adaptive-Rank Approach to the High-Dimensional Wigner–Poisson System*. Submitted.
- A. Christlieb, S. Gong, F. A. Padilla-Gomez, and J.-M. Qiu. *A Conservative Adaptive Rank Method for the Wigner–Poisson System*. Submitted.

---

## Energy-Conserving Particle-in-Cell Methods

In joint work with Andrew J. Christlieb and Luis Chacón, I study an unstaggered, potential-based particle-in-cell method for the nonrelativistic Vlasov–Maxwell system. The formulation preserves the Lorenz gauge and Gauss's law at the discrete level and conserves total energy up to nonlinear solver tolerance and roundoff. The paper demonstrates the method on a three-dimensional cold two-stream instability.

**Related paper:**

- A. Christlieb, L. Chacón, and S. Gong. *[An Energy-Conserving Unstaggered Electromagnetic-Potential Particle-in-Cell Method, Part I: Non-relativistic Generalized-Momentum Formulation](https://arxiv.org/abs/2606.15035)*. Preprint, 2026.

---

## Kernel-Based Methods and MOLT Operators

<div style="text-align: center;">
  <img src="/images/MOLT.png" alt="Kernel-based MOLT operator" style="max-width: 85%; height: auto;">
  <p style="font-size: 0.9em; color: #666;">
    Kernel-based operator framework for differential operators.
  </p>
</div>

Another direction of my work concerns kernel-based methods, especially the method of lines transpose. In contrast to classical method-of-lines approaches, MOLT discretizes time first and then solves the resulting boundary value problems through kernel-based integral representations.

I am interested in developing high-order kernel-based operators for first and second derivatives, especially under general boundary conditions. These operators can be used for transport, wave, heat, Hamilton–Jacobi, and convection–diffusion equations, and they also provide a pathway toward efficient solvers for stiff and multiscale PDEs.

A related goal is to design compatible kernel-based differential operators whose discrete first and second derivatives satisfy appropriate calculus identities. This is motivated by applications in wave equations, plasma models, and structure-preserving particle-in-cell methods.

**Related topics:** MOLT, kernel-based operators, boundary corrections, high-order accuracy, stiff PDEs, compatible discrete calculus.

**Related papers:**

- A. Christlieb, S. Gong, and H. Yang. *Boundary Corrections for Kernel Approximation to Differential Operators*. Journal of Scientific Computing, 2025.


## Finite Element Exterior Calculus and Spline Methods

<div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap; margin-bottom: 20px;">

  <div style="flex: 1 1 300px; max-width: 48%; text-align: center;">
    <img src="/images/WFmesh.png" alt="Finite element exterior calculus and Worsey-Farin splits" style="max-width: 100%; height: auto;">
    <p style="font-size: 0.9em; color: #666;">
      Structure-preserving finite element methods based on FEEC and Worsey–Farin splits.
    </p>
  </div>

  <div style="flex: 1 1 300px; max-width: 48%; text-align: center;">
    <img src="/images/dofig.png" alt="Elasticity element on a Worsey–Farin split" style="max-width: 100%; height: auto;">
    <p style="font-size: 0.9em; color: #666;">
      Elasticity element on a Worsey–Farin split.
    </p>
  </div>

</div>

My Ph.D. research focused on structure-preserving finite element methods using finite element exterior calculus and spline theory. I studied Lagrange finite elements for Maxwell eigenvalue problems on Worsey–Farin splits and developed discrete elasticity exact sequences in three dimensions.

This work connects spline complexes, discrete de Rham sequences, bounded commuting projections, and mixed finite element methods for electromagnetism and elasticity. A continuing interest is to extend these ideas to more complex physical systems, including magnetohydrodynamics and plasma models.

**Related topics:** finite element exterior calculus, spline theory, Worsey–Farin splits, Maxwell eigenvalue problems, elasticity complexes, mixed finite elements.

**Related papers:**

- D. Boffi, S. Gong, J. Guzmán, and M. Neilan. *Convergence of Lagrange finite element methods for Maxwell eigenvalue problem in 3D*. IMA Journal of Numerical Analysis, 2024.
- S. Gong, J. Gopalakrishnan, J. Guzmán, and M. Neilan. *Discrete elasticity exact sequences on Worsey–Farin splits*. ESAIM: Mathematical Modelling and Numerical Analysis, 2023.
- S. Gong, J. Guzmán, and M. Neilan. *A Note on the Shape Regularity of Worsey–Farin Splits*. Journal of Scientific Computing, 2023.

---

## Future Directions

Going forward, I am interested in developing scalable, structure-preserving solvers for multiscale physical models by combining numerical analysis, high-performance computing, adaptive-rank methods, kernel-based operators, and machine-learning techniques.

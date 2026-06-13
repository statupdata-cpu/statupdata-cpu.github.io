// ══ Unit U9 — Stochastic Processes ══
// Add more questions below. Keep unit:'u9' in each question.
// Format: {unit:'u9',q:'...',opts:['A) ...','B) ...','C) ...','D) ...'],ans:0,exp:'...'},

MASTER_QB.push(

  // ════════════ UNIT IX: Stochastic Processes ════════════
  {unit:'u9',q:'Markov property: future depends on:',opts:['A) All past states','B) Only current state','C) Initial state only','D) Last two states'],ans:1,exp:'Markov: P(Xₙ₊₁|X₀,...,Xₙ)=P(Xₙ₊₁|Xₙ).'},
  {unit:'u9',q:'Poisson process P(N(t)=k)=',opts:['A) e^{-λ}(λt)^k/k!','B) e^{-λt}(λt)^k/k!','C) λ^k/k!','D) e^{-λt}λ^k'],ans:1,exp:'Poisson: P(N(t)=k)=e^{-λt}(λt)^k/k!'},
  {unit:'u9',q:'Stationary distribution π satisfies:',opts:['A) πᵢ=Σⱼπⱼpⱼᵢ','B) πP=π','C) Σᵢπᵢ=1','D) All of the above'],ans:3,exp:'Stationary: π=πP with Σπᵢ=1. All conditions hold.'},
  {unit:'u9',q:'State i is recurrent if:',opts:['A) P(return)<1','B) P(return)=1','C) It is absorbing','D) Communicates with all states'],ans:1,exp:'Recurrent: chain returns to i with probability 1.'},
  {unit:'u9',q:'Inter-arrival times in Poisson process are:',opts:['A) Normal','B) Uniform','C) Exponential','D) Gamma'],ans:2,exp:'In Poisson(λ), inter-arrival times are i.i.d. Exponential(λ).'},
  {unit:'u9',q:'Ergodic Markov chain is:',opts:['A) Reducible and periodic','B) Irreducible and aperiodic','C) Transient','D) Absorbing'],ans:1,exp:'Ergodic: irreducible+aperiodic → unique stationary distribution.'},
  {unit:'u9',q:'Chapman-Kolmogorov equation:',opts:['A) p(n+m)=p(n)×p(m)','B) pᵢⱼ^(n+m)=Σₖpᵢₖ^(n)pₖⱼ^(m)','C) π=πP','D) Rates sum to zero'],ans:1,exp:'C-K: pᵢⱼ^(n+m)=Σₖpᵢₖ^(n)pₖⱼ^(m).'},
  {unit:'u9',q:'Brownian motion increment B(t)-B(s) follows:',opts:['A) N(0,t-s)','B) N(t-s,1)','C) N(0,t)','D) Uniform(0,t)'],ans:0,exp:'B(t)-B(s)~N(0,t-s) for t>s. Independent increments.'},
  {unit:'u9',q:'Absorbing state has transition probability:',opts:['A) pᵢᵢ=0','B) pᵢᵢ=1','C) pᵢⱼ=1 for all j','D) Returns each visit'],ans:1,exp:'Absorbing: pᵢᵢ=1 once entered, stays forever.'},
  {unit:'u9',q:'Birth-death process transitions only to:',opts:['A) Any state','B) Adjacent states n±1','C) State n+1 only','D) States 0 and ∞'],ans:1,exp:'Birth-death: from n can go to n+1 (birth) or n-1 (death).'},
  // ── ADD MORE UNIT IX QUESTIONS HERE (keep unit:'u9') ─────────────
);

// ══ Unit U8 — Multivariate Analysis ══
// Add more questions below. Keep unit:'u8' in each question.
// Format: {unit:'u8',q:'...',opts:['A) ...','B) ...','C) ...','D) ...'],ans:0,exp:'...'},

MASTER_QB.push(

  // ════════════ UNIT VIII: Multivariate Analysis ════════════
  {unit:'u8',q:'Hotelling T² is multivariate analogue of:',opts:['A) F-test','B) Chi-square','C) t-test','D) Z-test'],ans:2,exp:'Hotelling T² extends univariate t² to multivariate setting.'},
  {unit:'u8',q:'PCA finds directions of:',opts:['A) Minimum variance','B) Maximum variance','C) Zero correlation','D) Maximum likelihood'],ans:1,exp:'PCA: orthogonal directions of maximum variance.'},
  {unit:'u8',q:'Wilks Lambda in MANOVA is:',opts:['A) |W|/|B+W|','B) |B|/|W|','C) |B+W|/|W|','D) tr(W⁻¹B)'],ans:0,exp:'Wilks Λ=|W|/|B+W| ratio of within to total SS determinants.'},
  {unit:'u8',q:'Mahalanobis distance D² accounts for:',opts:['A) Euclidean distance only','B) Correlations and variance differences','C) Sample size','D) Mean difference only'],ans:1,exp:'D²=(x-μ)ᵀΣ⁻¹(x-μ) accounts for correlations and scale.'},
  {unit:'u8',q:'Factor analysis explains p variables using:',opts:['A) p factors','B) m<p common factors','C) Principal components','D) Canonical variables'],ans:1,exp:'Factor analysis: p variables explained by m<p common factors.'},
  {unit:'u8',q:'K-means assigns each point to:',opts:['A) Farthest centroid','B) Nearest centroid','C) Random cluster','D) Min Mahalanobis centroid'],ans:1,exp:'K-means: min Euclidean distance to centroid.'},
  {unit:'u8',q:'LDA objective: maximize:',opts:['A) Within-group variance','B) Between-to-within variance ratio','C) Total variance','D) Correlation'],ans:1,exp:'LDA: maximize J=between-group SS/within-group SS.'},
  {unit:'u8',q:'Sample covariance matrix S follows:',opts:['A) Normal distribution','B) Wishart distribution','C) t-distribution','D) F-distribution'],ans:1,exp:'(n-1)S~W_p(n-1,Σ) — Wishart distribution.'},
  {unit:'u8',q:'Canonical correlation studies:',opts:['A) Two individual variables','B) Two sets of variables','C) One variable and a factor','D) Principal components'],ans:1,exp:'Canonical correlation: max correlation between linear combinations of two variable sets.'},
  {unit:'u8',q:'Kaiser criterion in PCA: retain components with eigenvalue:',opts:['A) <0','B) >1','C) =1','D) >mean eigenvalue'],ans:1,exp:'Kaiser: retain PCs with eigenvalue>1.'},
  // ── ADD MORE UNIT VIII QUESTIONS HERE (keep unit:'u8') ───────────
);

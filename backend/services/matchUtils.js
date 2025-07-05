function calculateScore(userInput, weights, neighborhood) {
  let score = 0;
  let totalWeight = 0;

  for (const key in weights) {
    const weight = weights[key];
    const userValue = userInput[key];
    const dataValue = neighborhood[key];

    if (typeof userValue !== 'number' || typeof dataValue !== 'number' || typeof weight !== 'number') {
      continue;
    }

    const diff = Math.abs(userValue - dataValue);
    score += (1 - diff / 5) * weight;
    totalWeight += weight;
  }

  return totalWeight > 0 ? score / totalWeight * 5 : 0; 
}

module.exports = { calculateScore };

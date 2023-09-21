function findMaxProfit(prices) {
    // Step 1: Initialize variables
    let minPrice = prices[0];
    let maxProfit = 0;
  
    // Step 2: Loop through the array
    for (let i = 1; i < prices.length; i++) {
      // Step 3: Update minPrice
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      // Step 4: Update maxProfit
      else {
        const profit = prices[i] - minPrice;
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  
    // Step 5: Return maxProfit or -1
    return maxProfit > 0 ? maxProfit : -1;
  }

  const prices = [7, 1, 5, 3, 6, 4];
const maxProfit = findMaxProfit(prices);
console.log(maxProfit); // 5
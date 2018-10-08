/**
 * @param {number[]} prices
 * @return {number}
 */

/** method 1
O(n)
O(1)
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    
    let buy = prices[0];
    let sale = 0
    let profit = 0
    
    for (let i=1; i<prices.length;i++){
        sale = prices[i]
        if (sale - buy > profit){
            profit = sale - buy
        }
        if(sale - buy < 0){
            buy = sale
        }
    }
    return profit    
};

/**
Method 2
O(n)
O(1)
 */
var maxProfit = function(prices) {
    
    let buy = Number.MAX_VALUE
    let profit = 0
    let sale = 0
    
    for (let i = 0; i < prices.length; i++){
        sale = prices[i]
        if (buy > sale) buy = sale
        if (sale - buy > profit) profit = sale - buy
    }
    return profit    
};
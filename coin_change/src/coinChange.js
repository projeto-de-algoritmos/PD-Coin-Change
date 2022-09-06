const coinChange = (coins, amount) => {
    // dp[i] represents the least amount of coins that can make the value equals to the i
    
    var dp = Array(amount + 1).fill(0);
    var from = Array(amount + 1)

    dp[0] = 1;
    for (let i = 0; i < amount; i++) {
        if (dp[i] > 0){
            for (let j = 0; j < coins.length; j++) {
                var aux = i + coins[j];
                if (aux <= amount && (dp[aux] == 0 || dp[aux] > dp[i] + 1)) {
                    dp[aux] = dp[i] + 1;
                    from[aux] = j;
                }
            }
        }
    }
    
    if (dp[amount] === 0) {
        return [-1]
    }

    var result = Array(dp[amount] - 1);
    var k = amount;

    while (k > 0){
        result[dp[k] - 2] = coins[from[k]];
        k = k - coins[from[k]];
    }

    return result
};
  
export default coinChange;

/*

Example greed:

Coins = [1, 3, 4, 20, 50]
Amount = 6

Pseudocode:

for coin in coins[::-1]:

  number_of_coins = amount // coin
  amount = amount % coin

return number_of_coins

Result = 3, Coins = [4, 1, 1]

Example DP:

dp = [0, 0, 0, 0, 0, 0, 0]

i = 0

j = 0
coin = 1
aux = coin + i = 1
dp = [0, 1, 0, 0, 0, 0, 0]

j = 1
coin = 3
aux = coin + i = 3
dp = [0, 1, 0, 1, 0, 0, 0]

j = 2
coin = 4
aux = coin + i = 4
dp = [0, 1, 0, 1, 1, 0, 0]

i = 1

j = 0
coin = 1
aux = coin + i = 2
dp = [0, 1, 2, 1, 1, 0, 0]
*/
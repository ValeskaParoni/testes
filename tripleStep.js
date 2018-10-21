let countHowManyWays = function(n){
    if (n<0) return 0;
    if (n==0) return 1;
    return countHowManyWays(n-1) + countHowManyWays(n-2) + countHowManyWays(n-3);
}

console.log(countHowManyWays(4));

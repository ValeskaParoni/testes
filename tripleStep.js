let countHowManyWays = function(n){
    if (n==1) return 3;
    else return 3*countHowManyWays(n-1);
}

console.log(countHowManyWays(4));

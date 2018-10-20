//palindrome permutation
let isPalindromePermutation = function(string){
    let aloneLetters = {};
    let count = 0;
    for (let index in string) {
        let letter = string[index];
        if (aloneLetters[letter]!=1){
            aloneLetters[letter] = 1;
            count++;
        }
        else {
            aloneLetters[letter] = 0;
            count--;
        }
    }
    if (count>1) return false;
    return true;
}

/* tests
console.log(isPalindromePermutation('teste'));
console.log(isPalindromePermutation('aaaaba'));
console.log(isPalindromePermutation('testq'));
console.log(isPalindromePermutation('ttsqq'));
*/
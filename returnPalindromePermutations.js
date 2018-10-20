//palindrome permutation - return palindromes
let allPossibleCombinations = function(prefix, string){
  if (string.length<=1) return [prefix + string];
  else {
    let combinations = [];
    for (let letter of string){
      let newString = string.replace(letter, '');
      let newPrefix = prefix + letter;
      combinations.push(allPossibleCombinations(newPrefix, newString));
    }
    return combinations;
  }
}

let returnPalindromePermutations = function(string){
    let aloneLetters = '';
    let doubledLetters = '';
    for (let index in string) {
        let letter = string[index];
        console.log('viewing letter ', letter);
        console.log('alone letters are ', aloneLetters);
        console.log('doubled letter are ', doubledLetters);
        if (aloneLetters.indexOf(letter)==-1){
            aloneLetters += letter;
            console.log('alone letter added up');
            console.log('alone letters became ', aloneLetters);
        }
        else {
            aloneLetters = aloneLetters.replace(letter, '');
            doubledLetters += letter;
            console.log('double letter added up');
            console.log('alone letters became ', aloneLetters);
            console.log('doubled letters became ', doubledLetters);
        }
    }
    if (aloneLetters.length > 1) return [];
    console.log('finish: doubled letters are ', doubledLetters);
    console.log('and alone letters are ', aloneLetters);
    return allPossibleCombinations('', doubledLetters);
}

console.log(returnPalindromePermutations('tewrswriite'));
/*console.log(isPalindromePermutation('aaaaba'));
console.log(isPalindromePermutation('testq'));
console.log(isPalindromePermutation('ttsqq'));
*/

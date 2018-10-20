//palindrome permutation - return palindromes
let allPossibleCombinations = function(prefix, string){
  if (string.length<=1) return [prefix + string];
  else {
    let combinations = [];
    for (let letter of string){
      let newString = string.replace(letter, '');
      let newPrefix = prefix + letter;
      combinations = combinations.concat(allPossibleCombinations(newPrefix, newString));
    }
    return combinations;
  }
}

let reverseString = function(string){
    let length = string.lentgh;
    for (let i; i < length/2; i++){
        let aux = string[i];
        string[i] = string[length-i-1];
        string[length-i-1] = aux;
    }
    return string;
}

let returnPalindromePermutations = function(string){
    let aloneLetters = '';
    let doubledLetters = '';
    for (let index in string) {
        let letter = string[index];
        if (aloneLetters.indexOf(letter)==-1){
            aloneLetters += letter;
        }
        else {
            aloneLetters = aloneLetters.replace(letter, '');
            doubledLetters += letter;
        }
    }
    if (aloneLetters.length > 1) return [];
    let combinations = allPossibleCombinations('', doubledLetters);
    let palindromos = [];
    for (let combination of combinations) {
        let palindromo = combination + aloneLetters + reverseString(combination);
        palindromos.push(palindromo);
    }
    return palindromos;
}

/*
console.log(returnPalindromePermutations('tewrswriite'));
*/

let isPermutation = function(string1, string2){
    let auxString1 = string1;
    let auxString2 = string2;
    if (string1.length == string2.length){
        for (let i in string1){
            auxString1 = auxString1.replace(string2[i], '');
            auxString2 = auxString2.replace(string1[i], '');
        }
        if (auxString1 == auxString2 && auxString1 == '') return true;
    }
    return false;
}

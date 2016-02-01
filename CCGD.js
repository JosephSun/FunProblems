function helperSort(x, y) {
    return x - y;
}

function sortIntersect(f, m) {
    var commonAges = [];
    var agesForFemales = {};
    var agesForMales = {};
    for (var i = 0; i < f.length; i++) {
        if (typeof agesForFemales[f[i]] === 'number') {
            agesForFemales[f[i]] = agesForFemales[f[i]] + 1; 
        }else {
            agesForFemales[f[i]] = 1; 
        }
    }
    for (var j = 0; j < m.length; j++) {
        if (typeof agesForMales[m[j]] === 'number') {
            agesForMales[m[j]] = agesForMales[m[j]] + 1; 
        }else {
            agesForMales[m[j]] = 1; 
        }
    }
    for (var property in agesForFemales) {
        for (var l = 1; (l <= agesForFemales[property]) && (l <=agesForMales[property]); l++ ) {
            commonAges.push(parseInt(property));
        }
    }
    return commonAges.sort(helperSort).reverse();
}


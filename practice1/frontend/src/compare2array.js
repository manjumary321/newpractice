
    
        var array1 = [4,8,6,10];
var array2 = [4,8,6,10];

var is_same = array1.length === array2.length && array1.every(function(element, index) {
    return element === array2[index]; 
});

console.log(is_same);

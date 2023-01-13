
const a = 2;
const b = 4;
function testNum(a, b) {
    let result;
    if (a != 0) {
        result = 'a';
    }
    else
        // {
        //     result = 'not a';
        // }
        if (b != 0) {
            result = 'b';
        }
        else
            // {
            //     result = 'not b';
            // }
            if (a != 0 && b != 0) {
                result = 'a&b';
            } else {
                result = 'not a & b';
            }
    return result;
}

console.log(testNum(a, b));

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
const squareArr = arr.map(el => el*el); 
return squareArr;
}
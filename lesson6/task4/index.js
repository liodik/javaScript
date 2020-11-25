function swap(array) {
    let [first, ...rest] =array;
    return [...rest, first];
}
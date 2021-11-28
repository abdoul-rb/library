/** if two string is twin */
function isTwin(first, second) {
    return first.toLowerCase().split('').sort().join('') === second.toLowerCase().split('').sort().join('');
}

console.log(isTwin('Romain', 'Marion'));
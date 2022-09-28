const anagrams = (str, mirror) => {
  // use function per string and compare them
  return cleanString(str) === cleanString(mirror);
}

/**
 * Helper function to clean up string
 * @param {String} str 
 * @returns 
 */
function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

/** if two string is twin - almost same like anagram */
const isTwin = (first, second) => {
    return first.toLowerCase().split('').sort().join('') === second.toLowerCase().split('').sort().join('');
}

console.log(isTwin('Romain', 'Marion'));
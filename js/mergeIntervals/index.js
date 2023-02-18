function mergeOverlappingIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
  
    // Tri des intervalles en fonction de leur début
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [];
    let currentInterval = intervals[0];
    mergedIntervals.push(currentInterval);
  
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
      const [_, currentIntervalEnd] = currentInterval;
      const [nextIntervalStart, nextIntervalEnd] = nextInterval;
  
      if (currentIntervalEnd >= nextIntervalStart) {
        currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
      } else {
        currentInterval = nextInterval;
        mergedIntervals.push(currentInterval);
      }
    }
  
    return mergedIntervals;
}


// Exemple d'utilisation
const intervals = [[1,3], [2,4], [5,7], [6,8]];
const mergedIntervals = mergeOverlappingIntervals(intervals);
console.log(mergedIntervals); // [[1, 4], [5, 8]]
describe(‘Split Array function’, function() {
  it(‘is able to split an array into two halves’, function() {
    // your code here
    expect(split([9,8,7,6,5])).toEqual([[9,8],[7,6,5]])
  });
 });
 
 describe(‘Merge function’, function(){
  it(‘is able to merge two sorted arrays into one sorted array’, function(){
    // test the merging algorithm
    expect(merge([1,2,3],[3,5,7])).toEqual([1,2,3,3,5,7]);
  });
 });
 
 describe(‘Merge sort function’, function() {
  it(‘is able to mergesort a 1-element array’, function() {
    expect(mergeSort([9])).toEqual([9]);
  });
  it(‘is able to mergesort two sorted arrays into one sorted array’, function() {
    expect(mergeSort([9,8,7,6,5,4])).toEqual([4,5,6,7,8,9]);
  });
 });
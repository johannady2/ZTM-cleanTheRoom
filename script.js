//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove)
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//https://www.youtube.com/watch?v=MWD-iKzR2c8&list=PLUp2SeJP6HNB4UmTFyAbvmiVmfi0tpWlH&index=6

let originalArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let arrayOfObjects =
[
    {x:2,y:10},
    {x:5,y:6}
]

function organizeArray(arr)
{
    return arr.sort();//also sorts alphabetically. sorts numbers first, then capital letters first, then lower case letters
}

let organizedArray = organizeArray(originalArray);

function compare(a,b)
{
    return a.y-b.y;//y is a parameter of objects in arrayOfObjects (smallest to highest)
    //return b.y-a.y;//
}

console.log(organizedArray);//(hightest to smallest)
console.log(originalArray);//NOTE original array is also changed because sort() is a destructive function.

arrayOfObjects.sort(compare);
console.log(arrayOfObjects);
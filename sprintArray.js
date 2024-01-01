/**Write a function called indexOf that takes two parameters, an array, and an element, and returns the index of the array where the element is located.
 */
function indexOf (array,element)
{
    return array.indexOf(element)
}
indexOf(['cat', 'dog', 'fox'], 'fox')
/** Write a function called addElement that takes three parameters, an array, an index and an element, and returns an array with that element added in the place of that index but nothing in the array is removed. NOTE: Please use this exercise to practice .splice() */
function addElement (array,index,element) {
    array.splice(index,0,element)
    return array
}
removeElement( ['cat', 'monkey', 'dog', 'fox'], 2)
/**4. Write a function called concatArrays that takes two parameters, two arrays, and returns a new array that combines all elements of the two parameters */
function concatArrays(array1,array2) {
    return array1.concat(array2)
     
}
/**5. Write a function called concatThreeArrays that takes three parameters, three arrays, and returns a new array that combines all elements of the two parameters */
function concatArrays(array1,array2,array3) {
    return array1.concat(array2,array3)
     
}
/**6. Write a function called joinStrings that takes two parameters,
 *  an array of strings and one string, and returns a new string that combines all of the strings from the array 
 * separated by the string parameter. NOTE: Use .join() */
function joinStrings (array,string) {
    return array.join(string) 
}
joinStrings( ['cat', 'monkey', 'dog', 'fox'], '-')
/**7.Write a function called applySplit that takes two parameters, a string to be split and a splitter (which is also a string),
 *  and returns an array that is the result of splitting the string on the splitter. NOTE: Use .split() */
function applySplit (string, spliter) {
    return string.split(spliter)
}
/** 8. Write a function called getElementsAfter that takes two parameters, 
 * an array and index, and returns an array with all the elements after the index but does not include the element at the given index.*/
function getElementsAfter (array,index) {
    return array.slice(index+1)

}
getElementsAfter( ['camel','cat','kitty'], 0)
/**9. Write a function called getElementsBefore that takes two parameters, an array and index, and returns an array with all the elements before the index but does not include the element at the given index.
 */





/**10. Write a function called getAllElementsButFirst that takes an array as parameter and returns an array with all the elements except the first element. */
function getAllElementsButFirst(array) {
    array.shift()
    return array
    
}
getAllElementsButFirst(['cat', 'monkey', 'dog', 'fox'])
/**11. Write a function called getAllElementsButLast that takes an array as a parameter and returns an array with all the elements but the last element.
 */
function getAllElementsButLast(array) {
    array.pop()
    return array
}
getAllElementsButLast(['cat', 'monkey', 'dog', 'fox'])
/**12. Write a function that reverses the elements in an array without using the reverse() method. */
function reverseArray(array) {
    var array2=[]
    for (var i=array.length-1;i>=0;i--)
        {
            array2.push(array[i])
        }
    return array2
    
}
/** 13. Write a function that takes an array of words and returns a new array with the length of each word.*/
function wordLengths(array) {
    var array2=[]
    var x= ''
    for (var i=0;i<array.length;i++)
        {
            x=array[i]
            array2.push(x.length)
        }
    return array2
 
}
/**15. Write a function that flattens a nested array and returns a new array with all the elements at the top-level.

 */
function flattenArray(array) {
    return array.flat(Infinity)
    }nestedArray = [1, [2, 3], [4, [5, 6]]];
    flattenArray(nestedArray)

    /**  Write a function that removes duplicate elements from an array and returns a new array with only the unique elements.*/
    function removeDuplicates(array) {
        for(var i=0;i<=array.length-2;i++)
            {
                var j=array.length-1
              while((j!=i)&&(j>0))
                {
                    if (array[i]===array[j])
                    {
                        console.log(array[j])
                        array.splice(j,1)
                    }
                    j--
                }
            }
    return array    
    }
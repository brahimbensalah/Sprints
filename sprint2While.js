/**   
 * 1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.      
 */
function sumEven (a,b) {
    var counter = a
    var sum = 0
    while (counter < b )
    {
        if ((counter % 2 ) === 0)
        {
            sum+=counter
            counter++
        }
        counter++

    }
    return sum
    
}
/***2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it. */
function primeCounter (number) {
    var counter = 1
    var sum = 0
    while (counter < number )
    {
        if ((counter % 2 ) === 0)
        {
            sum ++
            counter++
        }
        counter++

    }
    return sum
    
}
//1 for
function iterateAndLog(n){
    for(i=0;i<n;i++)
    {
        if(i % 2===0 )
        {
            console.log(i+"is even")
        }else 
        {
            console.log(i+"is odd") 
        }
    }
}
//1 while
function iterateAndLog(n){
    var i=0
    while(i<n)
    {
        if(i % 2===0 )
        {
            console.log(i+"is even")
        }else 
        {
            console.log(i+"is odd") 
        }
        i++

    }
}
//2 while 
function iterateAndLog(n){
    var i=n-1
    while(i>=0)
    {
        if(i % 2===0 )
        {
            console.log(i+"is even")
        }else 
        {
            console.log(i+"is odd") 
        }
        i--

    }
}
//for
function iterateAndLog(n){
    for(i=n-1;i>=0;i--)
    {
        if(i % 2===0 )
        {
            console.log(i+"is even")
        }else 
        {
            console.log(i+"is odd") 
        }
    }
}
//rec
function iterateAndLog(n) {
    if(n===1)
    {
        return  console.log(n+"is even")
    }
    else if (n%2===0)
    {
       console.log(n+"is even")
    }
    else 
    {
         console.log(n+"is odd")
    }

   
    return iterateAndLog(n-1)
    
}
//3
function weirdDivisionWithFor(n) {
    for(i=1;i<=n;i++)
        {
     if (i%3===0)
     {
         if(i%5===0)
         {
             console.log(i+" JuliaJames")
         }else 
         {console.log(i+" Julia")}
     }
     else if (i%5===0)
     {
         console.log(i+" James")
     }
     else if ((i%3!=0)&&(i%5!=0))
     {
         console.log(i)
     }
        }
 }
 //4 
 function laugh(n) {
    msg=''
    if(n===1)
    {
        return 'ha'
    }
    return 'ha'+laugh(n-1)
    
}
//5
function factorial (n) {
    if(n===1)
    {
        return 1
    }
    return n*factorial(n-1)
    
}
//6
function range (min,max,array=[]) {
    if(max===min)
    {
        return array
    }
        array.push(min)
    
    return range(min+1,max,array)
    
}
//7

function reverse(string1) {
    var string2=''
    if(string1.length===0)
    {
        return string2
    }
    string2=string1[0]
    return reverse(string1.slice(1))+string2
    
}
//8
function addDigits (number) {
    var string=number.toString()
    var sum=0
    for(i=0;i<string.length;i++)
    {
        sum+=parseInt(string[i])
        
    }
    return sum
    
}
//9
function fibRecursive(number) {
    var s=0
    if(number===0)
    {
        return 0
    }
    else if (number===1)
    {
        return s+=1
    }

    return s+fibRecursive(number-1)+fibRecursive(number-2)
    
}
//11
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
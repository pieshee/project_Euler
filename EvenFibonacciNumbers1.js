var a = 1;
var b = 2;
var sum = 0;

//loop while a is less than 4 million
while( a < 4000000) {

//if a is even, add it to the sum
    if( a % 2 === 0){
        sum += a;
    }
    
//create a new variable "c" that holds the sum of a and b
//then finally update a and b as they keep adding
    var c = a + b;
    a = b;
    b = c;
}

//display the sum
//console.log(sum);
document.write(sum); 

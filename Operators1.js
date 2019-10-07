let x=1;
x=-x;
console.log(x);


var str="my" + "name";
console.log(str);

var str1= 5 + "name";
console.log(str1);



console.log("1"+2); //O/P 12 Note that if one of the operands is a string, the other one is converted to a string too.
console.log(2 + "1"); //O/P 21 It doesn’t matter whether the first operand is a string or the second one. 
                      //The rule is simple: if either operand is a string, the other one is converted into a string as well.



console.log(2-"1"); //In this case o/p will be 1. It will consider both operands as numbers instead of string.

console.log(5+6+"9"); //O/P 119 and not 569. Operations run from left to right.
                        //If there are two numbers followed by a string, the numbers will be added before being converted to a string:

console.log("9"+5+6); //O/P 956 Here first operand 9 is a string so it will convert rest two to string as well
console.log(5+"6"+9); // O/P 569

let num=1;
console.log(+num); // O/P is 1.

console.log(true);// O/P true
console.log(+true); // O/P 1;
console.log(+"");// O/P 0

let apples="2";
let oranges="4";

console.log(apples+oranges); // O/P 24 This binary plus(+) will take opeands as string an concatenate
console.log(+apples + +oranges); //O/P 6 This binary plus(+) will convert to numbers and sum them

let counter=2;
++counter;
//console.log(counter);

//console.log(2++); //Invalid left-hand side expression in postfix operation

console.log(counter);

let counter1 = 1;
let a = ++counter1; // (*)

console.log(a); // 2

let counter2 = 1;
let a1 = counter2++; // (*)

console.log(a1); // 1

console.log('01'==1); // true String '01' converted to number

console.log('O1'==1); // False in string we have written character uppercase 'O'

let b="0";
console.log(Boolean(b));




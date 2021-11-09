console.group('Conditions, Arrays, Objects');

/*
Chapter 10: Comparison Operations :

Abstract equality / inequality and type
conversion :

The Problem :

The abstract equality and inequality operators (== and !=) convert their operands if the operand types do not
match. This type coercion is a common source of confusion about the results of these operators, in particular, these
operators aren't always transitive as one would expect.
*/

"" == 0; // true A
0 == "0"; // true A
"" == "0"; // false B
false == 0; // true
false == "0"; // true
"" != 0; // false A
0 != "0"; // false A
"" != "0"; // true B
false != 0; // false
false != "0"; // false

// The results start to make sense if you consider how JavaScript converts empty strings to numbers.
Number(""); // 0
Number("0"); // 0
Number(false); // 0

/*
The Solution :

In the statement false B, both the operands are strings ("" and "0"), hence there will be no type conversion and since "" and "0" are not the same value, "" == "0" is false as expected.

One way to eliminate unexpected behavior here is making sure that you always compare operands of the same type. For example, if you want the results of numerical comparison use explicit conversion:  */

var test = (a,b) => Number(a) == Number(b);
var c = {
t1: test("", 0), // true;
t2: test("0", 0), // true
t3: test("", "0"), // true;
t4: test("abc", "abc") // false as operands are not numbers
}
console.table(c)

// Or, if you want string comparison:

var test = (a,b) => String(a) == String(b);

var d = test("", 0); // false;
var e = test("0", 0); // true
var f = test("", "0"); // false;

console.log(d,e,f);

/*
Side-note: 
Number("0") and new Number("0") isn't the same thing! While the former performs a type conversion, the latter will create a new object. Objects are compared by reference and not by value which explains the results
below.
*/

console.log("Number(\"0\") == Number(\"0\"): ", Number("0") == Number("0")); // true;

console.log('new Number("0") == new Number("0"): ', new Number("0") == new Number("0")); // false


// Finally, you have the option to use strict equality and inequality operators which will not perform any implicit type conversions.

"" === 0; // false
0 === "0"; // false
"" === "0"; // false

console.log(Object.is(NaN,NaN));

/******************************************* */
/*
Section 10.5: Abstract Equality (==) :

Operands of the abstract equality operator are compared after being converted to a common type.


7.2.13 Abstract Equality Comparison :

The comparison x == y, where x and y are values, produces true or false. Such a comparison is
performed as follows:

1. If Type(x) is the same as Type(y), then:
    
    a. Return the result of performing Strict Equality Comparison x === y.

2. If x is null and y is undefined, return true.

3. If x is undefined and y is null, return true.

4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).

5. If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.

6. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.

7. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison :
            x == ToPrimitive(y).

9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison :
            ToPrimitive(x) == y.

10. Return false.

*/

// Examples:

1 == 1; // true
1 == true; // true (operand converted to number: true => 1)
1 == '1'; // true (operand converted to number: '1' => 1 )
1 == '1.00'; // true
1 == '1.00000000001'; // false
1 == '1.00000000000000001'; // true (true due to precision loss)
null == undefined; // true (spec #2)
1 == 2; // false
0 == false; // true
0 == undefined; // false
0 == ""; // true

// Section 10.6: Logic Operators with Booleans :

var x = true,
    y = false;

/*
AND :
This operator will return true if both of the expressions evaluate to true. This boolean operator will employ shortcircuiting
and will not evaluate y if x evaluates to false. */

x && y;
// This will return false, because y is false.

/* OR :
This operator will return true if one of the two expressions evaluate to true. This boolean operator will employ short-circuiting and y will not be evaluated if x evaluates to true.
*/
x || y;
// This will return true, because x is true.

/*
NOT :

This operator will return false if the expression on the right evaluates to true, and return true if the expression on
the right evaluates to false. */

!x;
// This will return false, because x is true.

/*
Section 10.7: Automatic Type Conversions :

Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
JavaScript is loosely typed. A variable can contain different data types, and a variable can change its data type:
*/

var x = "Hello"; // typeof x is a string
x = 5; // changes typeof x to a number

// When doing mathematical operations, JavaScript can convert numbers to strings:

var x = 5 + 7; 
// x.valueOf() is 12, typeof x is a number

var x = 5 + "7"; 
// x.valueOf() is 57, typeof x is a string

var x = "5" + 7; 
// x.valueOf() is 57, typeof x is a string

var x = 5 - 7; 
// x.valueOf() is -2, typeof x is a number

var x = 5 - "7"; 
// x.valueOf() is -2, typeof x is a number

var x = "5" - 7; 
// x.valueOf() is -2, typeof x is a number

var x = 5 - "x"; 
// x.valueOf() is NaN, typeof x is a number

/*
Subtracting a string from a string, does not generate an error but returns NaN (Not a Number): */

"Hello" - "Dolly" // returns NaN

/* 10.8: Logic Operators with Non-boolean values
(boolean coercion) :

Logical OR (||), reading left to right, will evaluate to the first truthy value. If no truthy value is found, the last value is
returned. */

var list = {
    g : 'hello' || '', // a = 'hello'
    h : '' || [], // b = []
    i : '' || undefined, // c = undefined
    j : 1 || 5, // d = 1
    k : 0 || {}, // e = {}
    l : 0 || '' || 5, // f = 5
    m : '' || 'yay' || 'boo' // g = 'yay'
}

console.table(list);


/*
Logical AND (&&), reading left to right, will evaluate to the first falsy value. If no falsey value is found, the last value is
returned.
*/

var a = 'hello' && ''; // a = ''
var b = '' && []; // b = ''
var c = undefined && 0; // c = undefined
var d = 1 && 5; // d = 5
var e = 0 && {}; // e = 0
var f = 'hi' && [] && 'done'; // f = 'done'
var g = 'bye' && undefined && 'adios'; // g = undefined

// 10.9: Empty Array :

/* ToNumber(ToPrimitive([])) == ToNumber(false) */

[] == false; // true
/*
When [].toString() is executed it calls [].join() if it exists, or Object.prototype.toString() otherwise. This comparison is returning true because [].join() returns '' which, coerced into 0, is equal to false ToNumber.

Beware though, all objects are truthy and Array is an instance of Object:

// Internally this is evaluated as ToBoolean([]) === true ? 'truthy' : 'falsy'
*/

var n = [] ? 'truthy' : 'falsy'; // 'truthy'

console.log(n);

/*
SameValueZero :

It behaves like SameValue, but considers +0 and -0 to be equal.

You can use this comparison algorithm via Array.prototype.includes (ECMAScript 7).

Examples:
*/
[1].includes(1); // true
[+0].includes(-0); // true
[NaN].includes(NaN); // true
[true].includes("true"); // false
[false].includes(0); // false
[1].includes("1"); // false
[null].includes(undefined); // false
[[]].includes([]); // false

/*
Strict Equality Comparison :

It behaves like SameValue, but :
    > Considers +0 and -0 to be equal.
    > Considers NaN different than any value, including itself

    You can use this comparison algorithm via the === operator (ECMAScript 3).

There is also the !== operator (ECMAScript 3), which negates the result of ===.

Examples:
*/
1 === 1; // true
+0 === -0; // true
NaN === NaN; // false
true === "true"; // false
false === 0; // false
1 === "1"; // false
null === undefined; // false
[] === []; // false

/* 
This algorithm has the following properties:

Symmetry: x === y is true if, and only if, y === x is true, for any values x andy`.

Transitivity: If x === y and y === z are true, then x === z is also true, for any values x, y and z.
But is not an equivalence relation because
NaN is not reflexive: NaN !== NaN   */

/*
Abstract Equality Comparison :

If both operands belong to the same Type, it behaves like the Strict Equality Comparison.
Otherwise, it coerces them as follows:

> undefined and null are considered to be equal
When comparing a number with a string, the string is coerced to a number

> When comparing a boolean with something else, the boolean is coerced to a number

> When comparing an object with a number, string or symbol, the object is coerced to a primitive 

If there was a coercion, the coerced values are compared recursively. Otherwise the algorithm returns false.

You can use this comparison algorithm via the == operator (ECMAScript 1).
There is also the != operator (ECMAScript 1), which negates the result of ==.

Examples:
*/

1 == 1; // true
+0 == -0; // true
NaN == NaN; // false
true == "true"; // false
false == 0; // true
1 == "1"; // true
null == undefined; // true
[] == []; // false


// 10.11: Relational operators (<, <=, >, >=) :

// When both operands are numeric, they are compared normally:

1 < 2 // true
2 <= 2 // true
3 >= 5 // false
true < false // false (implicitly converted to numbers, 1 > 0)

// When both operands are strings, they are compared lexicographically (according to alphabetical order):

'a' < 'b' // true
'1' < '2' // true
'100' > '12' // false ('100' is less than '12' lexicographically!)

// When one operand is a string and the other is a number, the string is converted to a number before comparison:

'1' < 2 // true
'3' > 2 // true
true > '2' // false (true implicitly converted to number, 1 < 2)

// When the string is non-numeric, numeric conversion returns NaN (not-a-number). Comparing with NaN always returns false:

1 < 'abc' // false
1 > 'abc' // false

// But be careful when comparing a numeric value with null, undefined or empty strings:

1 > '' // true
1 < '' // false
1 > null // true
1 < null // false
1 > undefined // false
1 < undefined // false

// When one operand is a object and the other is a number, the object is converted to a number before comparison.So null is particular case because Number(null);//0

new Date(2015)< 1479480185280 // true
null > -1 //true
// ({toString:function(){return 123}}) > 122 //true

/* 10.12: Inequality :

Operator != is the inverse of the == operator.
Will return true if the operands aren't equal.
The JavaScript engine will try and convert both operands to matching types if they aren't of the same type. Note: if
the two operands have different internal references in memory, then false will be returned.

Sample:    */

1 != '1' // false
1 != 2 // true

/*
In the sample above, 1 != '1' is false because, a primitive number type is being compared to a char value.
Therefore, the JavaScript engine doesn't care about the datatype of the R.H.S value.
Operator: !== is the inverse of the === operator. Will return true if the operands are not equal or if their types do
not match.

Example:   */

1 !== '1' // true
1 !== 2 // true
1 !== 1 // false

/*
10.13: List of Comparison Operators : 

Operator    Comparison                Example
==          Equal                     i == 0
===     Equal Value and Type          i === "5"
!=      Not Equal                     i != 5
!==     Not Equal Value or Type       i !== 5
>       Greater than                  i > 5
<       Less than                     i < 5
>=      Greater than or equal         i >= 5
<=      Less than or equal            i <= 5

/*
10.14: Grouping multiple logic statements  :

You can group multiple boolean logic statements within parenthesis in order to create a more complex logic evaluation, especially useful in if statements.  */

age = 19;
height = 4;
status = 'royalty';
hasInvitation = true;
if ((age >= 18 && height >= 5.11) || (status === 'royalty' && hasInvitation)) {
console.log('You can enter our club');
}

// We could also move the grouped logic to variables to make the statement a bit shorter and descriptive:

var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isRoyalty = status === 'royalty';
var specialCase = isRoyalty && hasInvitation;
var canEnterOurBar = suitable || specialCase;
if (canEnterOurBar) console.log('You can enter our club again :)');

/*
Notice that in this particular example (and many others), grouping the statements with parenthesis works the same as if we removed them, just follow a linear logic evaluation and you'll find yourself with the same result. 

I do prefer using parenthesis as it allows me to understand clearer what I intended and might prevent for logic mistakes  */



/*
note from simplifying JS book:
As an added bonus, let and const have another protection. You can’t redeclare
a variable of the same name. With var, you can redeclare a variable of the
same name in the same scope. In other words, you can say var price = 1 at, say
line 10 and var price = 5 at line 25 with no conflict. This can be a huge problem
if you unintentionally reuse a variable name. With let, you can’t make this
mistake. */





/*______________________________________________

Chapter 11: Conditions  :

11.3: If / Else If / Else Control

In its most simple form, an if condition can be used like this:  */
var i = 0;
if (i < 1) {
console.log("i is smaller than 1");
}

/*
The condition i < 1 is evaluated, and if it evaluates to true the block that follows is executed. If it evaluates to
false, the block is skipped.
An if condition can be expanded with an else block. The condition is checked once as above, and if it evaluates to
false a secondary block will be executed (which would be skipped if the condition were true). An example:  */

if (i < 1) {
console.log("i is smaller than 1");
} else {
console.log("i was not smaller than 1");
}


/*
Supposing the else block contains nothing but another if block (with optionally an else block)like this:  */

if (i < 1) {
console.log("i is smaller than 1");
} else {
if (i < 2) {
console.log("i is smaller than 2");
} else {
console.log("none of the previous conditions was true");
}
}

/*
Then there is also a different way to write this which reduces nesting:  */

if (i < 1) {
console.log("i is smaller than 1");
} else if (i < 2) {
console.log("i is smaller than 2");
} else {
console.log("none of the previous conditions was true");
}

/*
Some important footnotes about the above examples:

If any one condition evaluated to true, no other condition in that chain of blocks will be evaluated, and all corresponding blocks (including the else block) will not be executed.

The number of else if parts is practically unlimited. The last example above only contains one, but you can have as many as you like.

The condition inside an if statement can be anything that can be coerced to a boolean value,see the topic on boolean logic for more details;

The if-else-if ladder exits at the first success. That is, in the example above, if the value of i is 0.5 then the first branch is executed. If the conditions overlap, the first criteria occurring in the flow of execution is
executed. The other condition, which could also be true is ignored.

If you have only one statement, the braces around that statement are technically optional, e.g this is fine:   */

if (i < 1) console.log("i < 1, one line if");

// And this will work as well:

if (i < 1)
console.log("i < 1, if >> no curly braces");

/* If you want to execute multiple statements inside an if block, then the curly braces around them are mandatory. Only using indentation isn't enough. For example, the following code:   */

if (i < 1)
console.log("i is smaller than 1");
console.log("this will run REGARDLESS of the condition"); // Warning, see text!

// is equivalent to:

if (i < 1) {
console.log("i is smaller than 1");
}
console.log("this will run REGARDLESS of the condition");


/*  11.4: Strategy  L

A strategy pattern can be used in JavaScript in many cases to replace a switch statement. It is especially helpful when the number of conditions is dynamic or very large. It allows the code for each condition to be independent
and separately testable.

Strategy object is simple an object with multiple functions, representing each separate condition. Example:   */

const AnimalSays = {
    
    dog () {
        return 'woof';
    },
    
    cat () {
        return 'meow';
    },
    
    lion () {
        return 'roar';
        },
        // ... other animals
    default () {
        return 'moo';
    }
};


// The above object can be used as follows:

function makeAnimalSpeak (animal) {
// Match the animal by type
const speak = AnimalSays[animal] || AnimalSays.default;
console.log(animal + ' says ' + speak());
}

// Results:

makeAnimalSpeak('dog') // => 'dog says woof'
makeAnimalSpeak('cat') // => 'cat says meow'
makeAnimalSpeak('lion') // => 'lion says roar'
makeAnimalSpeak('snake') // => 'snake says moo'



// random number generation:  [ 11 values ]

for (var i=0;i<3;i++){
    var pw = Math.random(0,1);
    var pw2 = pw * 100000000000000;
    //console.log(pw2);
    var pw3 = String(pw2);
    var pw4 = pw3.slice(0,11);
    console.log(pw4);
}


/*___________________________________________
Chapter 12: Arrays  :

What are Array-like Objects?
JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property. For example:   */

var realArray = ['a', 'b', 'c'];
var arrayLike = {
0: 'a',
1: 'b',
2: 'c',
length: 3
};

console.log(realArray,arrayLike);

/*
Common examples of Array-like Objects are the arguments object in functions and HTMLCollection or NodeList objects returned from methods like document.getElementsByTagName or document.querySelectorAll.

However, one key difference between Arrays and Array-like Objects is that Array-like objects inherit from Object.prototype instead of Array.prototype. 

This means that Array-like Objects can't access common Array prototype methods like forEach(), push(), map(), filter(), and slice():  */


var parent = document.getElementById('paragraph');

var desiredOption = parent.querySelector('option[value="desired"]');

var domList = parent.children;
console.log(parent.children);

/*         // domList.indexOf(desiredOption); 
        // Error! indexOf is not defined.

        domList.forEach(function() {
        arguments.map(// Stuff here ) // Error! map is not defined.
        }); // Error! forEach is not defined. */


function func() {
    console.log(arguments);
    }
    func(1, 2, 3); // → [1, 2, 3]



/*
    12.2: Reducing values [ Version ≥ 5.1 ]

    The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
    reduce it to a single value.
    
    Array Sum :
    
    This method can be used to condense all values of an array into a single value: */


var p = [1, 2, 3, 4].reduce(function(a, b) {
return a + b;
});
// → 10             
console.log(p);




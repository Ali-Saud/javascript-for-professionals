/* 1121 ines of code, from : Javascript notes for professionals book.
from Ch1 to Ch9 9 in this file.
Ch 10 and further are at:'js-for-professionals2.js' file.
*/

console.groupCollapsed('Intro to JS');
// Using console log
console.log("Hello World!");

// Place holders
var greet = 'Hello', who = 'world2';
console.log('%c, %s!', greet, who);

// Logging HTML elements

/* You have the ability to log any element which exists within the DOM. In this case we log the body element: */

console.log(document.body);

// Using the DOM API
/* DOM stands for Document Object Model. It is an object-oriented representation of structured documents like XML
and HTML.
Setting the textContent property of an Element is one way to output text on a web page. 

For example, consider the following HTML tag:
<p id="paragraph"></p>
To change its textContent property, we can run the following JavaScript:
*/

document.getElementById("paragraph").textContent = 'Hello, World'; 

// something wrong!
/* yes .. solved. script should come after paragraph.

Note that in order to manipulate elements in the DOM using JavaScript, the JavaScript code must be run after the
relevant element has been created in the document. This can be achieved by putting the JavaScript <script> tags
after all of your other <body> content. Alternatively, you can also use an event listener to listen to eg. window's
onload event, adding your code to that event listener will delay running your code until after the whole content on
your page has been loaded.
A third way to make sure all your DOM has been loaded, is to wrap the DOM manipulation code with a timeout
function of 0 ms. This way, this JavaScript code is re-queued at the end of the execution queue, which gives the
browser a chance to finish doing some non-JavaScript things that have been waiting to finish before attending to
this new piece of JavaScript. */

// Using window.alert()

/* The alert method displays a visual alert box on screen. The alert method parameter is displayed to the user in
plain text: */
var message = ("Hello Again");

/*         window.alert(message + "  >> window.alert(message)"); */

/* Because window is the global object, you can call also use the following shorthand: */
          /*   alert(message + "  >> alert(message)");
 */
/* So what does window.alert() do? Well, let's take the following example: */

            //alert('hello, world. from Altert !');

/* Notes
The alert method is technically a property of window object, but since all window properties are
automatically global variables, we can use alert as a global variable instead of as a property of window -
meaning you can directly use alert() instead of window.alert().  */

/* Unlike using console.log, alert acts as a modal prompt meaning that the code calling alert will pause until the
prompt is answered. Traditionally this means that no other JavaScript code will execute until the alert is dismissed:
alert('Pause!');  */

console.log('Alert was dismissed');

/*  The use of alerts is usually discouraged in favour of other methods that do not block users from interacting with the
page - in order to create a better user experience. Nevertheless, it can be useful for debugging.  */

// Using window.prompt() :

/* An easy way to get an input from a user is by using the prompt() method.
Syntax :
prompt(text, [default]);

    > text: The text displayed in the prompt box.
    > default: A default value for the input field (optional).

Examples  */

            //var age = prompt("How old are you?");

            //console.log(age); // Prints the value inserted by the user

// Using window.confirm()

/* The window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel.
Now, let's take the following example: */

            //result = window.confirm(message);

/* Here, message is the optional string to be displayed in the dialog and result is a boolean value indicating whether
OK or Cancel was selected (true means OK).

window.confirm() is typically used to ask for user confirmation before doing a dangerous operation like deleting
something in a Control Panel:  

if(window.confirm("Are you sure you want to delete this?")) {
deleteItem(itemId);
}
*/
// example :

/*             if(window.confirm("Are you sure you want to delete this?")) {
                //deleteItem(itemId); if u want to delete item
                console.log("deleted item")
                } */

// Image file : 

/* If you already have an image file containing the desired text and have it placed on a server, you can add the URL of
the image and then add the image to the document as follows: */

var img = new Image();
// fixing img position and dimensions
img.src = 'image.jpeg';
img.height = 200;
img.width = 420;

document.body.appendChild(img);

/******************************************/

// Types of Variables

var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)

var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)

var myFloat = 5.5; // 32-bit floating-point number (decimal)

var myDouble = 9310141419482.22; // 64-bit floating-point number

var myBoolean = true; // 1-bit true/false (0 or 1)

var myBoolean2 = false;

var myNotANumber = NaN;

var NaN_Example = 0/0; // NaN: Division by Zero is not possible
console.log(NaN_Example);

var notDefined; // undefined: we didn't define it to anything yet

        //console.log(aRandomVariable); // undefined 
var myNull = null; // null


/****************************************/

// Arrays and Objects :

var myArray1 = []; // empty array

// An array is a set of variables. For example:

var favoriteFruits = ["apple", "orange", "strawberry"];

var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];

var employees = ["Billy", "Bob", "Joe"];

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

var randomVariables = [2, "any type works", undefined, null, true, 2.51];

myArray2 = ["zero", "one", "two"];

console.log(myArray2[0]); // 0 is the first element of an array
// in this case, the value would be "zero"

myArray3 = ["John Doe", "Billy"];

elementNumber = 1;

console.log(myArray3[elementNumber]); // Billy


/* 
An object is a group of values; unlike arrays, we can do something better than them:   */

myObject = {};

john = {
firstname: "John", 
lastname: "Doe", 
fullname: "John Doe"
};

billy = {
firstname: "Billy",
lastname: undefined,
fullname: "Billy"
};

console.log(john.fullname); // John Doe

console.log(billy.firstname); // Billy

console.log(billy.lastname);  // undefined

/* Rather than making an array ["John Doe", "Billy"] and calling myArray[0], we can just call john.fullname and
billy.fullname.  */

console.groupEnd('Intro to JS')
/*****************************************/
console.groupCollapsed('Math');
// Built-in Constants  :

/* null is used for representing the intentional absence of an object value and is a primitive value. 
Unlike undefined,
it is not a property of the global object.  

It is equal to undefined but not identical to it.  */

null == undefined; // true
null === undefined; // false
console.log(null == undefined);
console.log(null === undefined);

// CAREFUL: The typeof null is 'object'.
var b = typeof null; // 'object';
console.log(b);


/* To properly check if a value is null, compare it with the strict equality operator  */

var a = null;
console.log(a == null);

a === null; // true
console.log(a === null);

// Testing for NaN using isNaN() :

/* The global function isNaN() can be used to check if a certain value or expression evaluates to NaN. This function (in
short) first checks if the value is a number, if not tries to convert it (*), and then checks if the resulting value is NaN.
For this reason, this testing method may cause confusion.  */

isNaN(NaN); // true

isNaN(1); // false: 1 is a number

isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation

isNaN(Infinity); // false: Infinity is a number

isNaN(true); // false: converted to 1, which is a number

isNaN(false); // false: converted to 0, which is a number

isNaN(null); // false: converted to 0, which is a number

isNaN(""); // false: converted to 0, which is a number

isNaN(" "); // false: converted to 0, which is a number

isNaN("45.3"); // false: string representing a number, converted to 45.3

isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3

isNaN("Infinity"); // false: string representing a number, converted to Infinity

isNaN(new Date); // false: Date object, converted to milliseconds since epoch

isNaN("10$"); // true : conversion fails, the dollar sign is not a digit

isNaN("hello"); // true : conversion fails, no digits at all

isNaN(undefined); // true : converted to NaN

isNaN(); // true : converted to NaN (implicitly undefined)

isNaN(function(){}); // true : conversion fails

isNaN({}); // true : conversion fails

isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number


/***************************************/

// undefined and null :

/*
At first glance it may appear that null and undefined are basically the same, however there are subtle but
important differences.
undefined is the absence of a value in the compiler, because where it should be a value, there hasn't been put one,
like the case of an unassigned variable.

undefined is a global value that represents the absence of an assigned value.  */

typeof undefined === 'undefined';
console.log(typeof undefined);
/* 
null is an object that indicates that a variable has been explicitly assigned "no value".  */
typeof null === 'object';
console.log(typeof null);

/* 
Setting a variable to undefined means the variable effectively does not exist. Some processes, such as JSON
serialization, may strip undefined properties from objects. In contrast, null properties indicate will be preserved so
you can explicitly convey the concept of an "empty" property.  */

/*
The following evaluate to undefined:

    > A variable when it is declared but not assigned a value (i.e. defined)  */
    
    let foo;
    console.log('is undefined?', foo === undefined);
    // is undefined? true
    
    /*
    > Accessing the value of a property that doesn't exist  */
    
    let foo2 = { a: 'a' };
    console.log('is undefined?', foo2.b === undefined);
    // is undefined? true
    
    /*
    > The return value of a function that doesn't return a value  */
    
    function foo3() { return; }
    console.log('is undefined?', foo3() === undefined);
    // is undefined? true
    
    /*
    > The value of a function argument that is declared but has been omitted from the function call  */
    
    function foo4(param) {
    console.log('is undefined?', param === undefined);
    }
    foo4('a');
    foo4();
    // is undefined? false
    // is undefined? true


/**************************************/

// Infinity and -Infinity :

1 / 0; // Infinity
// Wait! WHAAAT?
console.log(1 / 0);

/*
Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a
reference to Number.POSITIVE_INFINITY

It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression of a number
that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, there is Infinity!

There is also -Infinity which is mathematical negative infinity, and it's lower than any other value.

To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.  */

- (Infinity); // -Infinity
console.log((-Infinity));
console.log(Number.NEGATIVE_INFINITY);

Infinity > 123192310293; // true
-Infinity < -123192310293; // true
1 / 0; // Infinity
Math.pow(123123123, 9123192391023); // Infinity

Number.MAX_VALUE * 2; // Infinity
console.log(Number.MAX_VALUE *2);

23 / Infinity; // 0
console.log(23/Infinity);

-Infinity; // -Infinity
-Infinity === Number.NEGATIVE_INFINITY; // true
-0; // -0 , yes there is a negative 0 in the language
console.log(-0);

0 === -0; // true
console.log('Is 0 === -0 ??  : ', 0===-0);

1 / -0; // -Infinity
console.log(1/-0);

1 / 0 === 1 / -0; // false
console.log("1 / 0 === 1 / -0 is :  ", 1 / 0 === 1 / -0);

Infinity + Infinity; // Infinity
console.log(Infinity + Infinity);
console.log(Infinity - Infinity);

var a = 0, b = -0;
a === b; // true
1 / a === 1 / b; // false
console.log("1 / a === 1 / b :", 1 / a === 1 / b);

console.log(Infinity == -Infinity);
console.log(Infinity === -Infinity);

// deviding zero by zero ?
console.log("zero / zero = :", 0/0);


/*************************************/

// Number constants :

var mathConstants = {
    
    maxValue : Number.MAX_VALUE, // 1.7976931348623157e+308
    maxSafeInteger : Number.MAX_SAFE_INTEGER, // 900719925474099
    minValue : Number.MIN_VALUE, // 5e-324
    minSafeInteger : Number.MIN_SAFE_INTEGER, // -9007199254740991
    epsilon : Number.EPSILON, // 0.0000000000000002220446049250313
    plusInfinity : Number.POSITIVE_INFINITY, // Infinity
    negativeInfinity : Number.NEGATIVE_INFINITY, // -Infinity
    notAnumber : Number.NaN, // NaN

};

console.table(mathConstants);

/*
In many cases the various operators in JavaScript will break with values outside the range of
(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

Note that Number.EPSILON represents the different between one and the smallest Number greater than one, and
thus the smallest possible difference between two different Number values. One reason to use this is due to the
nature of how numbers are stored by JavaScript >> see Check the equality of two numbers

*/

console.groupEnd('Math');









/********************************************/
console.groupCollapsed('Console');
// Chapter 5: Console :
// Formatting console output :

/*
Many of the console's print methods can also handle C-like string formatting, using % tokens:
console.log('%s has %d points', 'Sam', 100);
Displays Sam has 100 points.
The full list of format specifiers in JavaScript is:

Specifier                  Output
%s               Formats the value as a string

%i or %d         Formats the value as an integer

%f               Formats the value as a floating point value

%o               Formats the value as an expandable DOM element

%O               Formats the value as an expandable JavaScript object

%c               Applies CSS style rules to the output string as specified by the second parameter
*/


/* Advanced styling :

When the CSS format specifier (%c) is placed at the left side of the string, the print method will accept a second
parameter with CSS rules which allow fine-grained control over the formatting of that string:  */

console.log('%cHello world!', 'color: blue; font-size: xx-large');

/*
It is possible to use multiple %c format specifiers:
    any substring to the right of a %c has a corresponding parameter in the print method;
    
    this parameter may be an empty string, if there is no need to apply CSS rules to that same substring;
    
    if two %c format specifiers are found, the 1st (encased in %c) and 2nd substring will have their rules defined in
    the 2nd and 3rd parameter of the print method respectively.
    
    if three %c format specifiers are found, then the 1st, 2nd and 3rd substrings will have their rules defined in
    the 2nd , 3rd and 4th parameter respectively, and so on...   */

console.log("%cHello %cWorld%c!!", // string to be printed
"color: blue;", // applies color formatting to the 1st substring
"font-size: xx-large;", // applies font formatting to the 2nd substring
"/* no CSS rule*/" // does not apply any rule to the remaining substring
);

// console date :
console.log('%c'+ new Date,'color: red; font-size: large');

// Tabulating values - console.table() :
/*In most environments, console.table() can be used to display objects and arrays in a tabular format  */   

console.table(employees);
console.table(favoriteFruits);

/* Clearing the console - console.clear() :

You can clear the console window using the console.clear() method. This removes all previously printed
messages in the console and may print a message like "Console was cleared" in some environments.
*/

// console.clear();






/********************************************/

//  Chapter 6: Datatypes in JavaScript :

//typeof :

/*
typeof is the 'official' function that one uses to get the type in JavaScript, however in certain cases it might yield
some unexpected results ...

1. Strings :  */

var c = typeof "String";
var d = typeof Date(2011,01,01);
console.log(" type of c: ", c, " \n type of d: ",d);

// 2. Numbers :

console.log("Type of no. 42: " ,typeof 42);

// 3. Bool
// typeof true (valid values true and false)
console.log("type of True: ", typeof true);
console.log("type of False: ", typeof false);

/* 4. Object
        typeof {} or
        typeof [] or
        typeof null or
        typeof /aaa/ or
        typeof Error()   <<< case sensitive */

console.log('type of {} :' ,   typeof    {}   );
console.log('typeof [] : ' ,   typeof    []   );
console.log('type of null:' ,  typeof   null  );
console.log('type of /aaa/ :' ,typeof  /aaa/  );
console.log('type of Error():',typeof Error() );

// 5. Function :
//   typeof function(){}
var e = function(){};
console.log('type of function: ', e );

/***************************/

// 6.2: Finding an object's class :
/*
To find whether an object was constructed by a certain constructor or one inheriting from it, you can use the
instanceof command:   */

//We want this function to take the sum of the numbers passed to it
//It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6

function sum(...arguments) {
    if (arguments.length === 1) {
    const [firstArg] = arguments
    if (firstArg instanceof Array) { //firstArg is something like [1, 2, 3]
    return sum(...firstArg) //calls sum(1, 2, 3)
    }
    }
    return arguments.reduce((a, b) => a + b)
    }
    console.log(sum(1, 2, 3)) //6
    console.log(sum([1, 2, 3])) //6
    console.log(sum(4)) //4

// Note that primitive values are not considered instances of any class:

console.log(2 instanceof Number) //false
console.log('abc' instanceof String) //false
console.log(true instanceof Boolean) //false
console.log(Symbol() instanceof Symbol) //false

/*
Every value in JavaScript besides null and undefined also has a constructor property storing the function that was used to construct it. This even works with primitives.
*/

//Whereas instanceof also catches instances of subclasses, using obj.constructor does not

console.log([] instanceof Object, [] instanceof Array) //true true
console.log([].constructor === Object, [].constructor === Array) //false true

function isNumber(value) {
    //null.constructor and undefined.constructor throw an error when accessed
    if (value === null || value === undefined) return false
    return value.constructor === Number
    }
    
    console.log(isNumber(null), isNumber(undefined)) //false false
    
    console.log(isNumber('abc'), isNumber([]), isNumber(() => 1)) //false false false
    
    console.log(isNumber(0), isNumber(Number('10.1')), isNumber(NaN)) //true true true


// example to understand Number, String functions:    
console.log(Number("5"), typeof Number("5"));

console.log(String(5), typeof String(5));
// NaN is a number
console.log(NaN, typeof NaN);


//  Convert to JSON :
var date1 = new Date();
console.log(date1.toJSON());

//6.3: Getting object type by constructor name :

/* When one with typeof operator one gets type object it falls into somewhat wast category...
In practice you might need to narrow it down to what sort of 'object' it actually is and one way to do it is to use object constructor name to get what flavour of object it actually is: Object.prototype.toString.call(yourObject)  */

// i created object to table all 11 objs :
var f = {
// 1. String
    1: Object.prototype.toString.call("String"),

// 2. Number
2: Object.prototype.toString.call(42),

// 3. Bool
3: Object.prototype.toString.call(true),

// 4. Object
4: Object.prototype.toString.call(Object()),
// or : Object.prototype.toString.call({})

// 5. Function
5: Object.prototype.toString.call(function(){}) ,

// 6. Date
6: Object.prototype.toString.call(new Date(2015,10,21)) ,

// 7. Regex
7: Object.prototype.toString.call(new RegExp()) ,
// or Object.prototype.toString.call(/foo/) ,

// 8. Array
8: Object.prototype.toString.call([]),

// 9. Null
9: Object.prototype.toString.call(null),

// 10. Undefined
10: Object.prototype.toString.call(undefined),

// 11. Error
11: Object.prototype.toString.call(Error())

};
console.table(f);







/********************************************/

// Chapter 7: Strings :
/*
Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in Template Literals (backticks) `hello`.  */

var hello = "Hello";
var world = 'world';
var helloW = `HELLO WORLD`; // ES2015 / ES6

console.log(hello, world, '\n', helloW);

// Strings can be created from other types using the String() function.

var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

console.log(intString, '\n', booleanString, '\n', nullString);

// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.

var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

console.log(intString, '\n', booleanString, '\n', objString);

// Strings also can be created by using String.fromCharCode method.

var g = String.fromCharCode(104,101,108,108,111) //"hello"

console.log("g : " , g);

// Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects unlike primitive strings.

var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"

console.log("objectString: " , objectString);

/* Concatenating Strings :

String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the String object prototype.  */

var foo5 = "Foo";
var bar = "Bar";

console.log(foo5 + bar); // => "FooBar"
console.log(foo5 + " " + bar); // => "Foo Bar"

foo5.concat(bar) // => "FooBar"

"a".concat("b", " ", "d") // => "ab d"

// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.

var string = "string";
var number = 32;
var boolean = true;

console.log(string + number + boolean); // "string32true"

// String Templates :

// Strings can be created using template literals (backticks) `hello`.

var greeting = `Hello`;

// With template literals, you can do string interpolation using ${variable} inside template literals:

var place = `World`;
var greet = `Hello ${place}!`

console.log(greet); // "Hello World!"

// You can use String.raw to get backslashes to be in the string without modification.

`a\\b` // = a\b
var h = String.raw`a\\b`; // = a\\b

console.log(`a\\b`, "\n", h);



/*******************************/

/* 7.2: Reverse String :

The most "popular" way of reversing a string in JavaScript is the following code fragment, which is quite common:   */

function reverseString(str) {
    return str.split('').reverse().join('');
    };

var i = reverseString('string'); // "gnirts"
console.log("Reverse String: ",i);

/*
However, this will work only so long as the string being reversed does not contain surrogate pairs. Astral symbols, i.e. characters outside of the basic multilingual plane, may be represented by two code units, and will lead this
naive technique to produce wrong results. Moreover,characters with combining marks (e.g. diaeresis) will appear on the logical "next" character instead of the original one it was combined with.
*/

'?????.'.split('').reverse().join(''); //fails . oh wait it did not !!

console.log('?????.'.split('').reverse().join(''));

/*
While the method will work fine for most languages, a truly accurate, encoding respecting algorithm for string reversal is slightly more involved. One such implementation is a tiny library called Esrever, which uses regular
expressions for matching combining marks and surrogate pairs in order to perform the reversing perfectly.

Using spread operator :
*/

function reverseString(str) {
    return [...String(str)].reverse().join('');
    }
console.log(reverseString('stackoverflow')); // "wolfrevokcats"
console.log(reverseString(1337)); // "7331"
console.log(reverseString([1, 2, 3])); // "3,2,1"
    

// Custom reverse() function :

function reverse(string) {
var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
    }
    return strRev;
}
reverse("zebra"); // "arbez"

console.log(reverse("zebra"));





/* 7.4: Access character at index in string

Use charAt() to get a character at the specified index in the string.
*/
var string = "Hello, World!";
console.log( "fourth of hello: string.charAt(4)", string.charAt(4) ); // "o"

/*
Alternatively, because strings can be treated like arrays, use the index via bracket notation.
*/
var string = "Hello, World!";
console.log( "fourth of hello: string[4] ",string[4] ); // "o"

/*
Note that these methods are all getter methods (return a value). Strings in JavaScript are immutable. In other words, none of them can be used to set a character at a position in the string.
*/


/* 7.6: Word Counter :

Say you have a <textarea> and you want to retrieve info about the number of:

 > Characters (total) 
 > Characters (no spaces) 
 > Words
 > Lines   */

 function wordCount( val ){
    var wom = val.match(/\S+/g);
    return {
    charactersNoSpaces : val.replace(/\s+/g, '').length,
    characters : val.length,
    words : wom ? wom.length : 0,
    lines : val.split(/\r*\n/).length
    };
    }

// Use like:
var j = wordCount('If a string has\r \n and you may want to \n consider using template literals also known  template and strings previous ES6 editions which do not require you to escape  and These use backticks  instead single or double qu').words; // (Number of words)

console.log(j);




/*************************/

/* 7.8: Splitting a string into an array :

Use .split to go from strings to an array of the split substrings:   */

var s = "one, two, three, four, five"

var k = s.split(", "); 

console.log("Split string to array: ",k); // ["one", "two", "three", "four", "five"]

// Use the array method .join to go back to a string :

var l = s.split(", ").join("--"); 

console.log("join back to string: ", l ); // "one--two--three--four--five"

/*  7.10: Detecting a string :

To detect whether a parameter is a primitive string, use typeof:  */

var aString = "my string";
var anInt = 5;
var anObj = {};
typeof aString === "string"; // true
typeof anInt === "string"; // false
typeof anObj === "string"; // false

// If you ever have a String object, via new String("somestr"), then the above will not work. In this instance, we can use instanceof :

var aStringObj = new String("my string");
aStringObj instanceof String; // true

// To cover both instances, we can write a simple helper function :

var isString = function(value) {
    return typeof value === "string" || value instanceof String;
    };
    var aString = "Primitive String";
    var aStringObj = new String("String Object");
    var m = isString(aString); // true
    var n = isString(aStringObj); // true
    var o = isString({}); // false
    var p = isString(5); // false

console.log(m, n, o, p );

/* 
Or we can make use of toString function of Object. This can be useful if we have to check for other types as well
say in a switch statement, as this method supports other datatypes as well just like typeof.  */

var pString = "Primitive String";
var oString = new String("Object Form of String");
Object.prototype.toString.call(pString);//"[object String]"
Object.prototype.toString.call(oString);//"[object String]"

// A more robust solution is to not detect a string at all, rather only check for what functionality is required. For example:

var aString = "Primitive String";

// Generic check for a substring method
if(aString.substring) {
    console.log(aString);
}

// Explicit check for the String substring prototype method 

if(aString.substring === String.prototype.substring) {
    aString.substring(0, );
    
    }
console.log(aString.substring(0, 4));
console.log(aString.substring(0, ));
// (0,4) : start and end of substring






/*  7.11: Substrings with slice :

Use .slice() to extract substrings given two indices:   */

var s = "0123456789abcdefg";
s.slice(0, 5); // "01234"
s.slice(5, 6); // "5"

// Given one index, it will take from that index to the end of the string:

s.slice(10); // "abcdefg"

/* 7.14: String Find and Replace Functions :

To search for a string inside a string, there are several functions:
indexOf( searchString ) and lastIndexOf( searchString )

indexOf() will return the index of the first occurrence of searchString in the string. If searchString is not found,
then -1 is returned.
*/

var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log( string.indexOf("foo") ); // -1

/*
Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.  */

var string = "Hello, World!";
console.log( string.lastIndexOf("o") ); // 8
console.log( string.lastIndexOf("foo") ); // -1

/*
includes( searchString, start ) :

includes() will return a boolean that tells whether searchString exists in the string, starting from index start
(defaults to 0). This is better than indexOf() if you simply need to test for existence of a substring.
*/

var string = "Hello, World!";
console.log( string.includes("Hello") ); // true
console.log( string.includes("foo") ); // false



/**********************************************/

/* Chapter 8: Date :

value : The number of milliseconds since 1 January 1970 00:00:00.000 UTC (Unix epoch)

dateAsString : A date formatted as a string (see examples for more information)

year : The year value of the date. Note that month must also be provided, or the value will be interpreted as a number of milliseconds. Also note that values between 0 and 99 have special meaning. See the examples.

month : The month, in the range 0-11. Note that using values outside the specified range for this and the following parameters will not result in an error, but rather cause the resulting date to "roll over" to the next value. See the examples.

day :     Optional: The date, in the range 1-31.
hour :    Optional: The hour, in the range 0-23.
minute :  Optional: The minute, in the range 0-59.
second :  Optional: The second, in the range 0-59.
millisecond : Optional: The millisecond, in the range 0-999.
*/


/* 8.1: Create a new Date object :

To create a new Date object use the Date() constructor:

> with no arguments :
Date() creates a Date instance containing the current time (up to milliseconds) and date.

> with one integer argument :
Date(m) creates a Date instance containing the time and date corresponding to the Epoch time (1 January, 1970 UTC) plus m milliseconds. Example: new Date(749019369738) gives the date Sun, 26 Sep 1993 04:56:09
GMT.

> with a string argument :
Date(dateString) returns the Date object that results after parsing dateString with Date.parse.

> with two or more integer arguments :
Date(i1, i2, i3, i4, i5, i6) reads the arguments as year, month, day, hours, minutes, seconds, milliseconds and instantiates the corresponding Dateobject. 
Note that the month is 0-indexed in JavaScript,
so 0 means January and 11 means December. Example: new Date(2017, 5, 1) gives June 1st, 2017.


Exploring dates :

Note that these examples were generated on a browser in the Central Time Zone of the US, during Daylight Time,
as evidenced by the code. Where comparison with UTC was instructive, Date.prototype.toISOString() was used to show the date and time in UTC (the Z in the formatted string denotes UTC). 
*/

// Creates a Date object with the current date and time from the user's browser :
var now = new Date();
now.toString() === 'Mon Apr 11 2016 16:10:41 GMT-0500 (Central Daylight Time)'
// true
// well, at the time of this writing, anyway

console.log(now.toString());

console.log(now.toString()=== 'Wed Dec 11 2019 20:08:13 GMT-0800 (Pacific Standard Time)');


// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
var epoch = new Date(0);
epoch.toISOString() === '1970-01-01T00:00:00.000Z' // true

console.log(epoch.toISOString());


// Creates a Date object with the date and time 2,012 milliseconds after the Unix Epoch (i.e., '1970-01-01T00:00:02.012Z').

var ms = new Date(2012);
/* date2012.toISOString() === '1970-01-01T00:00:02.012Z' // true */

console.log(ms.toISOString());


// Creates a Date object with the first day of February of the year 2012 in the local timezone.

var one = new Date(2012, 1);

/* one.toString() === 'Wed Feb 01 2012 00:00:00 GMT-0600 (Central Standard Time)' */
// true

console.log(one.toString());


// Creates a Date object with the first day of the year 2012 in the local timezone.
// (Months are zero-based)

var zero = new Date(2012, 0);

/* zero.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)'
// true */

console.log(zero.toString());


// Creates a Date object with the first day of the year 2012, in UTC.

var utc = new Date(Date.UTC(2012, 0));

// utc.toString() === 'Sat Dec 31 2011 18:00:00 GMT-0600 (Central Standard Time)'
// // true

// utc.toISOString() === '2012-01-01T00:00:00.000Z'
// // true

console.log(utc.toString());


// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation

var iso = new Date('2012-01-01T00:00:00.000Z');

/* iso.toISOString() === '2012-01-01T00:00:00.000Z' // true */

console.log(iso.toISOString());

// for more : JS for professionals page 64




/********************************************/

// Convert to Date String :

var date1 = new Date();

console.log(date1.toDateString());

// Convert to GMT String :

var date1 = new Date();

console.log(date1.toGMTString());


// Section 8.6: Get the current time and date :
// book, page 71
console.groupEnd('Console');
//_____________________________________________

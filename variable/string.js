// Escape Sequences in Strings
/*  Two reasons to use escaping characters.
    1. To allow using characters that may not otherwise be able to type out, 
    such as a carriage return
      *) carriage return : returning the cursor to the first of the current line
      *) Line Feed : sends the cursor to the next line.
      UNIX does \n with only Line Feed, 
      while Windows uses CR / LF combination to implement it.

    2. To allow represent multiple quotes in a string without JavaScript misinterpreting.
*/
/*
code    Output

\'    single Quote
\"    double Quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    word boundary
\f    form feed

*/

// Concatenating String
let myStr = "This is the start. " + "This is the end";
let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence.";

// Length of a String
console.log("Jay Kwon".length);

//String Immutability
let myStr = "Bob";
myStr[0] = "j"; // Cannot be changed individually -> immutable
myStr = "Job"; // Can be reassigned.

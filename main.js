console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Create a function called hello
thats take a name
and return Hello + the name that insert 
return null if the name is empty string or null

Ex:  hello("") => null    
Ex:  hello("Jouza") => "HELLO Jouza !"
Ex:  hello("Alex") => "HELLO Alex !"
Ex:  hello(null) => null

*/

function hello(name) {
  // WRITE YOUR CODE UNDER THIS LINE  
  if(name === '' || name === null) // if(!name) would be more efficent in case name was not passed.
    return null;
  
  return 'Hello ' + name + ' !';

}


/* Q2:
Create a function called calculateTax
that take number of salees and the amount of tax
and return amount of sales you did + the amonut of tax you should pay
+ the amount of net sales left after the tax paid

Ex: calculateTax(500,0.16) 
=> "You got 500 JD from sales, you should pay 80 JD for tax and you will have 420 JD as net sales."
Ex: calculateTax(315,0.10) 
=> "You got 315 JD from sales, you should pay 31.5 JD for tax and you will have 283.5 JD as net sales."
Ex: calculateTax(100,0.15) 
=> "You got 100 JD from sales, you should pay 15 JD for tax and you will have 85 JD as net sales."
*/

function calculateTax(salesNumber, taxRate) {
  // WRITE YOUR CODE UNDER THIS LINE 
  var taxAmount = salesNumber * taxRate;
  var netSales = salesNumber - taxAmount;

  return 'You got ' + salesNumber + ' JD from sales, you should pay ' + taxAmount + ' JD tax and you will have ' + netSales + ' JD as net sales.';
}


/* Q3:
Using while
Create a function called repeatChar
that takes 2 parameters string and number,
and return the character number of times with space depends on the nubmer that pass
** Important: You should didn,t have extra space or comma at the end
** Important: the character one time capital letter and one time small letter if n
odd start with capital letter 
** Important: you should solve this question using while

Ex: repeatChar("a",2); => "a, A"
Ex: repeatChar("C",5); => "C, c, C, c, C"
*/

function repeatChar(str, number) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var output;
  var counter = 1;

  if(number % 2 !== 0) 
    str = str.toUpperCase();
  else 
    str = str.toLowerCase();

  output = str;

  while(counter < number) {
    if(str === str.toLowerCase())
      str = str.toUpperCase();
    else 
      str = str.toLowerCase();

    output += ', ' + str;
    
    counter++;
  }

  return output;
}


/* Q4:
Using recursion 
Create a function called stringToCapital
that takes a string 
and return the same string but convert it to upper case
** Important: you should solve this question using recursion
** Important: you should haven't any problem if there is a symbol

Ex: stringToCapital("My Name Is: Alex !") 
=> "MY NAME IS: ALEX !"
Ex: stringToCapital("Are you a student in coding ACADEMY by ORANGE ?") 
=> "ARE YOU A STUDENT IN CODING ACADEMY BY ORANGE ?"
*/

function stringToCapital(str) {
  // WRITE YOUR CODE UNDER THIS LINE         
  if(str.length === 0)
    return str.toUpperCase();

  // checks if the character is lowercase not uppercase nor a symbol, for more optimization
  // var char = str.slice(0, 1).toUpperCase();
  // char = /a-z/.test(char) ? char.toUpperCase() : char;

  return str.slice(0, 1).toUpperCase() + stringToCapital(str.slice(1));
}

// Good luck :)
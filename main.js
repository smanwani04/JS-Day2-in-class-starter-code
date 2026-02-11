/////// Variables Section ///////
const myName = "Serena Manwani"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////

var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// console.log(a);
// console.log(b);
// console.log("Example using var");
// testVar();
// console.log("Example using LET");
// testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[0].color} ${car[0].make} ${car[0].model}.`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${today.getFullYear()}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
// if (loggedIn) {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Welcome back!";
// } else {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Please log in";
// }
const result3Element = document.getElementById('result3');

loggedIn ? result3Element.innerHTML = "Welcome back!" : result3Element.innerHTML = "Please log in";


// //Sample code.  You can uncomment this to see how simple a ternaly operator can be
// loggedIn ? alert("welcome back") : alert("please log in");

// //section 2 -ternary operator to update the result3Element





//////// PART 4 - Arrow Functions////////
Greetings = (name = "Bob") => {
  return `Hello ${name}!`;
}

console.log(Greetings());

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
 



//////// PART 5 - Array methods////////

//Wrote this first but then realized you have to use arrow functions
// function printFruit() {

//     let resultElement = document.getElementById("result5");

//     //This line was causing it to print out all the fruits in the fruits array and not just ones that start with b
//     //resultElement.textContent = fruits;

//     //First filters fruits that start with "b", then maps to display them
//     const result = fruits.filter(checkB).map(createParagraph);

//     //function to check if it starts with b
//     function checkB(fruit) {
//       return fruit.toLowerCase().startsWith("b");
//     }
    
//     //adds those fruits to a paragraph tag
//     function createParagraph(fruit){
//       let p = document.createElement("p");
//       p.textContent = fruit;
//       // Append the list item to the ordered list
//       resultElement.appendChild(p);
//       return fruit;
//     }
//  }

function printFruit() {

  let resultElement = document.getElementById("result5");

  // Clear previous content
  resultElement.textContent = ""; 

  //First filters fruits that start with "b", then maps to display them
  const bFruits = fruits
        .filter(fruit => fruit.toLowerCase().startsWith("b"))
        .map(fruit => {
            let p = document.createElement("p");
            p.textContent = fruit;
            resultElement.appendChild(p);
            return fruit;
        });
}

 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
 myCar(car[0]);

 function myCar(car) {
  const {make, model, color} = car;
     var message = `I drive a ${color} ${make} ${model}`;
   
     document.getElementById("result6").textContent = message;
 }

//convert the myCar function to use destructuring







//////// PART 7 - Spread Operator////////

//Used the Date object and converted it to an ISO string, then extracted the date part to match the chosen format

const date = new Date().toISOString().split("T")[0];


const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
  const currentProduct = { 
    ...baseProduct, ... holidayPromo, lastUpdated: date

};
  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;
    
    try { 
      if(x.trim() == "") throw "EMPTY";
    if(isNaN(x)) throw "NOT A NUMBER";
      x = Number(x);
      if (x>15) throw "TOO HIGH";
      if (x<10) throw "TOO LOW";
      message.innerHTML = "Success";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
     } 
    finally {
      document.getElementById("part8-input").value = "";
    }
  }



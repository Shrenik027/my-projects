//!converting a Number to String

const age = 30;
const agestr = age.toString();
// console.log("Your Age is:" + agestr);

//Displayig Price

const price = 19.99;

// const displayprice = "The Price is $" + price.toString();
// const displayprice = `The Price is $${price.toString()}`;
//console.log(displayprice);

//using 'toString()' With different Bases

const decimalNum = 11;
const binarystr = decimalNum.toString(2);
const hexstr = decimalNum.toString(16);
//console.log(hexstr);

//Working With Bigint

const bigintNum = BigInt("9007172974375845784953");
// console.log(bigintNum.toString());

//!Formatting Currency

const productPrice = 49.955;
const Formatted = productPrice.toFixed(5);
//console.log(Formatted);

//Scientific Data

const piapprox = 3.14149;
const rounded = piapprox.toFixed(3);
// console.log(rounded);

//Calculating Body Mass Index (BMI)

const weightKg = 70;
const HeightM = 1.75;
const BMI = weightKg / HeightM ** 2;
//console.log(BMI.toFixed(1));

//!Scientific Data Representation

const avogadroNumber = 6.022149e23;
const ScirntificNotation = avogadroNumber.toExponential();
//console.log(ScirntificNotation);

const bum = 10;
const exponatedbum = bum ** 2; //10*10
//console.log(exponatedbum);

//!Converting User Input to Integer

const userinput = "42";
const userage = parseInt(userinput, 10);
//console.log(userage);

//Converting Binary data from a sensor

const sensordata = "1101";
const sensor = parseInt(sensordata, 2);
//console.log(sensor);

//Converting Price For an E-commerce Checkout

const checkoutprice = "$99.99";
const converted = parseFloat(checkoutprice.replace("$", ""));
// console.log(converted);

//Extracting Temp Data From a Weather API
const apiTempdata = "Temp:23.5°C";
const actual = parseFloat(apiTempdata.replace("Temp:", "").replace("°C", ""));

//console.log(actual);

//Calculte Grade Point Average (GPA)

const InputGPA = "9.5";
const parsedGPA = parseFloat(InputGPA);

// if (isNaN(parsedGPA)) {
//   console.log("Invalid GPA input");
// } else {
//   console.log(`youe GPA is ${parsedGPA}`);
// }

//Calculating Savings After a Transistion

const initialSavings = "1000";
const withdrawal = "hello";
const newsavings = parseFloat(initialSavings) - parseFloat(withdrawal);

if (isNaN(newsavings)) {
  console.log("Invalid Transistion");
} else {
  console.log(`Your new Saving is ${newsavings}`);
}

/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need an async function in your app.js file that awaits the calls to your function like the example below. You put all of your function calls within main each in its own try/catch block. and then you just call main().
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.
*/
const {
  getPeople,
  getPersonById,
  sameJobTitle,
  getPostalCodes,
  sameCityAndState,
} = require("./people");
const { listEmployees, sameIndustry, getCompanyById } = require("./companies");

async function main() {
  try {
    const peopledata = await getPeople();
    // console.log(peopledata);
  } catch (e) {
    console.log(e);
  }
  try {
    // await getPersonById("4a32bddc-b3f9-4427-9563-1d26b5b8f2fa");
    // await getPersonById(-1);
    // await getPersonById(1001);
    // await getPersonById();
    // await getPersonById("7989fa5e-5617-43f7-a931-46036f9dbcff");
  } catch (e) {
    console.log(e);
  }

  try {
    // sameJobTitle("Help Desk Operator");
    // sameJobTitle(); // Throws Error
    // sameJobTitle("farmer"); //Throws Error since there are not two people with that job title
    // sameJobTitle(123); // Throws Error
    // sameJobTitle(["Help Desk Operator"]); // Throws Error
    // sameJobTitle(true); // Throws Error
  } catch (e) {
    console.log(e);
  }
  try {
    // await getPostalCodes("Salt Lake City", "Utah"); // Returns: [84130, 84135, 84145]
    // await getPostalCodes(); // Throws Error
    // await getPostalCodes(13, 25); // Throws Error
    // await getPostalCodes("Bayside", "New York"); // Throws Error: There are no postal_codes for the given city and state combination 

  } catch (e) {
    console.log(e);
  }
  try {
    // await sameCityAndState("Salt Lake City", "Utah"); // Returns: ['Vonnie Faichney', 'Townie Sandey',  'Eolande Slafford']
    // await sameCityAndState(); // Throws Error
    // await sameCityAndState("    " , "      "); // Throws Error
    // await sameCityAndState(2, 29); // Throws Error
    // await sameCityAndState("Bayside", "New York"); // Throws Error: there are not two people who live in the same city and state

  } catch (e) {
    console.log(e);
  }
   try {
    // await listEmployees("Yost, Harris and Cormier") //Would return:{id:"fb90892a-f7b9-4687-b497-d3b4606faddf", name:"Yost, Harris and Cormier", street_address:"71055 Sunbrook Circle", city:"Austin", state:"TX", postal_code: "78715", industry:"Apparel" , employees: ["Jenda Rubens"]}
    // await listEmployees("Kemmer-Mohr") // Would return:{id:"74f11ba3-7253-4146-b5a8-2f7139fe50bf", name:"Kemmer-Mohr", street_address:"534 Lyons Drive", city:"Cincinnati", state:"OH", postal_code: "45999", industry:"Industrial Machinery/Components", employees:['Janessa Arpino', 'Antoni Bottjer']}
    // await listEmployees("Will-Harvey") //Would return:{id:"746d3cfe-c7b0-4927-ab0b-ecfaf1ef53f8", name:"Will-Harvey", street_address:"818 Russell Court", city:"Jackson", state :"MS", postal_code: "39296", industry:"Major Banks", employees: []}
    // await listEmployees('foobar') // Throws Error: No company name with foobar
    // await listEmployees(123) // Throws Error

   } catch (e) {
     console.log(e);
   }

   try {
    // await sameIndustry("Auto Parts:O.E.M."); 
    // await sameIndustry(43); // Throws Error
    // await sameIndustry(' '); // Throws error
    // await sameIndustry('Foobar Industry'); // Throws error No companies in that industry

   } catch (e) {
     console.log(e);
   }
   try {
     await getCompanyById("fb90892a-f7b9-4687-b497-d3b4606faddf"); //Returns: {id:"fb90892a-f7b9-4687-b497-d3b4606faddf", name:"Yost, Harris and Cormier", street_address:"71055 Sunbrook Circle", city:"Austin", state:"TX", postal_code:"78715", industry:"Apparel"}

    await getCompanyById(-1); // Throws Error 
    await getCompanyById(1001); // Throws Error 
    await getCompanyById(); // Throws Error
    await getCompanyById('7989fa5e-5617-43f7-a931-46036f9dbcff');// Throws company not found Error

   } catch (e) {
     console.log(e);
   }
   
  
}

// call main
main();

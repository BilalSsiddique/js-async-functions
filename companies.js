const { default: axios } = require("axios");

const { getPeople } = require("./people");

const getcompany = async () => {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const listEmployees = async (companyName) => {
  if (companyName !== undefined && typeof companyName === "string") {
    if (companyName.includes("    ") === false) {
      const dataa = await getcompany();
      const getPeoples = await getPeople();
      const filterCompany = dataa.filter((obj) => obj.name === companyName);
      if (filterCompany.length > 0) {
        const getCompanyObj = filterCompany[0];
        const getCompanyId = getCompanyObj.id;

        const getCompanyPeopleById = getPeoples
          .filter((obj) => obj.company_id === getCompanyId)
            .sort((a, b) =>
              a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
            ).map(({ first_name, last_name }) => first_name + " " + last_name);
        getCompanyObj.employees = getCompanyPeopleById;
        console.log(getCompanyObj);
      } else {
        console.log(`No company name with ${companyName}`);
      }
    }
  } else {
    console.log("undefined");
  }
};

// listEmployees("Yost, Harris and Cormier") //Would return:
// {id:"fb90892a-f7b9-4687-b497-d3b4606faddf", name:"Yost, Harris and Cormier", street_address:"71055 Sunbrook Circle", city:"Austin", state:"TX", postal_code: "78715", industry:"Apparel" , employees: ["Jenda Rubens"]}

// listEmployees("Kemmer-Mohr") // Would return:
// {id:"74f11ba3-7253-4146-b5a8-2f7139fe50bf", name:"Kemmer-Mohr", street_address:"534 Lyons Drive", city:"Cincinnati", state:"OH", postal_code: "45999", industry:"Industrial Machinery/Components", employees:['Janessa Arpino', 'Antoni Bottjer']}

// listEmployees("Will-Harvey") //Would return:
// {id:"746d3cfe-c7b0-4927-ab0b-ecfaf1ef53f8", name:"Will-Harvey", street_address:"818 Russell Court", city:"Jackson", state :"MS", postal_code: "39296", industry:"Major Banks", employees: []}

// listEmployees('foobar') // Throws Error: No company name with foobar
// listEmployees(123) // Throws Error

const sameIndustry = async (industry) => {
  if (industry !== undefined && typeof industry === "string") {
    if (industry.trim().length !== 0) {
      const dataa = await getcompany();
      const filterCompanies = dataa.filter((obj) => obj.industry === industry);
      if (filterCompanies.length > 0) {
        console.log(filterCompanies);
      } else {
        console.log("No companies in that industry");
      }
    } else {
      console.log("undefined");
    }
  } else {
    console.log("undefined");
  }
};

// sameIndustry("Auto Parts:O.E.M.");
//  sameIndustry(43); // Throws Error
//  sameIndustry(" "); // Throws error
//  sameIndustry("Foobar Industry"); // Throws error No companies in that industry

const getCompanyById = async (id) => {
  if (id !== undefined && typeof id === "string") {
    if (id.trim().length !== 0) {
      const dataa = await getcompany();
      const filterCompanyById = dataa.filter((obj) => obj.id === id);
      if (filterCompanyById.length > 0) {
        console.log(filterCompanyById);
      } else {
        console.log("company not found Error");
      }
    }
  }
  else{
    console.log('undefined')
  }
};

// getCompanyById("fb90892a-f7b9-4687-b497-d3b4606faddf");
// Returns:
// {i//d:"fb90892a-f7b9-4687-b497-d3b4606faddf", name:"Yost, Harris and Cormier", street_address:"71055 Sunbrook Circle", city:"Austin", state:"TX", postal_code:"78715", industry:"Apparel"}

//  getCompanyById(-1); // Throws Error
//  getCompanyById(1001); // Throws Error
//  getCompanyById();// Throws Error
//  getCompanyById('7989fa5e-5617-43f7-a931-46036f9dbcff');// Throws company not found Error

module.exports = {listEmployees,sameIndustry,getCompanyById};

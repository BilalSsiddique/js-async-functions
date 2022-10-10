const { default: axios } = require("axios");

const getPeople = async () => {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPersonById = async (id) => {
  if (id !== undefined && typeof id === "string") {
    const dataa = await getPeople();
    const filterId = dataa.filter((obj) => obj.id === id);
    const checkIfExists = filterId.length > 0 ? filterId : "person not found";
    console.log(checkIfExists);
  } else {
    console.log("undefined");
  }
};

const sameJobTitle = async (jobTitle) => {
  if (jobTitle !== undefined && typeof jobTitle === "string") {
    const dataa = await getPeople();
    const filterJobTitle = dataa.filter((obj) => obj.job_title === jobTitle);
    const checkIftitleExist =
      filterJobTitle.length >= 2 ? filterJobTitle : "Not 2 or Greater than2 ";
    console.log(checkIftitleExist);
  } else {
    console.log("undefined");
  }
};

const getPostalCodes = async (city, state) => {
  if (
    city !== undefined &&
    state !== undefined &&
    typeof city === "string" &&
    typeof state == "string"
  ) {
    const dataa = await getPeople();

    // function to handle case in-sensitive
    const titles = (cityState) => {
      const cityStateSplit = cityState.toLowerCase().split(" ");
      let titleCase = "";
      for (let i = 0; i < cityStateSplit.length; i++) {
        titleCase +=
          cityStateSplit[i][0].toUpperCase() + cityStateSplit[i].slice(1) + " ";
      }
      return titleCase;
    };
    const citys = titles(city).trim();
    const states = titles(state).trim();

    const filterPostalCodes = dataa
      .filter((obj) => obj.city === citys && obj.state === states)
      .map(({ postal_code }) => +postal_code);
    const sortFilterPostalCodes = filterPostalCodes.sort((a, b) => a - b);
    const checkIfPosExists =
      sortFilterPostalCodes.length > 0
        ? sortFilterPostalCodes
        : "There are no postal_codes for the given city and state combination";
    console.log(checkIfPosExists);
  } else {
    console.log("undefined");
  }
};

// getPostalCodes("Salt Lake City", "Utah"); // Returns: [84130, 84135, 84145]
//  getPostalCodes(); // Throws Error
//  getPostalCodes(13, 25); // Throws Error
//  getPostalCodes("Bayside", "New York"); // Throws Error: There are no postal_codes for the given city and state combination

const sameCityAndState = async (city, state) => {
  if (
    city !== undefined &&
    state !== undefined &&
    typeof city === "string" &&
    typeof state == "string"
  ) {
    if (city.includes("    ") === false && state.includes("    ") === false) {
      const dataa = await getPeople();

      // function to handle case in-sensitive
      const titles = (cityState) => {
        const cityStateSplit = cityState.toLowerCase().split(" ");
        let titleCase = "";
        for (let i = 0; i < cityStateSplit.length; i++) {
          titleCase +=
            cityStateSplit[i][0].toUpperCase() +
            cityStateSplit[i].slice(1) +
            " ";
        }
        return titleCase;
      };
      const citys = titles(city).trim();
      const states = titles(state).trim();

      const filterpeople = dataa
        .filter((obj) => obj.city === citys && obj.state === states)
        .sort((a, b) =>
          a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
        )
        .map(({ first_name, last_name }) => first_name + " " + last_name);
      const checkIfPeopleExist =
        filterpeople.length >= 2
          ? filterpeople
          : "there are not two people who live in the same city and state ";
      console.log(checkIfPeopleExist);
    } else {
      console.log("undefined");
    }
  } else {
    console.log("undefined");
  }
};

//  sameCityAndState("Salt Lake City", "Utah"); // Returns: ['Vonnie Faichney', 'Townie Sandey',  'Eolande Slafford']
//  sameCityAndState(); // Throws Error
//  sameCityAndState("    " , "      "); // Throws Error
//  sameCityAndState(2, 29); // Throws Error
//  sameCityAndState("Bayside", "New York"); // Throws Error: there are not two people who live in the same city and state

module.exports = {
  getPeople,
  getPersonById,
  sameJobTitle,
  getPostalCodes,
  sameCityAndState,
};

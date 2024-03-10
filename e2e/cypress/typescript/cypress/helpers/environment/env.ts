export const getEnvironment = () => {
  console.log("ENVIRONMENT -->", Cypress.env("ENVIRONMENT"));

  if (
    Cypress.env("ENVIRONMENT") == null ||
    Cypress.env("ENVIRONMENT") == undefined ||
    Cypress.env("ENVIRONMENT") === ""
  ) {
    throw new Error("ENVIRONMENT variable is not set");
  }
};

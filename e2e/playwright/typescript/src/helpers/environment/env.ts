import * as dotenv from "dotenv";

export const getEnvironment = () => {
  if (process.env.ENVIRONMENT) {
    dotenv.config({
      override: true,
      path: `src/helpers/environment/.env.${process.env.ENVIRONMENT}`,
    });
  } else {
    throw new Error("ENVIRONMENT variable is not set");
  }
};

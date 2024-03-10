# Use an official cypress image with node runtime as a parent image
FROM cypress/included:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy key files and directories to the working directory
COPY cypress /usr/src/app/cypress
COPY environment /usr/src/app/environment
COPY scripts /usr/src/app/scripts
COPY cypress.config.ts .cypress-cucumber-preprocessorrc  /usr/src/app/
COPY package.json yarn.lock tsconfig.json /usr/src/app/


ENTRYPOINT ["/usr/src/app/scripts/run_tests.sh", "Run the tests"]


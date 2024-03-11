# Use an official Python runtime as a parent image
FROM node:20.11
## add global playwright with browser dependencies
RUN npx -y playwright@1.41.1 install --with-deps

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the key directory and files contents into the container
COPY package.json ./
COPY yarn.lock ./
COPY config /usr/src/app/config
COPY src /usr/src/app/src
COPY scripts /usr/src/app/scripts

# Install dependecies using yarn from lockfile
RUN yarn install --frozen-lockfile

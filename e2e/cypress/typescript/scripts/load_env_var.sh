#!/bin/bash

# Define the environment variable name to use to determine the environment
# and path to the environment files directory
# and the path to the script directory
ENV_VAR="CYPRESS_ENVIRONMENT"
ENV_DIR="./environment"

echo "Start loading environment variables with script script_load_env_var.sh."

# Get the value of the environment variable to define the target environment and later fetch configuration
environment="${!ENV_VAR}"

# Check if the environment variable is set
if [ -z "$environment" ]; then
  echo "Error: Environment variable for environment '$ENV_VAR' is not set."
  exit 1
else  # Colon added instead of semicolon
    echo "Environment variable for environment '$ENV_VAR' exists with value '$CYPRESS_ENVIRONMENT'."
fi

# Define the path to the environment file based on the environment
env_file="$ENV_DIR/.env.$environment"

# Check if the environment file exists
if [ ! -f "$env_file" ]; then
    echo "Error: Environment file '$env_file' does not exist."
    exit 1
fi


# Read the environment file and set the variables, ignoring lines starting with '#'
while IFS='=' read -r key value; do
    if [[ ! $key =~ ^\s*# && ! -z $key ]]; then
        key=$(echo $key | tr -d '[:space:]')
        value=$(echo $value | tr -d '[:space:]')
        export "$key"="$value"
    fi
done < <(grep -v '^#' "$env_file")

echo "Loaded successfully environment variables from '$env_file' for environment '$environment'."


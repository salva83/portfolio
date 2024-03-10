#!/bin/bash
set -e
image_name="test_cypress_ts"
export image_name=${image_name}
echo "Start building docker image named ${image_name}"
# env variables and configuration
export TEST_SUITE_TAGS=""
export BASE_URL="https://example.cypress.io/"
export DOCKER_REPORT_PATH_ENV_VAR="/usr/src/app/reports"
#parent_dir="$(dirname "$(realpath "$0")")"
parent_dir="$(dirname "$0")"
export REPORT_PATH_LOCAL="${parent_dir}/reports"
export RETRY_ATTEMPTS=0
export CYPRESS_ENVIRONMENT="qa"

# Move to project root folder assuming this script and user are in "/scripts" folder

docker build -t ${image_name} ./
echo "Done building docker image"
echo "Start running docker image named ${image_name}"
docker run \
  -v "$(pwd)/reports:/usr/src/app/reports" \
  -e REPORT_PATH_MOUNTED_VOLUME=${DOCKER_REPORT_PATH_ENV_VAR} \
  -e TEST_SUITE_TAGS=$TEST_SUITE_TAGS \
  -e RETRY_ATTEMPTS=${RETRY_ATTEMPTS} \
  -e CYPRESS_ENVIRONMENT=${CYPRESS_ENVIRONMENT} \
  -e BASE_URL=${BASE_URL} \
  ${image_name}
echo "Done running docker image ${image_name}"
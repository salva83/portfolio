#!/bin/bash
set -e
echo "Start building docker image named bn"
# env variables and configuration
export TEST_SUITE_TAGS=""
export BASE_URL=""
export DOCKER_REPORT_PATH_ENV_VAR="/usr/src/app/reports"
parent_dir="$(dirname "$(realpath "$0")")"
export REPORT_PATH_LOCAL="${parent_dir}/reports"
export RETRY_ATTEMPTS=0
export ENVIRONMENT="qa"

# Move to project root folder assuming this script and user are in "/scripts" folder
cd ..
docker build -t bn ./
echo "Done building docker image"
echo "Start running docker image named bn"
docker run \
  -v "$(pwd)/reports:/usr/src/app/reports" \
  -e REPORT_PATH_MOUNTED_VOLUME=${DOCKER_REPORT_PATH_ENV_VAR} \
  -e TEST_SUITE_TAGS=$TEST_SUITE_TAGS \
  -e REPORT_PATH_LOCAL=${REPORT_PATH_LOCAL} \
  -e BASE_URL=${BASE_URL} \
  -e RETRY_ATTEMPTS=${RETRY_ATTEMPTS} \
  -e ENVIRONMENT=${ENVIRONMENT} \
  bn \
  ./scripts/run_all_test_report.sh
echo "Done running docker image"
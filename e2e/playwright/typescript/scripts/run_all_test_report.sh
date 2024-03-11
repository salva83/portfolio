#!/bin/bash
echo "Running script run_all_test_report.sh"
echo "Running tests with reports"

cd ../src|| cd src

# Generate date and time placeholder for report filename
current_datetime=$(date +"%Y-%m-%d_%H-%M-%S")

echo "Test run started: $current_datetime"
echo "Report will be available in docker under folder: $REPORT_PATH_MOUNTED_VOLUME"
echo "Report will be available in local folder under: $REPORT_PATH_LOCAL"

# Run tests generating a report, save report in reports folder
# Scope can be defined by tags, e.g.: "functional" from docker_build_and_run.sh script
# empty string "" means all tests will be run
yarn test

echo "Completed test run and script run_all_test_report.sh"
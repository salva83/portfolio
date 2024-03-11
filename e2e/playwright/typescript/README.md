# Introduction

## What is this?

This document wraps the installation and run of the project. It also servers as a guide for the project and structure.

The purpose of this project is to provide a simple way to test the proposed site, from an e2e perspective.

## Table of Contents

1. [Requirements](#1-requirements)
2. [Installation and run](#2-installation-and-run)
3. [Review results](#3-review-results)
4. [FAQ](#4-faq)

### 1. Requirements

To run this project you will need the following, depending on the approach you choose:

### 1.1 Docker approach:

- Linux/MacOS environment, as the installation and run has been automated for those environments with bash scripts.Untested on windows.
- Docker installed in your environment.
- Internet connection to download the docker image and run the tests.

### 2. Installation and run

### 2.1 Source code

Please checkout project from repository or uncompres provided copy.

#### 2.1.1. Project structure

```
project_root/
│
├── config/
│   └── cucumber.js
│
├── config//
│   └── vscode_debug/
│       └──launch.json
│
├── node_modules/
│
├── reports/
│   ├── html/
│   │   ├── cucumber-html-report.html
│   │   └── index.html
│   ├── json/
│   │   └── cucumber-json-report.json
│   └──screenshots/
│
├── scripts/
│   ├── docker_build_and_run.sh
│   └── run_all_test_report.sh
│
├── src
│   ├── helpers/
│   │   ├── browsers/
│   │   │   └── browserManager.ts
│   │   ├── environment/
│   │   │   ├── .env.development
│   │   │   ├── ...
│   │   │   ├── .env.staging
│   │   │   └── env.ts
│   │   ├── report/
│   │   │   └── report.ts
│   │   └── types/
│   │       └── env.d.ts
│   │
│   ├── hooks/
│   │   ├── hooks.ts
│   │   └── pageFixtures.ts
│   │
│   ├── test/
│   │   ├── features/
│   │   │   ├── ...
│   │   │   └── landing.feature
│   │   ├── locale/
│   │   │   ├── ...
│   │   │   └── xxxxx.ts
│   │   ├── pages/
│   │   │   ├── ...
│   │   │   └── xxxxxPage.ts
│   │   └── steps/
│   │       ├── ...
│   │       └── xxxxxSteps.ts
│   │
│   └── utils/
│       ├── constants.ts
│       ├── parametersProcessor.ts
│       └── sharedSelectors.ts
│
├── .eslintrc.json
├── .gitignore
├── Dockerfile
├── package.json
├── README.md
├── tsconfig.json
└── yarm.lock
```

### 2.2. How do I install and run this project in Docker?

#### 2.2.1. Docker approach

#### 2.2.1.1 Docker summarised process

Once retrieved the code:

1. Navigate to the "scripts" folder from terminal.

```bash
cd scripts
```

2. Grant permissions to script

```bash
chmod +x docker_build_and_run.sh
```

3. Run the script `docker_build_and_run.sh` to install and run the container with the tests.

```bash
./docker_build_and_run.sh
```

4. Review the results by opening the report file generated under the folder `reports/` as a html file.

#### 2.2.1.2 Detailed process and other scripts

#### 2.2.1.2.1 Scripts permissions

1. Navigate to the "scripts" folder.

```bash
cd scripts
```

2. From the terminal, grant permissions to the script `docker_build_and_run.sh` as it will be used to trigger install
   and run of the Docker container and tests.

```bash
chmod +x docker_build_and_run.sh
```

3. From the terminal, grant permissions to the script `run_all_test_report.sh` as it will be used to trigger the run
   of tests and generation of reports.

```bash
chmod +x run_all_test_report.sh
```

With the above steps completed, you are ready to perform the installation and run for first time.

#### 2.2.1.2.2 First time installation and run

The mentioned script `docker_build_and_run.sh` will install the basics and run the container with the tests.<br>
Run from the terminal

```bash
./docker_build_and_run.sh
```

#### 2.2.1.2.3 Run after first installation

Same script `docker_build_and_run.sh` can be run again to update and run the container with the tests.
Docker will identify phases that needs to be re-run to have up to date container with latest changes.

### 3. Review results

Once the tests have been run, the results can be reviewed by opening the report file generated under the folder
`reports/` as a html file.

### 4. FAQ

#### 4.1. Which tests are run by default in which environment?

By default all tests are run, but you can run specific by passing the desired tags.
The environment is set by the `ENVIRONMENT` environment variable. In the scripts is configured as "qa".

#### 4.2. How do I run specific tests?

You can run specific tests by using tags defined BDD by setting the corresponding conditions on
`TEST_SUITE_TAGS`.
Current tags are described in section 4.8.

#### 4.3. Code quality and standards

It has been added Eslint and prettier to run code quality checks

#### 4.4. How do I run code quality and standards checks?

To run Eslint from terminal

```bash
yarn lint
```

To run prettier from terminal

```
yarn format
```

#### 4.5. Possible issues

##### 4.5.2. Missing environment variable

Please check if has been set `ENVIRONMENT` in the system to the correct values

##### 4.5.2. Docker container is not running

Check if the docker application/ service is currently running

##### 4.5.3. Report file is not written in target folder

Check if the folder is accessible and has write permissions.
Check if during docker run, on MacOsx, is asked for permissions through a system pop-up window.
Check for failure during execution.

#### 4.6. How do I uninstall this project in Docker?

General instructions can be followed from official Docker documentation https://docs.docker.com/engine/reference/commandline/image_rm/

#### 4.7. Further improvements

Which are the possible improvements for this project?

- TBD


#### 4.8 Parameters/ Environment variables and usage

| Parameter / Env. variable  | Mandatory arg | Default Value / Default configuration | Description                                                                                                            |
| -------------------------- | ------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ENVIRONMENT                | Y             | "testing"                             | Target environment to run the tests against. Supported values: qa, qa_local, development, staging, testing, production |
| BASE_URL                   | N             |        | Base URL for the application under test                                                                                |
| TEST_SUITE_TAGS            | N             |                                       | Specify tags to filter test suites (e.g., "@e2e,@moisturizers,@sunscreens") using logic from cucumber tag expressions               |
| DOCKER_REPORT_PATH_ENV_VAR | N\*           | /usr/src/app/reports                  | Path in the Docker container to store test reports. Configured in scripts                                              |
| REPORT_PATH_LOCAL          | N\*           | ${parent_dir}/reports                 | Local path to store test reports (replace ${parent_dir} with the actual directory). Configured in scripts              |
| BROWSER                    | N             | "chrome"                              | Browser selection value, default is chrome. Supported values: chrome, firefox, webkit. Handled with environments       |
| RETRY_ATTEMPTS             | N             | 0                                     | Number of retries for failed tests                                                                                     |

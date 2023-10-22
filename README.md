# Test Script README

This README provides an overview of a test script for mobile application testing using APPIUM and MochaJs.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Test Scenarios](#test-scenarios)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This test script is designed to perform various test scenarios on a mobile application. It uses [insert your chosen testing framework/library here] for automating interactions with the application.

## Prerequisites

Before running the test script, you should have the following:

- appium server
- nodejs
- rooted device
- adb

## Test Scenarios

The test script covers the following test scenarios:

### Insert Contact

- Click on "Add Contact."
- Enter the name.
- Enter the last name.
- Enter the city.
- Enter the email.
- Enter the phone.
- Click on the date.
- Click on a specific date.
- Click on "OK."
- Click on "Save."

### Delete Contact

- Click on the delete icon.
- Click on "Yes" to confirm the delete.

### Insert Contact Missing Fields

- Click on "Add Contact."
- Enter the name.
- Enter the last name.
- Enter the city.
- Enter the email.
- Click on the date.
- Click on a specific date.
- Click on "OK."
- Click on "Save."
- Verify that it returns to the ListActivity.

### Insert Wrong Email Address

- Enter an incorrect email address.
- Enter the phone.
- Click on "Save."
- Verify that it does not return to ListActivity.

## Usage

To run the test script, follow these steps:

1. install appium server
```javascript
npm insall appium -g
```
2. run appium server on powershell
```javascript
appium -p 4724
```
3. install dependencies
```javascript
npm install
```
4. run the tests
```javascript
npm run dev
```


## License

This project is licensed under the [MIT].

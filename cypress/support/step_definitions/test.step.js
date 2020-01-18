import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const functions = require('../functions/test.function.js');

    Given('an API route to search a placeholder', () => {
        functions.testRest2();
    });
    When ('Test',() => {
        console.log('chegay')     
    });


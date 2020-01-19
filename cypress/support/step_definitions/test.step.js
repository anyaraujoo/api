import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const functions = require('../functions/test.function.js');

Given('that I search for the user by id', () => {
    functions.getUser();
});
Then('I will be able to add the user to the database', () => {
    functions.postUser();
});


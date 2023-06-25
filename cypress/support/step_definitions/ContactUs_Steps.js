/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_objects/ContactUs_PO";

const contactUsPage = new ContactUs_PO();

When("I type a first name", () => {
  contactUsPage.type_Firstname();
});

When("I type a last name", () => {
  contactUsPage.type_Lastname();
});

When("I enter an email address", () => {
  contactUsPage.type_email();
});

When("I type a comment", () => {
  contactUsPage.type_comment();
});

When("I click on the submit button", () => {
  contactUsPage.clickOn_Submit_Button();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    contactUsPage.validate_SuccessfulMessage();
  }
);

Then(
  "I should be presented with an unsuccessful contact us submission message",
  () => {
    contactUsPage.validate_UnsuccessfulMessage();
  }
);

When("I type a specific first name {string}", (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});

When("I type a specific last name {string}", (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});

When("I type a specific email address {string}", (email) => {
  cy.get('[name="email"]').type(email);
});

When(
  "I type a specific word {string} and number {int} within the comment input field",
  (word, number) => {
    cy.get('textarea[name="message"]').type(word + " " + number);
  }
);

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    contactUsPage.type_Firstname_lastname(firstName, lastName);
  }
);

When(
  "I type an email address {string} and a comment {string}",
  (email, comment) => {
    contactUsPage.type_email_comment(email, comment);
  }
);

Then("I should be presented with header text {string}", (message) => {
  contactUsPage.validate_OutlineScenarioSuccessfulMessage(message);
});

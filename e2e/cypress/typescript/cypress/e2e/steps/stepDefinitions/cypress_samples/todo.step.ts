import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoPage from "../../../steps/pages/cypress_samples/TodoPage";

const todoPage = new TodoPage();
Given("I go to the TODO page", function () {
  todoPage.open();
});

Given("I see todos in the header", function () {
  todoPage.todoHeaderIsVisible();
});

Given("I can enter text pay in the textbox", function () {
  todoPage.fillElementForList("pay");
});

When("I submit the entry with enter", function () {
  todoPage.addItemToList();
});

Then("the element is added into the list", function () {
  todoPage.payElementIsVisible();
});

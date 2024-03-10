@cypress_samples
Feature: As I user I want to check the TODO page so I get a good user experience

    Background:
    Given I go to the TODO page
    And I see todos in the header

    Scenario: User lands on the TODO and types an element into the todo list
    Given I can enter text pay in the textbox
    When I submit the entry with enter
    Then the element is added into the list
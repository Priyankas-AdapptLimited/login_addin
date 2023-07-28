Feature: Electron app with webdriverio

  Scenario Outline: As a user, User launch the electron app

    Given I run the app
    When launch the electron app
    Then I should assert the content of the body

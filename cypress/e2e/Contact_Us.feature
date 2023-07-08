@contact-us @regression

Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission (without an email)
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "s@gmail.com"
        And I type a specific word "test" and number 567 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke @t

    Scenario Outline: Validate Contact Us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress    | comment        | message                      |
            | Firstna   | Firstla  | first@gmail.com | first comment  | Thank You for your Message!  |
            | Secondna  | Secondla | invalidemail    | second comment | Error: Invalid email address |
            | Thirdna   | Thirdla  | third@gmail.com | third comment  | Thank You for your Message!  |

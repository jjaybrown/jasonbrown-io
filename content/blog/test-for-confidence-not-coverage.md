---
external: false
title: "Test for confidence not coverage"
description: "Engineering teams are still targeted on lines of code covered by a test. This silly method of validating code confidence costs time, money, customers and engineering cycles. Let's stop using it."
date: 2024-02-09
---

In software engineering, the goal of testing should be gaining confidence, not just achieving a high percentage of line coverage. While conventional testing methodologies such as unit testing is important for identifying issues within business logic, they don't always provide a comprehensive view of system reliability. Unit testing should be measuring the input/output of data - not functionality.

Confidence in this context refers to the ability to release software without concern. It's about being certain that the software will behave as expected in a variety of scenarios, and that it won't fail under stress or during critical moments. This kind of confidence can only be achieved through thorough and thoughtful testing that goes beyond simply ticking off lines of code.

It's important to remember that software is intended to solve real-world problems, and therefore, it needs to be tested in conditions that mimic real-world scenarios. This might involve integration testing to ensure different components of the software work well together, or stress testing to make sure the software can handle high loads.

## Customers as testers

The approach of using customers as testers has been widely popularised by influential software engineering professionals such as Eric Ries, author of "The Lean Startup". Ries suggests that by releasing a minimum viable product (MVP) and iterating on it based on customer feedback, companies can avoid spending time and resources on features or products that won't meet market needs. This approach is centered around learning as quickly as possible what customers want and making changes accordingly. It promotes the idea that no amount of testing within an organisation can substitute for direct customer feedback. While this approach may seem risky, it is a way to ensure the product is being developed with the end user in mind, ultimately increasing the chances of product success.

This customer-centric testing approach aligns perfectly with the concept of Agile development, which advocates for adaptive planning, evolutionary development, early delivery, and continual improvement, while encouraging rapid and flexible responses to change.

In implementing this approach, one key strategy is the deployment of beta versions of the software to a select group of users who can provide valuable feedback. These users, often termed as beta testers, can identify bugs or usability issues that the software development team may have overlooked.

Therefore, the use of customers as testers not only helps in identifying potential issues but also assists in understanding the market needs better, leading to a more successful and user-friendly product.

## Testing as a customer

Whilst running tight feedback loops with actual customers (as described by Eric Ries) is valuable for testing product success. It doesn't build confidence in code and therefore an engineer cannot release to production without hesitation.

End-to-end user flow testing, particularly when using tools like [Playwright](https://playwright.dev/), provides greater confidence customer journeys and flows are correct. It simulates user interactions with the application in a way that unit testing and other non-customer centric methods can't replicate.

Kent Dodds, a well-known advocate for testing practices, often emphasizes the importance of such testing approaches.

> Tests are all about giving us the confidence we need to make changes to our code. You get that confidence by writing tests with a high level of user interaction.

### End-to-end testing

Automate everything. Functional testing is often carried out by engineers or QA teams and their focus tends to be on documenting critical flows, but rarely automating these interactions. 

As a minimum requirement you should seek to automate key customer flows and by following the approach described by Kent Dodds and others, you gain confidence that a broken test would have meant an unhappy customer.

Adopting automation requires a determination of what should be interactive and how to identify it through automation. __Avoid brittle tests by not using class identifiers or HTML nesting selectors__, instead utilise `data-test-ids` which can be used as landmarks within your UI for automation.

The goal is to create landmarks throughout the customer journey that a customer would interact with. You can also utilise HTML attributes for accessibility as your landmarks. These avoid the brittleness mentioned above and ensure you and your team adopt good accessibility practises.

End-to-end testing shouldn't happen at the end of your workflow, adopt a way of working which integrates tests as earlier as possible:
- Run tests during pre-commit hooks (focus on lean, business critical tests otherwise these will be ignored quickly!)
- Use [Wallabyjs](https://wallabyjs.com) as part of your IDE to validate tests in real-time
- Github actions or automated workflows on pull-requests/merge-requests

## Closing

Whilst methodologies for testing have provided guidance and can be argued to improve testing practises, they've often been misunderstood either by management (you were thinking it) or by engineers trying to do the right thing without an example of "good".

If you want to continue using test-driven-development (TDD) or behaviour-driven-development (BDD) with cucumber syntax, go for it! Just don't count the lines you cover.

What's important is testing from the outside edges of your application, interacting as a customer might. Tests can be powerful, if they get out of your way and become the silent superheroes waiting to jump in when something bad might happen.

__Always release on a Friday at 5:01pm.__
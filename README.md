
# Project: Frontend for a Company Catalog Web Application

## Objective
To demonstrate my web application development skills to potential employers.

## Scope
- Frontend: Angular 17
- Backend: Java 17, Spring Boot, Hibernate, Liquibase (hosted separately in the same GitHub account)
- Database: PostgreSQL (for Database backup loading - https://drive.google.com/drive/folders/1CdQfjHnL1k06C6IhJvxfW__enuskEPK1?usp=drive_link )

## Description
The project is a catalog where users can create a web page for their company. The page is designed as a comprehensive landing page with detailed information about the company and commercial offers. Users can search for companies based on geolocation and various characteristics. The application is currently in development.

## Current Frontend Features
- Template-Based Development: The frontend development did not start from scratch. Initially, I purchased a real estate catalog template and am repurposing it into a company catalog for a specific niche.
- CompanyFullDataComponent: Working on creating a detailed company information page.
    - Implemented data retrieval from the backend and rendering on the page.
    - Created functionality for opening and browsing photos in a modal window.
    - Displayed company offers and navigated through offers using corresponding links on the page.
    - Added a button that reveals the full phone number of the company to track conversions of page visitors wanting to call.
    - Displayed company characteristics with values shown on the page from the reference by key (implemented via an async pipe).
    - Initially, descriptions and characteristics are shown in a truncated form. Clicking "show more" reveals the full information.
    - Implemented caching on the frontend for the characteristics reference.

## Planned Features
- CompanyFullDataComponent:
    - Display offer characteristics.
    - Set up reviews for the overall application.
    - Overall Application:
- Create a form for searching companies by characteristics and geolocation.
    - Create a user dashboard.
    - Set up billing (online payment processing).
    - Create a form for publishing company information.
    - Implement authentication via Keycloak.
    - Adaptation for mobile devices



#
#
#
#
#
#
#

# CATALOG CLIENT

This projeckt is as an Example of my skills

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

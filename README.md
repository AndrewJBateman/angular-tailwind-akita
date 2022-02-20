# :zap: Angular Tailwind Akita

* Angular app using [Akita State Management](https://datorama.github.io/akita/) & [Tailwindcss](https://developers.google.com/chart/) components to display API data
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-tailwind-akita?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-tailwind-akita?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-tailwind-akita?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-tailwind-akita?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Tailwind Akita](#zap-angular-tailwind-akita)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* API data displayed in a responsive grid of cards styled with Tailwind. Clicking on a card toggles a modal to open/close with the full API post data
* TBA: About and Contact pages give more information on app using Tailwind CSS cards
* Angular 12+ has built-in Tailwind support
* To build for production Tailwind’s purge option is used to tree-shake unused styles and optimize final build size.
* [Free svg site](https://freesvg.org/) for svgs

## :camera: Screenshots

![Angular page](./img/home.jpg)

## :signal_strength: Technologies

* [Angular framework v13](https://angular.io/)
* [@ngneat operator until-destroy v9](https://github.com/ngneat/until-destroy/#use-with-ivy) to unsubscribe from observables when component destroyed, instead of using Angular ngDestroy lifecycle
* [Akita State Management for JS v7](https://datorama.github.io/akita/)
* [Akita Ng Entity Service v7](https://datorama.github.io/akita/docs/angular/entity-service/)
* [Reactive Extensions Library for Javascript rxjs v7](https://rxjs.dev/)
* [@ngneat/tailwind v7](https://www.npmjs.com/package/@ngneat/tailwind) Angular Tailwind CSS Schematics
* [Tailwindcss v3](https://tailwindcss.com/) CSS framework

## :floppy_disk: Setup

* Run `npm i` to install dependencies.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run build` for a production build with css purging.
* The build artifacts will be stored in the `dist/angular-tailwind-akita` directory.

## :wrench: Testing

* Run `ng test` to run Jasmine unit tests via [Karma](https://karma-runner.github.io). Currrently 9/9 tests pass
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Currently 0 tests so all pass

## :computer: Code Examples

* t

```typescript
t
```

## :cool: Features

* TBD Lazy-loading of About and Contact pages
* Tailwind build for production css purge results in a very small styles bundle

## :clipboard: Status & To-Do List

* Status: Part working. 
* To-Do: Complete about and contact pages etc. Consider updating to Angular13, firebase9 etc. but will require adjustments to module imports etc.

## :clap: Inspiration

* [Akita docs](https://datorama.github.io/akita/docs/store)
* [SyncCollection in Akita Collection Service too expensive?](http://5.9.10.113/59918174/synccollection-in-akita-collection-service-too-expensive)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com

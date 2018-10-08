# Mutual rating app 

Mutual rating app on holochain network

![GitHub last commit](https://img.shields.io/github/last-commit/HoloDen/mutual-rating.svg)
![GitHub](https://img.shields.io/github/license/HoloDen/mutual-rating.svg)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Ensure holochain-proto (at least version 26) is installed on your machine by running. 

```
hcd -v
```

Subsequent steps also assumes npm/yarn is installed.

### Installing

Install the javascript/typescript packages with

```
npm install
```
Build the Holochain dna using

```
npm run hc:build
```
and build the UI with
```
npm run build
```

The app can now be started for development purposes using
```
npm run hc:dev
```
and opening the browser to http://localhost:4141 


## Folder structure

Both ``hcdev`` and ``React / Redux`` require certain folder structer for compilation. Below is a quick description of folders
```
app
├── @types          // Types definitions for typescript
├── build           // Compiled code folder
│   └── dna         // - DNA compiled from typescript
│   └── ui          // - ui compiled from React / Redux
├── config          // Config files for compilators
├── dna-scr         // Source code of holochain DNA, contains DNA, Zomes and schemas
├── scripts         // Scripts for compilers
├── test            // Tests folder
├── ui-src          // Source code of a front-end
│   └── public      // Static files
│   └── src         // React / Redux app
└── index.js
``` 


## Running the tests

Run holochain test using

```
npm run hc:build && npm run hc:test
```

----

Run jest front-end tests using 
```
npm run test
```

## Built With

* [Holochain](https://github.com/holochain/holochain-proto)
* [Holochain template](https://github.com/holochain/hc-ts-template)
* [Typescript](https://github.com/Microsoft/TypeScript)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)

## Authors


## License

This project is licensed under the GPL-3 License - see the [LICENSE.md](LICENSE.md) file for details


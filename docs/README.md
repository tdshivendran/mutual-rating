# Mutual rating app 

Mutual rating app on holochain network

![GitHub last commit](https://img.shields.io/github/last-commit/HoloDen/mutual-rating.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure holochain-proto (at least version 26) is installed on your machine by running. 

```
hcd -v
```

Subsequent steps also assumes npm/yarn is installed.

### Installing

Install the javascript packages with

```
cd frontend
npm install
```
Start frontend

```
npm start
```
Start backend HC server on port 4141 (in a new terminal window)
```
cd backend
hcdev web 4141
```

The app will be served at `http://localhost:3000 `. Frontend will hot reload, backend needs hcdev server restart after each change to the code.


## Folder structure

Both ``backend`` and ``frontend`` require certain folder structer for compilation. Below is a quick description of folder structure:
```
app
├── frontend       // Source code of a front-end
│   └── public     // Static files
│   └── src        // React / Redux app
├── backend        // Source code of a back-end
│   └── dna        // Holochain DNA folder
│   └── test       // HC tests
│   └── ui         // Frontend source if served on port 4141
└── docs
``` 


## Built With

* [Holochain](https://github.com/holochain/holochain-proto)
* [Create-react-app](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)

## Authors


## License

This project is licensed under the GPL-3 License - see the [LICENSE.md](LICENSE.md) file for details


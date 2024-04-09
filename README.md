# ICP Development Environment with Azle and React

This template gives you everything you need to build a full-stack Web3 application on the [Internet Computer](https://internetcomputer.org/).
It includes a frontend built with Vite and React, and a backend written in JS/TS (Azle).

## Get started with one click:
### Locally:

Make sure you have you have the latest version of Docker (e.g. >25) and VS Code installed and running, then click the button below

[![Open locally in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/fxgst/azle-react)

### In your browser:

In Gitpod 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fxgst/azle-react/)

or GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/fxgst/azle-react/?quickstart=1)



## 🚀 Develop

When the editor opened, run the following commands to deploy the smart contract and start a development server:

```sh
npm install # Install project dependencies
dfx start --clean # Start the local ICP node
dfx deploy # Deploy smart contract locally
```

The canister will be reachable under `http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943`.
Call the canister using e.g., `curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/contacts` for HTTP endpoints and `dfx canister call backend <method>` for Candid endpoints.
The frontend will update automatically as you save changes. 
To redeploy the smart contract, run `dfx deploy`.

When ready, run `dfx deploy --ic` to deploy your application to the ICP mainnet.

## 🛠️ Technology Stack

- [Azle CDK](https://demergent-labs.github.io/azle/): the Canister Development Kit for JS/TS
- [Vite](https://vitejs.dev/): high-performance tooling for front-end web development
- [React](https://reactjs.org/): a component-based UI library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types
- [Sass](https://sass-lang.com/): an extended syntax for CSS stylesheets

## 📚 Documentation

- [Azle book](https://demergent-labs.github.io/azle/the_azle_book.html)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Internet Computer wiki](https://wiki.internetcomputer.org/)
- [Internet Computer forum](https://forum.dfinity.org/)
- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Developer Experience Feedback Board](https://dx.internetcomputer.org/)


## 💡 Tips and Tricks

- When developing remotely, navigating to the canister's frontend in the browser will not work.
Use `curl` on the command line instead, or develop locally.

- Note that you might need to disable CORS in your browser to make backend calls from `localhost`.
For example, for Chrome, run `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`
 to disable CORS.

- If you get an error "Error: An error happened during communication with the replica: ... Connection refused", run `dfx start --clean` to start dfx.


## [Repo Link](https://github.com/AirMug/ABiteOfICP.git)
## Description: 
This repo is a summary of our first bite of ICP, we extend the functionalities of the template such as a Canister that could keep track of its balance etc.

## Track: Fully on-chain dapps
## Team participants: 
@AirMug, @MindCustom, @haojiahuojxust, @linliangmin

## Mainnet canister link: 
https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/

## Feedback:
## What you learned...
ICP's advantages that could make full-apps on chain, even the storage!
## Challenges...
Not familiar with JS Language(and the devops setup is kind of a torture), A tight timeline to really #finish# Something, 
## What you are proud of...
Gained a deeper understanding of ICP and learned/practiced a new tech stack.
# ethereum-referendum

This is a simple app to play with Ethereum. The goal is to implement a simple
and secure referendum system using the blockchain technology. 
People can answer yes or no on a particular proposal and 
have access to the result. The vote is signed by the voter's account.

This example use the following:

- [Solidity](https://solidity.readthedocs.io/en/develop/)
- [Truffle](https://github.com/consensys/truffle)
- web3.js API
- TestRPC

## Installation

```
npm install -g yarn
yarn install
```
## Workflow for Deploying Smart Contracts

The workflow is:
- yarn client: Starts a node on a test network (testrpc)
- yarn compile: Compiles Solidity smart contract
- yarn deploy: Migrates all compiled contracts to the network 
(the --reset flag is used)
- yarn console: Launches the truffle console. You can interact with your 
contracts by using the web3.js's Javascript API
- yarn test: runs the test

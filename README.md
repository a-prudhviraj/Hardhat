# Introduction to Hardhat NFT Project (ERC20 Token with Tests)

This project demonstrates a complete Hardhat workflow including smart contract development, automated testing using Mocha + Ethers, and local blockchain interaction. It is focused on building and testing an ERC20 token with role based access control.

## Project Overview

This repository includes:
- A Solidity smart contract implementing an ERC20 token with AccessControl
- Hardhat configuration for testing and development
- Automated JavaScript tests using Mocha and Chai
- Example commands to run tests and deploy (locally or to testnet)

## Tech Stack

- Solidity
- OpenZeppelin Contracts
- Hardhat
- Mocha & Chai (for testing)
- Ethers.js (for contract interaction)

## Contract Details

- **Token Name:** PrudhvirajToken  
- **Symbol:** PRT  
- **Standard:** ERC20 (OpenZeppelin)  
- **Role Control:** AccessControl (role based)  
- **Network:** Monad Testnet  
- **Contract Address:** `0xba89Dc33fc00a0D4448d454c380b2C19033D6fB8`  
- **Deployment Tx Hash:** `0xbada72d3577fa13a2c748676053ba0b007640f7ea9dc5a84f87dbf98efbc9f84`

### Explorer Links

- **Contract on Monad Explorer:**  
  https://testnet.monadexplorer.com/address/0xba89Dc33fc00a0D4448d454c380b2C19033D6fB8

- **Deployment Transaction:**  
  https://testnet.monadvision.com/tx/0xbada72d3577fa13a2c748676053ba0b007640f7ea9dc5a84f87dbf98efbc9f84

## Features

✅ ERC20 Token using OpenZeppelin  
✅ Role based access control (`MINTER_ROLE`, `BURNER_ROLE`)  
✅ Automated tests in Hardhat environment  
✅ Mint and burn restrictions based on roles  
✅ Demonstrates best practices for smart contract testing


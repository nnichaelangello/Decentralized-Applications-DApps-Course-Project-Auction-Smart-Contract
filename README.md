# Decentralized Applications (DApps) Course Project - Auction Smart Contract

This repository contains the implementation and testing of a decentralized auction smart contract as part of the **Decentralized Applications (DApps)** course offered by **University at Buffalo & The State University of New York** on **Coursera**. The project demonstrates the development of a smart contract using Solidity, deployment using Truffle, and testing using Mocha and Chai.

---

## **Project Overview**

### **Description**
The project involves creating a decentralized auction system where participants can register, bid on items, and reveal winners. The smart contract is written in Solidity and deployed on a local Ethereum blockchain using Ganache. The functionality of the contract is tested using Truffle's testing framework.

### **Key Features**
1. **Registration**: Participants can register to become bidders.
2. **Bidding**: Bidders can place bids on items using their tokens.
3. **Winner Selection**: The contract owner can reveal winners for each item.
4. **Security**: Only the owner can reveal winners, and bidders cannot bid more tokens than they possess.

---

## **Technologies Used**
- **Solidity**: For writing the smart contract.
- **Truffle**: For compiling, migrating, and testing the smart contract.
- **Ganache**: For running a local Ethereum blockchain.
- **Mocha & Chai**: For writing and running test cases.
- **Node.js**: For running Truffle and managing dependencies.

---

## **Project Structure**
```
dapp-auction/
├── contracts/
│   ├── Auction.sol          # Main auction smart contract
│   └── Migrations.sol       # Truffle migration contract
├── migrations/
│   ├── 1_initial_migration.js  # Migration script for Migrations.sol
│   └── 2_deploy_contracts.js   # Migration script for Auction.sol
├── test/
│   └── test.js              # Test cases for the auction contract
├── truffle-config.js        # Truffle configuration file
└── README.md                # Project documentation
```

---

## **Getting Started**

### **Prerequisites**
1. **Node.js**: Install Node.js (v18.20.5 or later).
2. **Truffle**: Install Truffle globally using npm:
   ```bash
   npm install -g truffle
   ```
3. **Ganache**: Download and install Ganache from [here](https://trufflesuite.com/ganache/).

### **Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/nnichaelangello/Decentralized-Applications-DApps-Course-Project-Auction-Smart-Contract.git
   cd dapp-auction
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### **Running the Project**
1. **Start Ganache**:
   ![image](https://github.com/user-attachments/assets/43f082b2-9eaf-44d2-a8f8-f7fe783f94c9)

   - Open Ganache and create a new workspace or use the default one.
   - Ensure Ganache is running on port `9545`.

3. **Compile the Smart Contract**:
   ```bash
   truffle compile
   ```

4. **Migrate the Smart Contract**:
   ```bash
   truffle migrate --reset
   ```

5. **Run the Test Cases**:
   ```bash
   truffle test
   ```

---

## **Test Cases**
The following test cases are implemented in `test.js`:

1. **Contract Deployment**:
   - Ensures the contract is deployed successfully.

2. **Bidder Registration**:
   - Ensures bidders can register and their details are stored correctly.

3. **Bid Validation**:
   - Ensures bidders cannot bid more tokens than they possess.

4. **Owner-Only Functionality**:
   - Ensures only the owner can reveal winners.

5. **Winner Selection**:
   - Ensures winners are selected and stored correctly.

---

## **Terminal Output**

### **Compilation Output**
```
Compiling your contracts...
===========================
> Compiling .\contracts\Auction.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\Users\Michael Angello\Documents\Michael\Portofolio\Blockchain\dApps\Remix\build\contracts
> Compiled successfully using:
   - solc: 0.4.17+commit.bdeb9e52.Emscripten.clang
```

### **Migration Output**
```
Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)

1_initial_migration.js
======================
   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xd225662f8843355615554d5edcdb1d8ebbfd37b19ff0b7de7faa4f869c015011
   > contract address:    0xc1f82EBe8EEA539D5d2d39C6Bf1564A35A1C949D
   > block number:        1
   > block timestamp:     1737088112
   > account:             0x4726ae052d3A7c947196b91C68682Df387795208
   > balance:             99.999218123875
   > gas used:            231667 (0x388f3)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.000781876125 ETH

2_deploy_contracts.js
=====================
   Deploying 'Auction'
   -------------------
   > transaction hash:    0x5562b24d82c4ca99ec126977a187a49ea49aa3321ad4395e97059bcbffc0c987
   > contract address:    0xA22F63d2e925Fbe7460A2Cf2bE41fFcfc467c8d4
   > block number:        3
   > block timestamp:     1737088113
   > account:             0x4726ae052d3A7c947196b91C68682Df387795208
   > balance:             99.997088169004520678
   > gas used:            623183 (0x9824f)
   > gas price:           3.177832634 gwei
   > value sent:          0 ETH
   > total cost:          0.001980371274354022 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.002762247399354022 ETH
```

### **Test Output**
```
Contract: AuctionContract
  ✔ Contract deployment
  ✔ Should set bidders (65ms)
  ✔ Should NOT allow to bid more than remaining tokens (169ms)
  ✔ Should NOT allow non owner to reveal winners
  ✔ Should set winners (514ms)

5 passing (852ms)
```

---

## **Results**
- The smart contract was successfully compiled and deployed to the local Ethereum blockchain.
- All test cases passed, confirming the correctness of the contract's functionality.
- The project demonstrates a working decentralized auction system with secure and validated operations.

---

## **Acknowledgments**
![Cuplikan layar 2025-01-17 114205](https://github.com/user-attachments/assets/761261ec-0bce-4efc-b351-6e3cfbc2613e)

This project was completed as part of the **Decentralized Applications (DApps)** course by **University at Buffalo & The State University of New York** on **Coursera**. Special thanks to the instructors and course material for providing the knowledge and guidance to complete this project.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

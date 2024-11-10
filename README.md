# Proof-of-Attendance NFT Minting Service

This project implements a Proof-of-Attendance service using NFC technology to mint NFTs, specifically designed for educational environments. Developed for the **EDUChain 2024 Hackathon** in Bangkok, the project introduces a decentralized solution to track and authenticate student attendance through blockchain. 

## Overview

This system enables students to confirm their attendance in a class by scanning their professor's device with NFC. Upon scanning, students are redirected to a web application where they can mint a unique NFT as proof of attendance, which serves as an on-chain record. The NFT minting process takes place within the student's wallet app, ensuring a seamless and secure experience.

### Key Features
- **NFC-Enabled Attendance Verification**: Students authenticate their attendance by scanning the professor's NFC-enabled device.
- **Web Application for NFT Minting**: After scanning, students are redirected to a user-friendly web app to mint their attendance NFT.
- **Blockchain-Backed Records**: Using the Ethereum blockchain, each attendance record is stored immutably as an NFT.
- **DeFi Integration**: Falls under the DeFi category of dApps, bringing blockchain-powered financial tools into educational applications.

### Use Case
This solution was created for the **DeFi - Decentralized Finance dApps** track of EDUChain 2024, with the objective of exploring how blockchain can enhance educational experiences and bring verifiable credentialing to students and institutions alike.

## Technology Stack
- **Blockchain Platform**: EDUChain (EVM)
- **NFC Technology**: Peer-to-peer NFC communication for attendance verification
- **Web App Framework**: React.js, with web3 integration for wallet connection and NFT minting
- **Smart Contract Development**: Solidity
- **Wallet Compatibility**: Supports popular Ethereum wallets (MetaMask, WalletConnect, etc.)

## Contract on EDUChain

I deployed a custom ERC721 NFT contract on the EDUChain, so that I can mint the proof of attendance.
Contract address: `0x506D428E0414478dadC772891028282831085331`

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/proof-of-attendance-nft.git
   ```
2. Navigate to the project directory:
   ```bash
   cd proof-of-attendance-nft
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file to store your blockchain provider details, wallet information, and any API keys required for NFT metadata storage.

5. Compile and deploy the smart contract:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network your_network
   ```

6. Start the local development server:
   ```bash
   npm start
   ```

## Usage
1. **Professor Setup**: The professor opens the NFC-enabled app on their device to generate a scannable interface.
2. **Student Scan**: A student scans the professor's device with their NFC-enabled phone.
3. **NFT Minting**: The student is redirected to the wallet app and a web interface to mint their attendance NFT.

## Contributions
Contributions are welcome! Please create a pull request or open an issue to discuss any proposed changes.

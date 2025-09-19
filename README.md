# MST Registration DApp

A decentralized registration application built with **React + Ethers.js** that connects to the **MST Blockchain Testnet**.  
It collects user details across multiple steps (Mobile → Aadhaar → Profile → PAN → Profile View) and stores them on-chain via a smart contract.

---

## 🚀 Features

- Multi-step registration flow:
  1. Mobile number entry
  2. Aadhaar number entry
  3. Profile form (Full Name, Country, State, City, Address, Pincode, Referral, Password, Email)
  4. PAN entry with MetaMask wallet connection
  5. Profile summary (read-only, fetched from MST Testnet contract)
- MetaMask wallet integration (ethers.js v6, BrowserProvider)
- Consistent UI components (`FormCard`, `FormInput`)
- Contract interaction (`registerProfile`, `getProfile`)

---

## 📂 Project Structure
# Deployment Notes — MST Registration DApp

## 📍 Contract Details
- **Contract Name:** Registration
- **Network:** MST Testnet
- **Chain ID:** 4545
- **Deployed Address:** `0x76EaeceBBD9270eeaA77DdD754E1Fc77cf863dfd`
- **Deployer Wallet:** `0x7e6916Af95714BE309cF3eee98149074921D93e0`
- **Transaction Hash:** `0x...`

---

## ⚙️ Compiler Settings
- **Solidity Version:** 0.8.18
- **Optimizer Enabled:** true
- **Optimizer Runs:** 200
- **viaIR Enabled:** true

---

## ✅ Verification
- **Explorer:** [MSTScan Testnet](https:testnet.mstscan.com) <!-- replace if testnet explorer URL differs -->
- **Verification Status:** Pending / Verified
- **Source Code:** [`contracts/Registration.sol`](./contracts/Registration.sol)

---

## 🔑 Functions
- `registerProfile((string,string,string,string),(string,string,string,string,string,string),(string,string))`
- `getProfile(address)`

---

## 📝 Notes
- Frontend DApp collects form data and submits to contract at PAN step.
- Data is retrieved with `getProfile(walletAddress)` on Profile page.
- Password is included in demo but should **not** be stored on-chain in production.
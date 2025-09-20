# Deployment Notes — MST Registration DApp

## Contract
- **Name:** Registration
- **Network:** MST Testnet (chainId 4545)
- **Address:** `0x...` (paste deployed address here)
- **Deployer Wallet:** `0x...`
- **Transaction Hash:** `0x...`

## Compiler
- Version: `0.8.18`
- Optimizer: Enabled (runs = 200)
- `viaIR`: true (if used for stack too deep)

## Verification
- Verified on MSTScan: [Explorer Link](https://mstscan.com/address/0x.../contracts)  
- Status: ✅ Verified

## Notes
- Registration flow: Mobile → Aadhaar → Profile → PAN → ProfileView
- Frontend: React + ethers.js v6
- Storage: Data written on-chain via `registerProfile`, read via `getProfile`.
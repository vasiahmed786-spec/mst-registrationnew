import { ethers } from "ethers";

// MST Testnet config
const MST_CHAIN_ID_HEX = "0x11C1"; // 4545 in hex
const MST_RPC_URL = "https://testnetrpc.mstblockchain.com"; // 🔁 replace with your MST RPC

const MST_CHAIN_CONFIG = {
  chainId: MST_CHAIN_ID_HEX,
  chainName: "MST Testnet",
  nativeCurrency: {
    name: "MST",
    symbol: "MST", // 🔁 must match whatever MetaMask expects (check your existing network in MetaMask)
    decimals: 18,
  },
  rpcUrls: [MST_RPC_URL],
  blockExplorerUrls: ["https://testnet.mstscan.com"], // 🔁 update if needed
};

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask not detected!");
  }

  try {
    // First, try to switch
    try {
      console.log("👉 Trying to switch to MST Testnet...");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: MST_CHAIN_ID_HEX }],
      });
    } catch (switchError) {
      // If chain not added, then add it
      if (switchError.code === 4902) {
        console.log("👉 Chain not found, adding MST Testnet...");
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [MST_CHAIN_CONFIG],
        });
      } else {
        throw switchError;
      }
    }

    console.log("👉 Creating ethers provider...");
    const provider = new ethers.BrowserProvider(window.ethereum);

    console.log("👉 Requesting accounts...");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!accounts || accounts.length === 0) {
      throw new Error("No accounts returned from MetaMask.");
    }

    const account = accounts[0];
    console.log("✅ Account connected:", account);

    console.log("👉 Fetching network info...");
    const network = await provider.getNetwork();
    console.log("✅ Network:", network);

    return { account, network, provider };
  } catch (err) {
    console.error("❌ Wallet connection error:", err.message || err);
    throw err;
  }
}
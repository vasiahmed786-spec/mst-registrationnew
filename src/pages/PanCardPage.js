import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";
import { BrowserProvider, Contract } from "ethers";

// deployed MST Testnet contract
const CONTRACT_ADDRESS = "0x206719C0D1408Be5543482f89aBeeA5Fb582d209";
const CONTRACT_ABI = [
  "function registerProfile((string,string,string,string),(string,string,string,string,string,string),(string,string)) external"
];

export default function PanCardPage() {
  const { formData, setFormData } = useContext(FormContext);
  const [pan, setPan] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not found. Please install it.");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum, {
        chainId: 4545,
        name: "mst-testnet",
      });
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setWallet(addr);
      setFormData({ ...formData, walletAddress: addr });
    } catch (err) {
      console.error("MetaMask connection error:", err);
      alert("Connection failed. See console for details.");
    }
  };

 const onSubmit = async () => {
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
    alert("Enter a valid PAN number (ABCDE1234F format)");
    return;
  }
  if (!wallet) {
    alert("Please connect MetaMask first");
    return;
  }
    if (!wallet) {
      alert("Please connect MetaMask first");
      return;
    }

    setFormData({ ...formData, pan });

    try {
      const provider = new BrowserProvider(window.ethereum, {
        chainId: 4545,
        name: "mst-testnet",
      });
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Pack form data into contract structs
      const basic = [formData.mobile, formData.aadhaar, formData.fullName, formData.email];
      const addr = [formData.country, formData.state, formData.city, formData.address1, formData.address2, formData.pincode];
      const kyc = [formData.referral, pan];

      setLoading(true);
      const tx = await contract.registerProfile(basic, addr, kyc);
      await tx.wait(); // wait for confirmation
      setLoading(false);

      navigate("/profile-view");
    } catch (err) {
      console.error("Transaction error:", err);
      setLoading(false);
      alert("Transaction failed. See console.");
    }
  };

  return (
    <FormCard title="KYC — PAN Verification">
      {/* Tabs */}
      <div style={{ display: "flex", marginBottom: 16 }}>
        <button
          style={{ flex: 1, padding: 10, background: "#ddd", border: "1px solid #aaa", opacity: 0.5 }}
          disabled
        >
          Aadhaar Card
        </button>
        <button
          style={{ flex: 1, padding: 10, background: "#4285f4", color: "#fff", border: "1px solid #357ae8", fontWeight: "bold" }}
        >
          Pan Card
        </button>
      </div>

      <FormInput
        label="Enter Pan Card no."
        value={pan}
        onChange={(e) => setPan(e.target.value)}
        placeholder="ABCDE1234F"
      />

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            marginRight: 10,
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
          }}
        >
          {wallet ? `Connected: ${wallet.substring(0, 6)}...${wallet.slice(-4)}` : "Connect MetaMask"}
        </button>
        <button
          onClick={onSubmit}
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </FormCard>
  );
}
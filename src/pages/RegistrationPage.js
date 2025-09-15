import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserProvider } from "ethers";
import { useFormData } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function RegistrationPage() {
  const { data, update } = useFormData();
  const [wallet, setWallet] = useState("");
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not found. Please install it.");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setWallet(addr);
      update({ walletAddress: addr });
    } catch (err) {
      console.error("MetaMask connection error:", err);
      alert("Connection failed. See console for details.");
    }
  };

  const toPan = () => {
    if (!data.fullName) {
      alert("Please complete profile form first");
      return;
    }
    navigate("/pan");
  };

  return (
    <FormCard title="Final Registration">
      <FormInput label="Mobile" value={data.mobile} readOnly />
      <FormInput label="Aadhaar" value={data.aadhaar} readOnly />
      <FormInput label="Full Name" value={data.fullName} readOnly />

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {wallet
            ? `Connected: ${wallet.substring(0, 6)}...${wallet.slice(-4)}`
            : "Connect MetaMask"}
        </button>

        <button
          onClick={toPan}
          style={{
            marginLeft: 12,
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Proceed to KYC (PAN)
        </button>
      </div>
    </FormCard>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { import React, { useContext } from "react";
import { FormContext } from "../FormContext"; } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";
import { BrowserProvider, Contract } from "ethers";

//  deployed MST Testnet contract
const CONTRACT_ADDRESS = "0x48B170781DcbA29293D53B519BbaC08cD14CE45d";
const CONTRACT_ABI = [
  "function registerProfile((string,string,string,string),(string,string,string,string,string,string),(string,string)) external"
];

export default function PanCardPage() {
  const { data, update } = import React, { useContext } from "react";
import { FormContext } from "../FormContext";();
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
      update({ walletAddress: addr });
    } catch (err) {
      console.error("MetaMask connection error:", err);
      alert("Connection failed. See console for details.");
    }
  };

  const onSubmit = async () => {
    if (!pan) {
      alert("Enter PAN number");
      return;
    }
    if (!wallet) {
      alert("Please connect MetaMask first");
      return;
    }
    update({ pan });

    try {
      const provider = new BrowserProvider(window.ethereum, {
        chainId: 4545,
        name: "mst-testnet",
      });
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Pack form data into contract structs
      const basic = [data.mobile, data.aadhaar, data.fullName, data.email];
      const addr = [data.country, data.state, data.city, data.address1, data.address2, data.pincode];
      const kyc = [data.referral, pan];

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
        <button style={{ flex: 1, padding: 10, background: "#ddd", border: "1px solid #aaa", opacity: 0.5 }} disabled>
          Aadhaar Card
        </button>
        <button style={{ flex: 1, padding: 10, background: "#4285f4", color: "#fff", border: "1px solid #357ae8", fontWeight: "bold" }}>
          Pan Card
        </button>
      </div>

      <FormInput label="Enter Pan Card no." value={pan} onChange={(e) => setPan(e.target.value)} placeholder="ABCDE1234F" />

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button onClick={connectWallet} style={{ padding: "10px 20px", marginRight: 10, background: "#007bff", color: "white", border: "none", borderRadius: 6 }}>
          {wallet ? `Connected: ${wallet.substring(0, 6)}...${wallet.slice(-4)}` : "Connect MetaMask"}
        </button>
        <button onClick={onSubmit} disabled={loading} style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", borderRadius: 6 }}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </FormCard>
  );
}
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";
import { BrowserProvider, Contract } from "ethers";

// deployed MST Testnet contract address
const CONTRACT_ADDRESS = "0x206719C0D1408Be5543482f89aBeeA5Fb582d209";

// ABI for getProfile function
const CONTRACT_ABI = [
  "function getProfile(address) view returns ((string,string,string,string),(string,string,string,string,string,string),(string,string),uint256)"
];

export default function ProfilePage() {
  const { formData } = useContext(FormContext);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!window.ethereum || !formData.walletAddress) return;
      try {
        const provider = new BrowserProvider(window.ethereum, {
          chainId: 4545,
          name: "mst-testnet",
        });
        const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        // Call getProfile from blockchain
        const p = await contract.getProfile(formData.walletAddress);

        setProfile({
          // BasicInfo
          mobile: p[0][0],
          aadhaar: p[0][1],
          fullName: p[0][2],
          email: p[0][3],

          // AddressInfo
          country: p[1][0],
          state: p[1][1],
          city: p[1][2],
          address1: p[1][3],
          address2: p[1][4],
          pincode: p[1][5],

          // KycInfo
          referral: p[2][0],
          pan: p[2][1],

          registeredAt: p[3]
            ? new Date(Number(p[3]) * 1000).toLocaleString()
            : null,
        });
      } catch (err) {
        console.error("Error fetching profile from chain:", err);
      }
    };

    fetchProfile();
  }, [formData.walletAddress]);

  const display = profile || formData;

  return (
    <FormCard title="User Profile">
      <FormInput label="Wallet Address" value={formData.walletAddress || "Not connected"} readOnly />
      <FormInput label="Mobile" value={display.mobile} readOnly />
      <FormInput label="Aadhaar" value={display.aadhaar} readOnly />
      <FormInput label="Full Name" value={display.fullName} readOnly />
      <FormInput label="Country" value={display.country} readOnly />
      <FormInput label="State" value={display.state} readOnly />
      <FormInput label="City" value={display.city} readOnly />
      <FormInput label="Address Line 1" value={display.address1} readOnly />
      <FormInput label="Address Line 2" value={display.address2} readOnly />
      <FormInput label="Pin Code" value={display.pincode} readOnly />
      <FormInput label="Referral Code" value={display.referral} readOnly />
      <FormInput label="Password" type="password" value={display.password} readOnly />
      <FormInput label="Email" type="email" value={display.email} readOnly />
      <FormInput label="PAN" value={display.pan} readOnly />

      {display.registeredAt && (
        <div
          style={{
            marginTop: 16,
            textAlign: "center",
            fontSize: "0.9em",
            color: "#555",
          }}
        >
          <strong>Registered At:</strong> {display.registeredAt}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 24 }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Go To Home
        </button>
      </div>
    </FormCard>
  );
}
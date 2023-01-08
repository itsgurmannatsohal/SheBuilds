const { ethers } = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// Get the EOA and provider from you choice of your wallet.
const pkey = "5692db01c9ff9294f7eba2d16b1fc1464a43034c91b7399a0b7deb3d74118d10";
const polygonRPC = "https://rpc-mumbai.maticvigil.com/";
const fileInterface = new ethers.utils.Interface([
  {
    inputs: [],
    name: "complaintID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "complaintMapping",
    outputs: [
      {
        internalType: "address",
        name: "complaintBy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "complaintID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nameOfVictim",
        type: "string",
      },
      {
        internalType: "enum Platform.gender",
        name: "gender",
        type: "uint8",
      },
      {
        internalType: "enum Platform.domain",
        name: "domain",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "pincode",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "complaintDetails",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_evidenceHash",
        type: "string[]",
      },
      {
        internalType: "address",
        name: "_victim",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pincode",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_complaintDetails",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_gender",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_domain",
        type: "uint256",
      },
    ],
    name: "registerACase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_commentBy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_complaintID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_complaintDetails",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_evidenceUID",
        type: "string[]",
      },
    ],
    name: "registerComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewComplaint",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "complaintBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "nameOfVictim",
            type: "string",
          },
          {
            internalType: "enum Platform.gender",
            name: "gender",
            type: "uint8",
          },
          {
            internalType: "enum Platform.domain",
            name: "domain",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "pincode",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "complaintDetails",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "evidenceUID",
            type: "string[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "commentBy",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "commentID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "complaintDetails",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "evidenceUID",
                type: "string[]",
              },
            ],
            internalType: "struct Platform.Comments[]",
            name: "comment",
            type: "tuple[]",
          },
        ],
        internalType: "struct Platform.Complaint[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_complaintID",
        type: "uint256",
      },
    ],
    name: "viewComplaintDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "complaintBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "nameOfVictim",
            type: "string",
          },
          {
            internalType: "enum Platform.gender",
            name: "gender",
            type: "uint8",
          },
          {
            internalType: "enum Platform.domain",
            name: "domain",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "pincode",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "complaintDetails",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "evidenceUID",
            type: "string[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "commentBy",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "commentID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "complaintDetails",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "evidenceUID",
                type: "string[]",
              },
            ],
            internalType: "struct Platform.Comments[]",
            name: "comment",
            type: "tuple[]",
          },
        ],
        internalType: "struct Platform.Complaint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]);
const main = async () => {
  let provider = new HDWalletProvider(pkey, polygonRPC);
  const walletProvider = new ethers.providers.Web3Provider(provider);

  const fileContract = new ethers.Contract("", fileInterface, walletProvider);

  let allComplaint = await fileContract.viewComplaint();
  console.log(allComplaint);
  return allComplaint;
};

const specificComplaint = async (complaintID) => {
  let provider = new HDWalletProvider(pkey, polygonRPC);
  const walletProvider = new ethers.providers.Web3Provider(provider);

  const fileContract = new ethers.Contract("", fileInterface, walletProvider);

  let specComplaint = await fileContract.viewComplaintDetails(complaintID);
  console.log(specComplaint);
  return specComplaint;
};
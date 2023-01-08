require("dotenv").config();
import { ethers } from "ethers";
import { lighthouse } from "@lighthouse-web3/sdk";
import { ChainId } from "@biconomy/core-types";
import HDWalletProvider from "@truffle/hdwallet-provider";
import SmartAccount from "@biconomy/smart-account";

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

const deploy = async () => {
  const path = ""; //Give path to the file
  const apiKey = process.env.API_KEY;

  const response = await lighthouse.upload(path, apiKey);

  // Display response
  return response.data.Hash;
};
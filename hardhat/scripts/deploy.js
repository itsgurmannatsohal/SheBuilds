const { ethers } = require("hardhat");

async function main() {
 
  const platformContract  = await ethers.getContractFactory("Platform");

  const deployedPlatform = await platformContract.deploy();

  await deployedPlatform.deployed();

  console.log("Platfrom  Contract Address:", deployedPlatform.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

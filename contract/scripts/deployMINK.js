const hre = require("hardhat");

async function main() {
  const MINKTokenFactory = await hre.ethers.getContractFactory("MINKtoken");
  const MinkTokenContract = await MINKTokenFactory.deploy(1000000000);
  await MinkTokenContract.deployed();

  console.log(`contract address ${MinkTokenContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//* contract address : 0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42

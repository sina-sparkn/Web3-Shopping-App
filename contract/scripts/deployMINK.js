//! 0xB959D43Ef03f2A19D91Cf0d8d5f7C802915eE502

const hre = require("hardhat");

async function main() {
  const MINKTokenFactory = await hre.ethers.getContractFactory("MINKtokenTest");
  const MinkTokenContract = await MINKTokenFactory.deploy(1000000000);
  await MinkTokenContract.deployed();

  console.log(`contract address ${MinkTokenContract.address}`);

  const supply = await MinkTokenContract.totalSupply();

  console.log(`MINK totalSupply is : ${supply}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

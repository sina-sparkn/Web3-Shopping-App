//! 0xf5980862640589eD5821ba42bfD61C577d1F0F5e

const hre = require("hardhat");

async function main() {
  const MINKTokenFactory = await hre.ethers.getContractFactory("MINKtoken");
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

//! 0xD763400f38E83fFc2641631bAAb4238f7B08Ce2b

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

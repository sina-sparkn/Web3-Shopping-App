//! 0x9F18d8C8075461a027926a5e2955Eb0fDc497c33

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

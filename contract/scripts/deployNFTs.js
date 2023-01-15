const hre = require("hardhat");

async function main() {
  const rewardFactory = await hre.ethers.getContractFactory("sbrewards");
  const rewardContract = await rewardFactory.deploy();
  await rewardContract.deployed();
  console.log(`contract address : ${rewardContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//* contract address : 0x903eF6a9226e5b2Aee5BaDfC44B499785495cDEA

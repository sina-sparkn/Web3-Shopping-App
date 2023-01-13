const hre = require("hardhat");

async function main() {
  const rewardFactory1 = await hre.ethers.getContractFactory("TestOneFile");
  const rewardContract1 = await rewardFactory1.deploy();
  await rewardContract1.deployed();
  console.log(`contract address 1 : ${rewardContract1.address}`);

  const mint1 = await rewardContract1.mintReward();
  await mint1.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

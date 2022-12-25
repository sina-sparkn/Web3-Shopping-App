const hre = require("hardhat");

async function main() {
  const rewardOneFactory = await hre.ethers.getContractFactory("reward1");
  const rewardOneContract = await rewardOneFactory.deploy();
  await rewardOneContract.deployed();

  console.log(`contract address : ${rewardOneContract.address}`);

  const mintOne = await rewardOneContract.mint(1);
  await mintOne.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

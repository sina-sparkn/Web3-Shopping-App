const hre = require("hardhat");

async function main() {
  const rewardFactory = await hre.ethers.getContractFactory("rewardOne");
  const rewardContract = await rewardFactory.deploy();
  await rewardContract.deployed();

  console.log(`contract address : ${rewardContract.address}`);

  const mintOne = await rewardContract.mintReward1();
  await mintOne.wait();
  const mintTwo = await rewardContract.mintReward2();
  await mintTwo.wait();
  const mintThree = await rewardContract.mintReward3();
  await mintThree.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

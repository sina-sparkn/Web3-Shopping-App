const hre = require("hardhat");

async function main() {
  const rewardFactory1 = await hre.ethers.getContractFactory("TestOneFile");
  const rewardContract1 = await rewardFactory1.deploy();
  await rewardContract1.deployed();
  console.log(`contract address : ${rewardContract1.address}`);

  // const rewardFactory2 = await hre.ethers.getContractFactory("rewardTwo");
  // const rewardContract2 = await rewardFactory2.deploy();
  // await rewardContract2.deployed();
  // console.log(`contract address 2 : ${rewardContract2.address}`);

  // const rewardFactory3 = await hre.ethers.getContractFactory("rewardThree");
  // const rewardContract3 = await rewardFactory3.deploy();
  // await rewardContract3.deployed();
  // console.log(`contract address 3 : ${rewardContract3.address}`);

  // const rewardFactory4 = await hre.ethers.getContractFactory("rewardFour");
  // const rewardContract4 = await rewardFactory4.deploy();
  // await rewardContract4.deployed();
  // console.log(`contract address 4 : ${rewardContract4.address}`);

  // const rewardFactory5 = await hre.ethers.getContractFactory("rewardFive");
  // const rewardContract5 = await rewardFactory5.deploy();
  // await rewardContract5.deployed();
  // console.log(`contract address 5 : ${rewardContract5.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


const hre = require("hardhat");

async function main() {

  const Lottery = await hre.ethers.getContractFactory("Lottery"); //fetching bytecode and abi (artifacts)
  const lottery = await Lottery.deploy(); //creating an instance of our smart contract

  await lottery.deployed(); //deploying your smart contract

  console.log(
    `Deployed contract address: ${lottery.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

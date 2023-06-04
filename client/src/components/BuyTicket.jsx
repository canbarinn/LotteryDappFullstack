import { ethers, BigNumber } from "ethers";
import { Children } from "react";
import web3 from "web3";
import abi from "../contractJSON/Lottery.json";

const BuyTicket = ({ state }) => {
  const { contract } = state;

  const buyTicket = async (e) => {
    e.preventDefault();

    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });

    // test hash = 0x13600b294191fc92924bb3ce4b969c1e7e2bab8f4c93c3fc6d0a51733df3c060

    //balancebef= 100010999999999840

    const number = document.querySelector("#hash-input").value;
    const hash = await ethers.utils.solidityKeccak256(["string", "string"], [account.toString(), number]);
    const tier = document.querySelector("#ticket-tier-input").value;

    try {
      const transaction = await contract.buyTicket(hash, Number(tier));
      await transaction.wait();
      console.log(transaction);
      console.log("transaction");
      
    } catch (error) {
      console.log(error.reason);
    }
  };

  return (
    <>
      <form onSubmit={buyTicket}>
        <input id="hash-input" />
        <input id="ticket-tier-input" />
        <button id="buy-ticket-button">Buy Ticket</button>
      </form>
    </>
  );
};

export default BuyTicket;

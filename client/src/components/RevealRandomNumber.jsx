import { ethers, BigNumber } from "ethers";
import web3 from "web3";
import abi from "../contractJSON/Lottery.json";

const RevealRandomNumber = ({ state }) => {
  const { contract } = state;

  const revealRndNumber = async (e) => {
    e.preventDefault();

    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });

    // test hash = 0x13600b294191fc92924bb3ce4b969c1e7e2bab8f4c93c3fc6d0a51733df3c060

    //balancebef= 100010999999999840

    const number = document.querySelector("#random-number").value;
    const ticketNo = document.querySelector("#ticket-number").value;

    try {
      const transaction = await contract.revealRndNumber(ticketNo, Number(number));
      await transaction.wait();
      console.log(transaction);
      console.log("Number Revealed");
      
    } catch (error) {
      console.log(error.reason);
    }
  };

  return (
    <>
      <form onSubmit={revealRndNumber}>
        <input id="ticket-number" />
        <input id="random-number" />
        <button id="reveal-button">Reveal Random Number</button>
      </form>
    </>
  );
};

export default RevealRandomNumber;

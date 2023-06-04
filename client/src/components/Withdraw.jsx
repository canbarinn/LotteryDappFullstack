import { ethers } from "ethers";
import { Children } from "react";


const Withdraw=({state}) => {

    const withdraw = async(event)=>{
        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#withdraw-amount").value;
        const transaction1 = await contract.withdrawEther(amount)
        await transaction1.wait()
        console.log("Withdrawal is successfull")
    }

    return(
    <>
    <form onSubmit={withdraw} > 
    <input id="withdraw-amount"/>
    <button  id="deposit-button" >Withdraw</button>
    </form>
    </>)
}

export default Withdraw;
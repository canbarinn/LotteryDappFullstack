import { ethers } from "ethers";
import { Children } from "react";


const Deposit=({state}) => {

    const deposit = async(event)=>{
        event.preventDefault();
        const {contract} = state;
        const transaction1 = await contract.depositEther({value: ethers.utils.parseEther("0.1")})
        await transaction1.wait()
        console.log("Transaction is successfull")
    }

    return(
    <>
    <form onSubmit={deposit} > 
    <button  id="deposit-button" >Deposit</button>
    </form>
    </>)
}

export default Deposit;
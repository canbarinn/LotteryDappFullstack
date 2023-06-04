import { ethers } from "ethers";
import { useState, useEffect } from "react";

const Balance = ({state}) => {
    const [balance,setBalance] = useState("")
    const {contract} = state;
    useEffect(()=>{
        const getBalance = async()=>{
            const balance = await contract.getBalance();
            setBalance(balance.toString())
        //   console.log(balance.toString())
        }
        contract && getBalance();
    },[contract])

    return(
        <>
        <div>Balance: {balance}</div>
        </>
    )

}

export default Balance;
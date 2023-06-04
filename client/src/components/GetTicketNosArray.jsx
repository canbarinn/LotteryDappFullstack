import { ethers } from "ethers";
import { useState, useEffect } from "react";

const GetTicketNosArray = ({state}) => {
    const [ticketNos,setTicketNos] = useState("")
    const {contract} = state;
    // useEffect(()=>{
    //     const getTickets = async()=>{
    //         const ticketNo = await contract.getTicketNosArray();
    //         setTicketNos(ticketNo.toString())
    //         console.log(ticketNos.toString())
    //     }
    //     contract && getTickets();
    // },[contract])

    const getTicketNos = async () => {
        const ticketNo = await contract.getTicketNosArray();
            setTicketNos(ticketNo.toString())
            console.log(ticketNos.toString())
    }

    return(
        <>
        <button onClick={getTicketNos}>Get Owned Tickets</button>
        <div>TicketNos: {ticketNos}</div>
        </>
    )

}

export default GetTicketNosArray;
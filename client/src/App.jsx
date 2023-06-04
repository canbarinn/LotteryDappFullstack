import { useState, useEffect } from 'react'
import abi from "./contractJSON/Lottery.json"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ethers} from "ethers"
import './App.css'
import "./components/Deposit"
import Deposit from './components/Deposit'
import Balance from './components/Balance'
import BuyTicket from './components/BuyTicket'
import RevealRandomNumber from './components/RevealRandomNumber'
import GetTicketNosArray from './components/GetTicketNosArray'
import Withdraw from './components/Withdraw'

function App() {

  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  const [account,setAccount] = useState("Not connected")

  useEffect(() => {
    const template=async()=>{
      const contractAddress = "0x97FFC0fFf6fa08a433DbBAbaCC32527f92C77774";
      const contractABI=abi.abi;
      //Metamask part
      //1.In order to do transactions on goerli testnet
      //2.Metamask consists of infura api which actually help in connecting to the blockchain

      try { 
      const {ethereum} = window;
      
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      window.ethereum.on("accountsChanged", () => {
        window.location.reload()
      })
      
      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum) //read the blockchain
      const signer = provider.getSigner(); //write the blockchain 

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
      setState({provider,signer,contract})
    } catch(error){
      alert(error)
    }
    }
    template()
  },[])

  return (
    <>
      <div>Connected Account : {account}</div>
      <Deposit state={state}/>
      <Balance state={state}/>
      <BuyTicket state={state}/>
      <RevealRandomNumber state={state}/>
      <GetTicketNosArray state={state}/>
      <Withdraw state={state}/>
    </>
  )
}

export default App

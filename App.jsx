import { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import React from 'react';
import DropDown from '../dropdown';

// import DropDown from '/Victor/day22/Crypto/src/components/drop-down.jsx';

function CryptoKing() {
  let [crypto, setCrypto] = useState([]);
 
  const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
 
  
  const getTopTenCoins = async()=>{
  
    let response = await axios.get(url)
    // console.log(response.data)
    // console.log(response.data['Data'][0]['CoinInfo']['FullName'])
    // console.log(response.data['Data'][0]['DISPLAY']['USD']['PRICE'])
    setCrypto(response.data['Data'])
    // console.log(crypto2)
    }
  useEffect(()=>{
    getTopTenCoins()
  }, [])
  return (
    <div>
      <h1
        className="top-0 left-0 w-full h-full flex flex-row justify-center items-center text-white">
          Top Ten Crypto Coins of the Day
      </h1>
   

      {/* <button class = "button" onClick={getTopTenCoins}>See Top Ten Coins</button>
      <p>Definition: {data}</p> */}

      <button type = "button" className='btn btn-primary' onClick={getTopTenCoins}>Display Top Ten Coins of the Day</button> 
      <ol id = 'ol'>
        {crypto.map((c, idx)=>(
          <li key = {idx}>
           {c['CoinInfo']['FullName']}: {c['DISPLAY']['USD']['PRICE']}     
          </li>
        ))}
      </ol>
      <DropDown name = {crypto.map((c, idx) =>(
         c['CoinInfo']['FullName']
  ))} price = {crypto.map((c, idx) =>(
    c['DISPLAY']['USD']['PRICE']
))} />
    </div>
)}

export default CryptoKing



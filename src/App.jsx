import React from 'react'
import { useState, useEffect } from 'react'
import Dropdown from './components/Dropdown'

const App = () => {
  // const[data, setData] = useState(null)


  // useEffect( () => {
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example')

  //       if(!response.ok){
  //         throw new Error('Network response was not ok');
  //       }
  //       console.log(response);

  //       const newData = await response.json();
  //       console.log(newData);
  //       setData(newData);

  //     }
  //     catch(err){
  //       console.log(err);
  //     }

  //   }

  //   fetchData();


  // }, [] );

  // console.log(data)

// const data = 'https://github.com/Arantisjr';


  return (
    // <div>
    // <img src={`https://api.apgy.in/qr/?data=${data}&size=300`} alt="QR code" />
    // </div>
    <>
    <Dropdown />
    </>
  )
}

export default App
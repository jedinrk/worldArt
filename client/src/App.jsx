import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ConnectButton, CryptoCards, Button } from 'web3uikit';
import { Navbar, Footer } from './components'


const App = () => (
  <>
    <div className='App'>
      <Navbar />
      <div className='App-header'>
        <CryptoCards
          chain="ethereum"
          bgColor='blue'
          chainType='Network'
          onClick={console.log}
        />
        <Button theme="primary" type="button" text="Launch Dapp" />

      </div>
      <Footer />
    </div>

  </>
);

export default App

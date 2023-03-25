import { useState } from 'react'
import { Loader,Footer,Navbar,Services,Transactions,Welcome } from './components'
const App = () => {
   

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Loader/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      
    </div>
  )
}

export default App


import React from 'react'
import { useEffect } from 'react'

const Navbar = () => {
    
    useEffect(() => {
        console.log("Render huva")
        console.log("useEffect chala h ")

        return () => {
            console.log("Navbar remove ho gya h cleanup chla h ")
        }
    }, [])
  return (
    <div>
      <h1>Home</h1>
      <h2>About</h2>
      <h3>Contect-us</h3>
    </div>
  )
}

export default Navbar

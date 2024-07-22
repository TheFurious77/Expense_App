import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layouut = ({children}) => {
  return (
    <>
        <Header />
        <div className="content">{children}</div>
        <Footer />
    </>
  )
}

export default Layouut
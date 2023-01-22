import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import About from '../components/about/about'
import Body from '../components/body/body'
import Sidebar from '../components/Sidebar/sidebar'


const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Footer />
            <Body />
            <Sidebar/>
          </>
    )
}

export default Home;
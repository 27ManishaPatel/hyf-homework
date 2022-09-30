import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './ToDo.css'

export default function ToDo() {
    return <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
    </div>
}
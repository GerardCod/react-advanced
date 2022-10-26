import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import logo from '../assets/react.svg'
import { ShoppingPage } from '../components-patterns/pages/ShoppingPage'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo' />
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/users'} className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={ <ShoppingPage /> } />
                    <Route path='*' element={ <Navigate to={'/'} replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

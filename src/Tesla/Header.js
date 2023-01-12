import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
function Header() {

    const [menu, setmenuopen] = useState(false)

    function menuopen(e) {
        e.preventDefault();
        setmenuopen(true)
    }

    function open() {
        setmenuopen(false)
    }


    return (
        <header>
            
            <img src='Tesla images/logo.svg' />
            <nav>
                <ul>
                    <li><a href=''>Model S</a></li>
                    <li><a href=''>Model 3</a></li>
                    <li><a href=''>Model X</a></li>
                    <li><a href=''>Model Y</a></li>
                    <li><a href=''>Solor Roof</a></li>
                    <li><a href=''>Solor Panel</a></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>Account</a></li>
                    <li ><a href='' onClick={menuopen}>Menu</a></li>
                </ul>
            </nav>

            <ul className='back' style={{ right: (menu === false) ? "-250px" : "0" }}>

                <CloseIcon className='ico' onClick={open} />

                <li><a href=''>Existing Inventory</a></li>
                <li><a href=''>Used Inventory</a></li>
                <li><a href=''>Trade-In</a></li>
                <li><a href=''>Demo Drive</a></li>
                <li><a href=''>Insurance</a></li>
                <li><a href=''>Cybertruck</a></li>
                <li><a href=''>Roadstar</a></li>
                <li><a href=''>Charging</a></li>
                <li><a href=''>Powerwall</a></li>
                <li><a href=''>Commercial Energy</a></li>
                <li><a href=''>Utilities</a></li>
                <li><a href=''>Find Us</a></li>
                <li><a href=''>Suppart</a></li>
                <li><a href=''>Investor Relations</a></li>
            </ul>

        </header>
    )
}

export default Header
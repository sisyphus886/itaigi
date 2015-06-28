'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import './AppBar.css'

class AppBar extends React.Component {
  render () {
    return (
      <div className='app bar container'>
        <h1 className='title segment'>
          <Link to='app'>
            <i className='logo'>
              <u>i taigi</u>
            </i>
          </Link>
        </h1>
        <ul className='ui main menu'>
          <li className='item'>
            <Link to='kong' params={{k: ''}}>怎樣講</Link>
          </li>
          <li className='item'><Link to='lun'>來討論</Link></li>
          <li className='item'><Link to='the'>還不會</Link></li>
          <li className='item'><Link to='iong'>好工具</Link></li>
          <li className='item'><Link to='mia'>名人堂</Link></li>
        </ul>
        <ul className='ui social menu'>
          <li className='item'>F</li>
          <li className='item'>G</li>
          <li className='item'>T</li>
          <li className='item'>R</li>
        </ul>
      </div>
      )
  }
}

export default Transmit.createContainer(AppBar, { query: {} })

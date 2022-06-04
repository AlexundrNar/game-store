import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from './CartBlock'

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          Game Store
        </Link>
      </div>
      <div>
        <CartBlock />
      </div>
    </div>
  )
}

export default Header
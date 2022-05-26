import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/ps37-text-purp-09.png'

const Header = ({ siteTitle }) => (
  <div>
    <div className={"header"}>
      <ul className="footer-list">
        <li className="flex-footer-link"> 
  
            <Link href="/events">EVENTS</Link>
      
  
            <Link href="/art">ART</Link>  
          
        </li>
        <li>
          <Link href="/"> 
           <div className="footer-img"><Image src={logo} /></div>
        </Link>
        </li>
        <li className="flex-footer-link">
          <Link href="/rent">RENT ME</Link>
          <div><Link href="/about">INFO</Link></div>
        </li>
      </ul>
    </div>
  </div>
)



Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React, {useState, useEffect} from "react"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/ps37-text-purp-09.png'
import MenuIcon from '@material-ui/icons/Menu';
import {useRouter} from 'next/router'

const Header = ({ siteTitle}) => {
const [isOpen, setIsOpen] = useState(false)
const router = useRouter();

useEffect(() => {
  if (isOpen) {
    setIsOpen(!isOpen)
  }
},[router.asPath] )
return (
  <div>
  <div className="header-shiv"></div>
   <div className="header">
      <ul className="footer-list">
        <li className="flex-footer-link"> 
            <Link href="/events">EVENTS</Link>
            <Link href="/posts">UPDATES</Link>  
        </li>
        <li>
          <Link href="/"> 
           <div className="footer-img"><Image src={logo} /></div>
        </Link>
        </li>
        <li className="flex-footer-link">
          <Link href="/rent">RENT</Link>
          <div><Link href="/about">INFO</Link></div>
        </li>
      </ul>
    </div>  

    <div className="header-mobile">
    <MenuIcon onClick={() => setIsOpen(!isOpen)}style={{
      color: 'purple',
      fontSize: '40px'
    }}></MenuIcon>
    <Link href="/"> 
      <div className="mobile-logo"><Image src={logo} /></div>
  </Link>
    {isOpen && 
      <ul className="footer-list">
        <li className="flex-footer-link mobile-link"> 
          <Link href="/events">EVENTS</Link>
         </li>
        <li className="flex-footer-link mobile-link">
        <Link href="/posts">UPDATES</Link>  
        </li>
      
        <li className="flex-footer-link mobile-link">
          <Link href="/rent">RENT</Link>
        </li>
        <li className="flex-footer-link mobile-link">
        <Link href="/about">INFO</Link>
        </li>
      </ul> }
    </div>
  </div>
)
}



Header.defaultProps = {
  siteTitle: ``,
}

export default Header

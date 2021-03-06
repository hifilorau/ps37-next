import Link from 'next/link'
import logo from '../public/images/ps37-text-purp-09.png'
import Image from 'next/image'

const Footer = ({fixed}) => {
  return (
  <div className={!fixed ? "footer" : "footer block-footer"}>
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
        <Link href="/rent">RENT ME</Link>
        <div><Link href="/about">INFO</Link></div>
      </li>
    </ul>
  </div>
  )
}

export default Footer;
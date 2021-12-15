import Link from 'next/link'
import logo from '../public/images/ps37-text-purp-09.png'
import Image from 'next/image'

const Footer = ({fixed}) => {
  return (
  <div className={!fixed ? "footer" : "footer block-footer"}>
    <ul className="footer-list">
      <li><Link href="/events">EVENTS</Link></li>
      <li>
        <Link href="/"> 
         <div className="footer-img"><Image src={logo} /></div>
      </Link>
      </li>
      <div>
        <li><Link href="/about">INFO</Link></li>
      </div>
    </ul>
  </div>
  )
}

export default Footer;
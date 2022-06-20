import Image from 'next/image'
import Logo from "../public/images/logo-13.svg"
import Footer from '../components/Footer.jsx'
import Snow from '../components/Snow'
const Loading = () => {
return (
<div className="loading">
  <Snow />
<div className="logo-wrapper">
        {/* <Link href="/vaporplanes">  */}
            <Image className="logo-landing glitch" src={Logo}/>
        {/* </Link> */}
          {/* { this.state.randomNumber == 3 ?  <div className="tagline">A Paradise in Space</div>  : null }  */}
          {/* { this.state.randomNumber !== 3 ? <div className="tagline">makerspace, office, and arthaüs</div> : null } */}
          <div className="">Loading... greatness takes time.</div> 
          {/* <div>Or the site is down</div> */}
        </div>
</div>
);
}

export default Loading
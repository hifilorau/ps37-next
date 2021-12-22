import Image from 'next/image'
import Logo from "../public/images/logo-13.svg"

const Loading = () => {
return (
<div className="loading">
<div className="logo-wrapper">
        {/* <Link href="/vaporplanes">  */}
            <Image className="logo-landing glitch" src={Logo}/>
        {/* </Link> */}
          {/* { this.state.randomNumber == 3 ?  <div className="tagline">A Paradise in Space</div>  : null }  */}
          {/* { this.state.randomNumber !== 3 ? <div className="tagline">makerspace, office, and arthaüs</div> : null } */}
          <div className="tagline">Loading top shelf content for that ass</div> 
          {/* <div>Or the site is down</div> */}
        </div>
</div>
);
}

export default Loading
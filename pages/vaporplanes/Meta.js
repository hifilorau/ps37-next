
// import '../Future/future.css'

const MetaInfo = ({meta, info}) => {
  if (!meta) {
    return <div>Coming Soon.</div>
  }
  return (
    <div className={info ? "nft-fo fade-in meta-fo" : "nft-fo meta-fo fade-out"}>
      <div className="meta-item">
        <div className="meta-label">Plane:</div>
        <div className="meta-value">{meta.theme}</div>
      </div>
      {/* {meta.logo && <div className="meta-item">
        <div className="meta-label">Logo:</div>
        <div className="meta-value">{meta.logo}</div>
      </div> } */}
      {meta.sky && <div className="meta-item">
        <div className="meta-label">Sky:</div>
        <div className="meta-value">{meta.sky}</div>
      </div> }
      {meta.grid && <div className="meta-item">
        <div className="meta-label">Grid:</div>
        <div className="meta-value">{meta.grid}</div>
      </div> }
      {meta.inverted && <div className="meta-item">
        <div className="meta-label">Inverted:</div>
        <div className="meta-value">{meta.inverted ? "true" : null}</div>
      </div> }
      <div className="meta-item">
        <div className="meta-label">Moons:</div>
        <div className="meta-value">{meta.moons}</div>
      </div>
      <div className="meta-item">
        <div className="meta-label">Mtns:</div>
        <div className="meta-value">{meta.mountains}</div>
      </div>
      <div className="meta-item">
        <div className="meta-label">Sun:</div>
        <div className="meta-value">{meta.sun ? "Yes" : "No"}</div>
      </div>
    </div>
  )
}

export default MetaInfo